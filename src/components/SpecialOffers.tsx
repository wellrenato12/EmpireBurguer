import BurguerImperial from '../assets/Burguer-Imperial.png'
import Batata from '../assets/Batata.png'
import Sorvete from '../assets/Sorvete.png'
import IconTimer from '../assets/Icon-Timer.png'

export function SpecialOffers() {
  return (
    <div className="flex flex-col mx-auto max-w-screen-xl px-8 mt-[250px] lg:mt-[120px]">
      <h1 className="text-4xl font-lilita-one">Ofertas Especiais</h1>
      <p className="font-lato text-[#1d0605]">
        Aproveite todas as nossas ofertas, fiquem de olhos abertos, porque
        sempre estamos mudando o nosso cardápio.
      </p>

      <div className="grid grid-cols-1 grid-rows-3 sm:grid-cols-3 sm:grid-rows-2 gap-4 xl:w-[1280px] mt-4">
        <img
          className="col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 h-full w-full object-cover"
          src={BurguerImperial}
          alt=""
        />
        <img
          className="col-span-1 row-span-1 h-full w-full object-cover"
          src={Batata}
          alt=""
        />
        <img
          className="col-span-1 row-span-1 h-full w-full object-cover"
          src={Sorvete}
          alt=""
        />
      </div>

      <div className="flex flex-col md:flex-row items-center gap-10 mt-20">
        <div className="flex items-center bg-[#f43127] rounded px-8 py-4 gap-4 md:gap-8">
          <img className="w-20 md:w-30" src={IconTimer} alt="" />
          <div className="border h-20 border-[#1d0605]" />
          <div>
            <h2 className="font-lilita-one text-lg sm:text-2xl">
              HORÁRIO DE FUNCIONAMENTO
            </h2>
            <p className="font-lato text-xs sm:text-base text-white">
              Segunda a sexta: 17h00 - 23h00
            </p>
            <p className="font-lato text-xs sm:text-base text-white">
              Sábado a Domingo: 18h30 - 23h00
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-lato text-[#1d0605]">
            Não esqueça de marcar a gente no Instagram
          </p>
          <h2 className="font-lilita-one text-3xl text-[#f43127]">
            #EMPIREBURGUER
          </h2>
        </div>
      </div>
    </div>
  )
}
