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
          <time className="text-base text-muted-foreground">2026-03-28</time>
        </header>

        <div className="flex flex-col gap-6 mt-6">
          <p>
            i started working with linux firewalls recently. it was a modest server
          setup for a personal project, and i needed to restrict access between a database 
          and a web application. "it's very easy to use iptables," a tutorial online said, 
          "just follow these steps." and these steps were as follows:
        </p>

        <ol className="list-decimal pl-6 space-y-2">
          <li>create a custom chain, then</li>
          <li>append rules for incoming traffic, and</li>
          <li>lock down the default policy to drop!</li>
        </ol>

        <p>
          and it worked first try! from that point i was hooked, and i rushed to write 
          bash scripts that would deploy my iptables configurations across all my servers. 
          i spent a couple of months managing network policies this way, and it all worked 
          out great.
        </p>

        <p>
          but soon i started to realize the limitations. this came as i began to work with 
          containerized workloads and dynamic environments, ones that static iptables rules 
          simply are not meant for. first, there was the sheer volume of rules. managing 
          thousands of pod IPs meant traversing massive iptables chains linearly, which 
          killed network performance.
        </p>

        <p>
          then there was the ultimate dealbreaker: state inconsistency. i vividly remember 
          a friday night where an automated policy sync triggered an <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">iptables-restore</code>. 
          mid-apply, a rogue pod vanished, causing the sync to partially fail. my firewall 
          was left in a fractured state, and suddenly legitimate database connections were 
          being dropped. what i needed was a network filter that had both high performance, 
          but also supported complex, dynamic policies natively and safely.
        </p>

        <p>
          and that's how i stumbled across ebpf. it seemed to be exactly what i was looking 
          for it was fast, extensible, and ran directly inside the linux kernel. 
          over the months i iterated on my ebpf knowledge, until it became what powers 
          ZTAP today.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">compiling without compilers</h2>

        <p>
          frankly, i was scared of ebpf at first. it seemed like this prehistoric, 
          highly-complex technology that required compiling c code on every target machine. 
          the demos i saw online were undeniably impressive, but the thought of installing <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">clang</code>, <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">llvm</code>, 
          and kernel headers on pristine production nodes just to run a firewall was a 
          non-starter. zero-trust architectures demand minimal attack surfaces, not bloated 
          compiler toolchains.
        </p>

        <p>
          but then i found out about <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">bpf2go</code>. it completely changed my approach. the 
          realization was that we could compile the ebpf c code into bytecode at build-time, 
          and embed it directly into the go binary.
        </p>

        <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
          <code>
//go:generate go run github.com/cilium/ebpf/cmd/bpf2go -no-strip -target bpfel,bpfeb -cc clang bpf ../../bpf/filter.c -- -I../../bpf
          </code>
        </pre>

        <p>
          with just that one magic comment, the entire compiler toolchain requirement 
          vanished from runtime. ZTAP could be deployed as a single, static binary. if 
          you were running kernel 5.7+ with cgroup v2, it just worked.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">the epiphany of atomic updates</h2>

        <p>
          what really solidified ebpf for me wasn't just the deployment model it was 
          how gracefully it handled state. in ZTAP, network policies dictate exactly what 
          protocols, IP blocks, and ports are allowed to communicate. zero-trust means 
          default deny, always.
        </p>

        <p>
          with iptables, changing a policy meant tearing down rules and rebuilding them. 
          but with ebpf, we can utilize <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">bpf_link</code> to perform atomic updates without 
          dropping a single packet.
        </p>

        <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
          <code>
{`// gracefully replacing the ebpf program on the fly
func (e *EBPFEnforcer) updatePolicyAtomic(old *EBPFEnforcer) error {
    // 1. load the new program into e.objs
    // 2. atomically update the cgroup attachment point
    err := old.egressLink.Update(e.objs.FilterEgress)
    if err != nil {
        return fmt.Errorf("failed atomic update: %w", err)
    }

    // steal ownership so the old enforcer doesn't close it
    e.egressLink = old.egressLink
    old.egressLink = nil`}
          </code>
        </pre>

        <p>
          the concept is beautiful. instead of text-parsing iptables chains, we define 
          strict data structures in c.
        </p>

        <pre className="font-mono bg-[#0a0a0a] text-[#ededed] p-5 rounded-xl overflow-x-auto text-[0.85em] leading-relaxed dark:bg-[#111111] border border-transparent dark:border-[#333] shadow-sm tracking-tight">
          <code>
{`struct policy_key {
    __u64 cgroup_id;  // source cgroup id
    __u32 ip;         // target IP
    __u16 port;
    __u8  protocol;   // TCP/UDP/ICMP
    __u8  direction;  // 0=egress, 1=ingress
};`}
          </code>
        </pre>

        <p>
          this structure sits in an ebpf map. when an update comes from the policy engine, 
          ZTAP just updates the map values or atomically swaps the program attachment 
          point. the networking stack never skips a beat. no dropped packets. no fractured state.
        </p>

        <h2 className="text-xl font-semibold text-foreground mt-4 mb-2">making it work everywhere</h2>

        <p>
          of course, not every environment is a pristine 5.7+ linux kernel. i wanted ZTAP 
          to be a tool i could use on my local machine just as easily as in production.
        </p>

        <p>
          so while ebpf is the crowning jewel of the linux enforcer (<code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">ebpf_linux.go</code>), i 
          still keep traditional fallbacks. if ZTAP detects an older kernel, it falls 
          back to a custom <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">ZTAP-EGRESS</code> iptables chain. if i build for macOS, it hooks 
          into <code className="font-mono text-[0.85em] bg-black/[0.04] dark:bg-white/[0.06] border border-black/[0.08] dark:border-white/[0.12] px-[0.3rem] py-[0.1rem] rounded-md text-foreground">pf</code>. but the core principle remains the same.
        </p>

        <p>
          ebpf didn't just solve my performance issues; it completely changed how i think 
          about kernel-space programming. maybe one day i'll explore writing an entire 
          network stack in ebpf. but for now, it sets a nice foundation for true zero-trust 
          microsegmentation.
        </p>
        </div>
      </article>
    </section>
  );
}