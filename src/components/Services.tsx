import IconHamburguer from '../assets/Icon-Hamburguer.png'
import IconDelivery from '../assets/Icon-Delivery.png'
import IconPhone from '../assets/Icon-Phone.png'

export function Services() {
  return (
    <div className="absolute border shadow-sm right-1/2 translate-x-2/4 bottom-[-210px] md:bottom-[-67px] flex flex-col md:flex-row items-center justify-between bg-white rounded-xl p-4 w-[350px] sm:w-auto lg:w-[970px]">
      <div className="flex items-center justify-center w-full md:w-auto gap-4 border-r-0 border-b-2 md:border-b-0 md:border-r-2 border-[#faf3f2]">
        <img className="pb-4 md:pb-0" src={IconHamburguer} alt="" />
        <div className="w-[200px]">
          <h2 className="text-xl font-bold font-lilita-one">ARTESANAL</h2>
          <p className="font-lato text-[#1d0605] pb-4 md:pb-0 opacity-50">
            Nossas receitas são feitas com todo cuidado
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full md:w-auto gap-4 border-r-0 border-b-2 md:border-b-0 md:border-r-2 border-[#faf3f2] md:pl-6">
        <img className="py-4 md:py-0" src={IconPhone} alt="" />
        <div className="w-[200px]">
          <h2 className="text-xl font-bold font-lilita-one">ATENDIMENTO</h2>
          <p className="font-lato text-[#1d0605] opacity-50">
            Totalmente personalizado
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 md:pl-6">
        <img className="pt-4 md:py-0" src={IconDelivery} alt="" />
        <div className="w-[200px] pt-4">
          <h2 className="text-xl font-bold font-lilita-one">DELIVERY SPEED</h2>
          <p className="font-lato text-[#1d0605] opacity-50">
            Entregamos em menos de 45 minutos
          </p>
        </div>
      </div>
    </div>
  )
}
