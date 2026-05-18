import { Mail, Send } from 'lucide-react'
import { GlassPanel } from '../components/GlassPanel'
import { SectionHeader } from '../components/SectionHeader'

export function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeader eyebrow="Contact" title="Apply, submit or join the network." description="Use this static interface to express interest. Backend workflows for accounts, submissions, dashboards and matchmaking are prepared as future platform work." />
        <GlassPanel className="p-6 md:p-8">
          <form className="grid gap-5">
            <label className="grid gap-2 text-sm text-bone">Name<input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none focus:border-cyanMist" placeholder="Your name" /></label>
            <label className="grid gap-2 text-sm text-bone">Email<input type="email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none focus:border-cyanMist" placeholder="name@organization.com" /></label>
            <label className="grid gap-2 text-sm text-bone">I want to<select className="rounded-2xl border border-white/10 bg-fjord px-4 py-3 text-bone outline-none focus:border-cyanMist"><option>Apply as Partner</option><option>Submit a Challenge</option><option>Join Talent Network</option><option>Request an executive briefing</option></select></label>
            <label className="grid gap-2 text-sm text-bone">Message<textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none focus:border-cyanMist" placeholder="Tell us about the strategic context, challenge or collaboration interest." /></label>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyanMist/60 bg-cyanMist px-5 py-3 font-semibold text-midnight transition hover:bg-arctic"><Send className="h-4 w-4" /> Send interest</button>
          </form>
        </GlassPanel>
      </div>
      <GlassPanel className="mt-10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><Mail className="text-cyanMist" /><span className="text-bone">Newsletter and executive updates</span></div><div className="flex flex-1 gap-3 md:max-w-xl"><input className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none" placeholder="Email address" /><button className="rounded-full bg-white px-5 py-3 font-semibold text-midnight">Subscribe</button></div></div>
      </GlassPanel>
    </div>
  )
}
