import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function BlogPostPage() {
  return (
    <section className="flex flex-col w-full max-w-[68ch]">
      <div className="mb-10 flex flex-row items-center justify-between w-full">
        <div className="flex flex-row items-center gap-2">
          <Link
            href="/"
            className="font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Home
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link
            href="/writing"
            className="font-medium text-foreground transition-colors hover:text-muted-foreground"
          >
            Writing
          </Link>
        </div>
        <ThemeToggle />
      </div>

      <article className="flex flex-col w-full text-lg text-foreground/90 leading-relaxed">
        <header className="mb-2">
          <h1 className="text-2xl font-bold tracking-[-0.04em] text-foreground mb-1">
            Building Zero Trust with eBPF
          </h1>
          <time className="font-medium text-muted-foreground">2026-03-28</time>
        </header>

        <div className="flex flex-col gap-6 mt-6">
          <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">
            the iptables honeymoon (and the crash)
          </h2>

          <p>
            i started working with linux firewalls recently. it was a modest server setup
            for a personal project: a database here, a web app there, and a simple rule
            in my head: <em>the database should only talk to the web app.</em>
          </p>

          <p>
            “iptables is easy,” a tutorial said. “just follow these steps:”
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>create a custom chain</li>
            <li>append rules for incoming traffic</li>
            <li>lock down the default policy to drop</li>
          </ol>

          <p>and it worked on the first try.</p>

          <p>
            that success was intoxicating. i wrote little bash scripts to ship the same
            rules to all my boxes. for a while, it felt like i’d finally found the right
            level of control: explicit rules, a clear deny-by-default posture, and enough
            flexibility to unblock myself when something broke.
          </p>

          <p>
            but as soon as the environment got more dynamic, iptables stopped feeling
            like a foundation and started feeling like a trap.
          </p>

          <p>
            first came scale. once you’re dealing with containerized workloads, “a handful
            of IPs” becomes “a rotating cast of thousands.” the naive version of this story
            is just performance: huge chains, linear traversal, and every packet paying the
            price.
          </p>

          <p>the real problem, though, was correctness under change.</p>

          <p>
            i still remember a friday night where an automated policy sync triggered an{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              iptables-restore
            </code>
            . mid-apply, a pod vanished. the restore failed partway through. nothing was{" "}
            <em>totally</em> down; it was just down enough to be confusing: legitimate database
            connections started dropping, and the firewall was left in a fractured state.
          </p>

          <p>that night crystallized what i actually wanted:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>high performance</strong> under lots of rules
            </li>
            <li>
              <strong>safe updates</strong> that don’t leave the node half-configured
            </li>
            <li>
              <strong>a policy model that matches dynamic systems</strong> instead of
              fighting them
            </li>
          </ul>

          <p>that’s when i started taking eBPF seriously.</p>

          <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">
            compiling without compilers
          </h2>

          <p>i was honestly scared of eBPF at first.</p>

          <p>
            not because the idea was hard to love (running a programmable filter inside the
            kernel is obviously powerful), but because the operational story seemed awful.
            the demos i saw online were impressive, but they usually implied: compile C on
            the target machine, ship toolchains around, install kernel headers, and hope
            nothing subtly mismatches.
          </p>

          <p>
            i didn’t want to install{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              clang
            </code>
            ,{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              llvm
            </code>
            , and kernel headers on pristine production nodes just to run a firewall.
          </p>

          <p>
            zero trust isn’t only about default deny; it’s also about minimizing what you{" "}
            <em>have to trust</em> on the box. “a compiler toolchain on every node” is a
            bigger surface area than i was willing to accept.
          </p>

          <p>
            then i found{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              bpf2go
            </code>
            {" "}(from{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              github.com/cilium/ebpf
            </code>
            ), and the whole thing clicked.
          </p>

          <p>
            instead of compiling at runtime, you compile at <strong>build time</strong>,
            embed the resulting eBPF object into the Go binary, and ship a single artifact.
          </p>

          <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
            <code>
              {
                "//go:generate go run github.com/cilium/ebpf/cmd/bpf2go -no-strip -target bpfel,bpfeb -cc clang bpf ../../bpf/filter.c -- -I../../bpf"
              }
            </code>
          </pre>

          <p>that one line isn’t just convenience; it’s a deployment model.</p>

          <p>at runtime, the node does something like this:</p>

          <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
            <code>
              {`// userspace (simplified): load embedded programs + attach to cgroup
var objs bpfObjects
if err := loadBpfObjects(&objs, nil); err != nil {
    return fmt.Errorf("load bpf objects: %w", err)
}
defer objs.Close()

egressLink, err := link.AttachCgroup(link.CgroupOptions{
    Path:    "/sys/fs/cgroup/my-workload",
    Attach:  ebpf.AttachCGroupInetEgress,
    Program: objs.FilterEgress,
})
if err != nil {
    return fmt.Errorf("attach egress: %w", err)
}
defer egressLink.Close()

ingressLink, err := link.AttachCgroup(link.CgroupOptions{
    Path:    "/sys/fs/cgroup/my-workload",
    Attach:  ebpf.AttachCGroupInetIngress,
    Program: objs.FilterIngress,
})
if err != nil {
    return fmt.Errorf("attach ingress: %w", err)
}
defer ingressLink.Close()`}
            </code>
          </pre>

          <p>
            in ZTAP, it means the “compiler problem” disappears from runtime. if the host
            meets the kernel requirements (notably: a modern enough kernel and cgroup v2),
            ZTAP can load the embedded program and enforce policies without dragging a build
            toolchain onto the node.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">
            the epiphany of atomic updates
          </h2>

          <p>what really sold me on eBPF wasn’t just the packaging.</p>

          <p>
            it was the fact that eBPF lets you treat kernel enforcement like a real system
            with a real state transition, instead of a pile of text rules that you repeatedly
            tear down and rebuild.
          </p>

          <p>
            ZTAP’s policy model is intentionally strict: <em>default deny.</em> policies
            describe exactly what is allowed: protocols, ports, and destinations/sources
            (usually expressed as IP blocks once targets are resolved).
          </p>

          <p>the key difference is how updates work.</p>

          <p>
            with iptables, “apply a new policy” often becomes “rewrite the world,” and if
            anything fails mid-flight you can end up in an in-between state. it’s not that
            iptables is bad; it’s that its common update mechanisms don’t give you a clean
            transactional boundary.
          </p>

          <p>
            with eBPF, ZTAP can do something much closer to a transactional rollout:
          </p>

          <ol className="list-decimal pl-6 space-y-2">
            <li>load a <strong>new</strong> eBPF program and its maps</li>
            <li>populate the policy maps with the <strong>next</strong> policy state</li>
            <li>atomically swap the cgroup attachment to point at the new program</li>
          </ol>

          <p>
            in the ZTAP codebase, that atomic swap is handled via a{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              bpf_link
            </code>
            {" "}update (through{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              github.com/cilium/ebpf/link
            </code>
            ). the implementation updates both egress and ingress hooks:
          </p>

          <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
            <code>
              {`// simplified from ZTAP's reload path
func (e *eBPFEnforcer) UpdateFrom(old *eBPFEnforcer) error {
    if old.egressLink != nil {
        if err := old.egressLink.Update(e.objs.FilterEgress); err != nil {
            return err
        }
        e.egressLink = old.egressLink
        old.egressLink = nil
    }

    if old.ingressLink != nil {
        if err := old.ingressLink.Update(e.objs.FilterIngress); err != nil {
            return err
        }
        e.ingressLink = old.ingressLink
        old.ingressLink = nil
    }

    return nil
}`}
            </code>
          </pre>

          <p>
            the important part isn’t the exact method name; it’s the shape of the idea:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>the old program keeps enforcing while the next one is prepared</li>
            <li>the swap is a single, explicit step</li>
            <li>
              if the swap fails, you can fall back to a full re-attach instead of running
              in a half-updated state
            </li>
          </ul>

          <p>
            and because ZTAP uses typed data structures in the kernel, policy enforcement
            becomes a map lookup instead of rule traversal.
          </p>

          <p>
            in the current ZTAP implementation, the kernel-side key is designed for fast
            lookups and supports CIDR matching via LPM tries. conceptually, the match space
            looks like:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>direction: egress vs ingress</li>
            <li>protocol: tcp/udp/icmp</li>
            <li>port: l4 port (or 0 for icmp)</li>
            <li>ip prefix: ipv4/ipv6 destination (egress) or source (ingress)</li>
            <li>cgroup id: which workload the packet belongs to (with a “global” fallback)</li>
          </ul>

          <p>here’s a simplified version of that “map lookup” idea (LPM trie + a global fallback):</p>

          <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
            <code>
              {`/* kernel-side (simplified): LPM trie allowlist */
struct lpm_key_v4 {
    __u32 prefixlen;   // bits in the key to match (selectors + CIDR bits)
    __u64 cgroup_id;   // 0 = global fallback
    __u8  proto;       // IPPROTO_TCP / IPPROTO_UDP / IPPROTO_ICMP
    __u8  direction;   // 0=ingress 1=egress
    __u16 dport;       // numeric port (host order)
    __u32 ip4;         // numeric IPv4 (host order)
};

struct {
    __uint(type, BPF_MAP_TYPE_LPM_TRIE);
    __uint(max_entries, 65536);
    __type(key, struct lpm_key_v4);
    __type(value, __u8); // 1 = allow
    __uint(map_flags, BPF_F_NO_PREALLOC);
} allow_v4 SEC(".maps");

static __always_inline int allowed_v4(struct lpm_key_v4 *k)
{
    __u8 *ok = bpf_map_lookup_elem(&allow_v4, k);
    if (ok) return 1;

    k->cgroup_id = 0; // global fallback
    ok = bpf_map_lookup_elem(&allow_v4, k);
    return ok ? 1 : 0;
}

SEC("cgroup_skb/egress")
int filter_egress(struct __sk_buff *skb)
{
    __u64 cg = bpf_get_current_cgroup_id();

    struct lpm_key_v4 k = {
        // NOTE: prefixlen is computed per-policy based on selectors + CIDR bits
        .cgroup_id = cg,
        .direction = 1,
    };

    // parse skb into: k.proto, k.dport, k.ip4, k.prefixlen
    // (omitted here for clarity)

    return allowed_v4(&k) ? 1 : 0; // 1=allow, 0=drop
}`}
            </code>
          </pre>

          <p>
            that last detail (cgroup identity) ends up being the bridge between “a network
            policy” and “the exact workload that policy applies to.”
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
            default deny, and the subtlety of ‘selected only’
          </h3>

          <p>
            one subtle thing i didn’t appreciate early on: <em>default deny</em> is simple
            in a static world, but in orchestrated environments you also need to decide{" "}
            <strong>who the policy even applies to</strong>.
          </p>

          <p>
            ZTAP’s eBPF program supports a “selected only” mode: if enabled, only traffic
            from cgroups explicitly selected by policies is evaluated for default-deny
            behavior; everything else is allowed.
          </p>

          <p>in code, it’s basically:</p>

          <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
            <code>
              {`const volatile __u8 selected_only = 1;

struct {
    __uint(type, BPF_MAP_TYPE_HASH);
    __uint(max_entries, 8192);
    __type(key, __u64);   // cgroup_id
    __type(value, __u8);  // 1 = selected
} selected_cgroups SEC(".maps");

__u64 cg = bpf_get_current_cgroup_id();

if (selected_only) {
    __u8 *sel = bpf_map_lookup_elem(&selected_cgroups, &cg);
    if (!sel) return 1; // not selected => allow
}

// ... otherwise, enforce allowlist + default deny`}
            </code>
          </pre>

          <p>that sounds like a footnote, but it’s the difference between:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>“this node is now a default-deny firewall for every process”</li>
            <li>“this policy applies to the workloads i selected, and nothing else”</li>
          </ul>

          <p>
            that distinction matters when you’re trying to make enforcement safe to roll
            out.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
            flows as a first-class output
          </h3>

          <p>
            another thing i love about this design is that enforcement can emit structured
            flow events.
          </p>

          <p>
            the eBPF program writes{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              flow_event
            </code>
            {" "}records into a ring buffer map, and ZTAP can pin that map in bpffs (by
            default at{" "}
            <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">
              /sys/fs/bpf/ztap/flow_events
            </code>
            ) so user-space tools can stream what’s happening.
          </p>

          <p>kernel-side, emitting an event looks like:</p>

          <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
            <code>
              {`struct flow_event {
    __u64 ts_ns;
    __u64 cgroup_id;
    __u32 src_ip4;   // host order (after bpf_ntohl)
    __u32 dst_ip4;   // host order (after bpf_ntohl)
    __u16 src_port;  // host order (after bpf_ntohs)
    __u16 dst_port;  // host order (after bpf_ntohs)
    __u8  proto;
    __u8  direction;
    __u8  verdict;   // 0=deny 1=allow
    __u8  _pad;
};

struct {
    __uint(type, BPF_MAP_TYPE_RINGBUF);
    __uint(max_entries, 1 << 24); // 16 MiB
} flow_events SEC(".maps");

static __always_inline void emit_flow(struct flow_event *e)
{
    struct flow_event *dst = bpf_ringbuf_reserve(&flow_events, sizeof(*dst), 0);
    if (!dst) return;

    *dst = *e;
    bpf_ringbuf_submit(dst, 0);
}`}
            </code>
          </pre>

          <p>and user-space can tail the ring buffer with:</p>

          <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
            <code>
              {`// read from the pinned map path mentioned above
m, err := ebpf.LoadPinnedMap("/sys/fs/bpf/ztap/flow_events", nil)
if err != nil {
    return fmt.Errorf("load pinned flow_events: %w", err)
}
defer m.Close()

rd, err := ringbuf.NewReader(m)
if err != nil {
    return fmt.Errorf("ringbuf reader: %w", err)
}
defer rd.Close()

for {
    record, err := rd.Read()
    if err != nil {
        if errors.Is(err, ringbuf.ErrClosed) {
            break
        }
        continue
    }

    var e FlowEvent
    if err := binary.Read(bytes.NewReader(record.RawSample), binary.LittleEndian, &e); err != nil {
        continue
    }

    dst := net.IPv4(byte(e.DstIP4), byte(e.DstIP4>>8), byte(e.DstIP4>>16), byte(e.DstIP4>>24))
    fmt.Printf("cg=%d dst=%s:%d verdict=%d\n", e.CgroupID, dst.String(), e.DstPort, e.Verdict)
}`}
            </code>
          </pre>

          <p>
            you don’t have to guess whether something was allowed or blocked; you can observe
            it.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">
            making it work everywhere
          </h2>

          <p>of course, not every environment is a pristine modern linux kernel.</p>

          <p>
            i wanted ZTAP to be a tool i could use locally just as easily as in production,
            and i didn’t want “no eBPF” to mean “no story.”
          </p>

          <p>so the design is intentionally layered:</p>

          <ul className="list-disc pl-6 space-y-2">
            <li>the <strong>policy model</strong> stays the same</li>
            <li>
              a <strong>compiler</strong> stage turns policies into enforceable primitives
              (often concrete IP blocks)
            </li>
            <li>
              an <strong>enforcer backend</strong> applies those primitives using the best
              mechanism available
            </li>
          </ul>

          <p>on linux, the eBPF enforcer is the crown jewel.</p>

          <p>
            but when eBPF isn’t available (kernel constraints, missing cgroup v2, or
            insufficient privileges), ZTAP keeps traditional fallbacks around. on linux
            that can mean an iptables-based path; on macOS, a pf-based path.
          </p>

          <p>
            these fallbacks aren’t as elegant as “maps + atomic program swap,” but they
            keep the policy model portable and make it possible to iterate without requiring
            perfect conditions everywhere.
          </p>

          <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">
            closing thoughts
          </h2>

          <p>
            eBPF didn’t just solve my performance issues; it changed how i think about{" "}
            <em>updates</em>.
          </p>

          <p>
            the real win wasn’t “kernel code is fast.” it was “the enforcement state has a
            clean transition,” and the system has fewer ways to land in a weird half-applied
            middle.
          </p>

          <p>
            if you’re building something in the zero-trust / microsegmentation space, that’s
            the bar i’d aim for:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>make policy changes safe</li>
            <li>make enforcement observable</li>
            <li>make the runtime surface area boring</li>
          </ul>

          <p>and then, once it’s boring, you can make it fast.</p>
        </div>
      </article>
    </section>
  );
}