import { CastItem } from "./CastItem"

export const CastList = ({ cast, title }) => {
  return (
    <section className="mb-24">
      <h2 className="text-xl font-bold mb-8 text-gray-100">{title}</h2>
      <section className="grid grid-cols-6 gap-y-24">
        {cast.map(castEl => <CastItem {...castEl} key={castEl.id} />)}
      </section>
    </section>
  )
}