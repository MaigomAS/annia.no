import { EcosystemNode } from '../components/EcosystemNode'
import { GlassPanel } from '../components/GlassPanel'
import { SectionHeader } from '../components/SectionHeader'
import { useI18n } from '../i18n/I18nProvider'
import { localizeEcosystemNode } from '../i18n/localize'
import { copy, localizedEcosystemNodes } from '../i18n/translations'

export function Ecosystem() {
  const { locale, t } = useI18n()
  const ecosystemNodes = localizedEcosystemNodes.map((node) => localizeEcosystemNode(node, locale))

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <SectionHeader eyebrow={t(copy.ecosystemPage.eyebrow)} title={t(copy.ecosystemPage.title)} description={t(copy.ecosystemPage.description)} />
      <GlassPanel className="relative mt-10 min-h-[38rem] overflow-hidden p-6">
        <img src="/assets/ecosystem/explorer.svg" alt="" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <svg className="absolute inset-0 h-full w-full opacity-60" aria-hidden="true"><circle cx="46%" cy="40%" r="180" fill="none" stroke="#6FE7F5" strokeOpacity=".2" /><line x1="46%" y1="40%" x2="12%" y2="24%" stroke="#6FE7F5" /><line x1="46%" y1="40%" x2="68%" y2="16%" stroke="#6FE7F5" /><line x1="46%" y1="40%" x2="78%" y2="62%" stroke="#6FE7F5" /><line x1="46%" y1="40%" x2="22%" y2="70%" stroke="#6FE7F5" /><line x1="46%" y1="40%" x2="46%" y2="82%" stroke="#6FE7F5" /></svg>
        {ecosystemNodes.map((node) => <EcosystemNode key={node.label} node={node} />)}
      </GlassPanel>
    </div>
  )
}
