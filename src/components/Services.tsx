import IconHamburguer from '../assets/Icon-Hamburguer.png'
import IconDelivery from '../assets/Icon-Delivery.png'
import IconPhone from '../assets/Icon-Phone.png'

export function Services() {
  return (
    <div className="absolute border shadow-lg right-1/2 translate-x-2/4 bottom-[-210px] lg:bottom-[-67px] flex flex-col lg:flex-row items-center justify-between bg-white rounded-xl p-4 w-[350px] lg:w-[970px]">
      <div className="flex items-center justify-center w-full lg:w-auto gap-4 border-r-0 border-b-2 lg:border-b-0 lg:border-r-2 border-[#faf3f2]">
        <img className="pb-4 lg:pb-0" src={IconHamburguer} alt="" />
        <div className="w-[200px]">
          <h2 className="text-xl font-bold font-lilita-one">ARTESANAL</h2>
          <p className="font-lato text-[#1d0605] pb-4 lg:pb-0 opacity-50">
            Nossas receitas são feitas com todo cuidado
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center w-full lg:w-auto gap-4 border-r-0 border-b-2 lg:border-b-0 lg:border-r-2 border-[#faf3f2] lg:pl-6">
        <img className="py-4 lg:py-0" src={IconPhone} alt="" />
        <div className="w-[200px]">
          <h2 className="text-xl font-bold font-lilita-one">ATENDIMENTO</h2>
          <p className="font-lato text-[#1d0605] opacity-50">
            Totalmente personalizado
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 lg:pl-6">
        <img className="pt-4 lg:py-0" src={IconDelivery} alt="" />
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
