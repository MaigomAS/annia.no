import { Mail, Send } from 'lucide-react'
import { GlassPanel } from '../components/GlassPanel'
import { SectionHeader } from '../components/SectionHeader'
import { useI18n } from '../i18n/I18nProvider'
import { copy } from '../i18n/translations'

export function Contact() {
  const { t } = useI18n()

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
        <SectionHeader eyebrow={t(copy.contactPage.eyebrow)} title={t(copy.contactPage.title)} description={t(copy.contactPage.description)} />
        <GlassPanel className="p-6 md:p-8">
          <form className="grid gap-5">
            <label className="grid gap-2 text-sm text-bone">{t(copy.contactPage.name)}<input className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none focus:border-cyanMist" placeholder={t(copy.contactPage.namePlaceholder)} /></label>
            <label className="grid gap-2 text-sm text-bone">{t(copy.contactPage.email)}<input type="email" className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none focus:border-cyanMist" placeholder="name@organization.com" /></label>
            <label className="grid gap-2 text-sm text-bone">{t(copy.contactPage.intent)}<select className="rounded-2xl border border-white/10 bg-fjord px-4 py-3 text-bone outline-none focus:border-cyanMist">{copy.contactPage.options.map((option) => <option key={t(option)}>{t(option)}</option>)}</select></label>
            <label className="grid gap-2 text-sm text-bone">{t(copy.contactPage.message)}<textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none focus:border-cyanMist" placeholder={t(copy.contactPage.messagePlaceholder)} /></label>
            <button type="button" className="inline-flex items-center justify-center gap-2 rounded-full border border-cyanMist/60 bg-cyanMist px-5 py-3 font-semibold text-midnight transition hover:bg-arctic"><Send className="h-4 w-4" /> {t(copy.contactPage.send)}</button>
          </form>
        </GlassPanel>
      </div>
      <GlassPanel className="mt-10 p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><Mail className="text-cyanMist" /><span className="text-bone">{t(copy.contactPage.newsletter)}</span></div><div className="flex flex-1 gap-3 md:max-w-xl"><input className="min-w-0 flex-1 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-bone outline-none" placeholder={t(copy.contactPage.emailPlaceholder)} /><button className="rounded-full bg-white px-5 py-3 font-semibold text-midnight">{t(copy.contactPage.subscribe)}</button></div></div>
      </GlassPanel>
    </div>
  )
}
