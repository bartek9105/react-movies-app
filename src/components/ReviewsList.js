import { ReviewItem } from "./ReviewItem"

export const ReviewsList = ({ id, results }) => {
  return (
    <section className="max-w-screen-md">
      <h2 className="text-xl font-bold mb-8 text-gray-100">Reviews</h2>
      {results.map(review => <ReviewItem {...review} key={id} />)}
    </section>
  )
}