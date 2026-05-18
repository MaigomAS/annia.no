import { CTAButton } from '../components/CTAButton'

export function NotFound() {
  return <div className="mx-auto max-w-7xl px-5 py-28 lg:px-8"><h1 className="text-5xl font-semibold text-bone">Page not found</h1><p className="mt-4 text-steel">Return to the ANNIA platform overview.</p><div className="mt-8"><CTAButton to="/">Go home</CTAButton></div></div>
}
