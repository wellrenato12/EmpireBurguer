import LocationImage from '../assets/Location.png'
import LocationImageMobile from '../assets/LocationMobile.png'

export function Location() {
  return (
    <div>
      <div className="flex flex-col items-center mb-8 text-center">
        <h2 className="font-lilita-one text-4xl">ONDE FICA NOSSO CASTELO</h2>
        <p className="font-lato">
          Estaremos de portas abertas para a nossa realeza.
        </p>
      </div>
      <div className="">
        {window.innerWidth >= 428 ? (
          <img
            className="w-full h-[207px] object-cover"
            src={LocationImage}
            alt=""
          />
        ) : (
          <img
            className="h-[207px] object-cover"
            src={LocationImageMobile}
            alt=""
          />
        )}
      </div>
    </div>
  )
}
