import { Comments } from './Comments'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export function Carousel() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col pl-10">
        <h2 className="font-lilita-one text-[32px]">NOSSA REALEZA</h2>
        <p className="font-lato mb-4">
          A satisfação de nossos clientes em primeiro lugar!
        </p>
      </div>
      <Comments />
    </div>
  )
}
