import type { EcosystemNodeData } from '../data/ecosystem'

export function EcosystemNode({ node }: { node: EcosystemNodeData }) {
  const Icon = node.icon
  return (
    <div className="absolute max-w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-white/10 bg-midnight/70 p-4 backdrop-blur-xl" style={{ left: node.x, top: node.y }}>
      <div className="mb-3 flex items-center gap-2 text-cyanMist"><Icon className="h-4 w-4" /><span className="font-semibold text-bone">{node.label}</span></div>
      <p className="text-xs leading-5 text-steel">{node.description}</p>
    </div>
  )
}
