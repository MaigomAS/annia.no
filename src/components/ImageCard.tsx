export function ImageCard({ image, title, eyebrow }: { image: string; title: string; eyebrow: string }) {
  return (
    <figure className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
      <img src={image} alt="" className="h-72 w-full object-cover opacity-85" />
      <figcaption className="border-t border-white/10 p-5">
        <p className="text-xs uppercase tracking-[0.24em] text-cyanMist">{eyebrow}</p>
        <p className="mt-2 font-semibold text-bone">{title}</p>
      </figcaption>
    </figure>
  )
}
