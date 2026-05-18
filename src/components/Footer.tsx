import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.2fr_.8fr_.8fr]">
        <div><p className="text-xl font-semibold tracking-[0.24em] text-bone">ANNIA</p><p className="mt-4 max-w-md leading-7 text-steel">A Nordic strategic collaboration infrastructure for applied innovation, sustainability and territorial transformation.</p></div>
        <div><p className="font-semibold text-bone">Platform</p><div className="mt-4 grid gap-2 text-steel"><Link to="/spring-challenges">Spring Challenges</Link><Link to="/ecosystem">Ecosystem Explorer</Link><Link to="/podcasts">Podcasts</Link></div></div>
        <div><p className="font-semibold text-bone">Activation</p><div className="mt-4 grid gap-2 text-steel"><Link to="/contact">Apply as Partner</Link><Link to="/contact">Submit a Challenge</Link><Link to="/contact">Join Talent Network</Link></div></div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-steel">© 2026 ANNIA. Strategic ecosystem platform in development.</p>
    </footer>
  )
}
