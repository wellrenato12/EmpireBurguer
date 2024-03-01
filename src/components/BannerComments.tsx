import Background from '../assets/Background.png'
import ImageComments from '../assets/ImageComments.png'

export function BannerComments() {
  return (
    <div className="flex flex-col sm:flex-row gap-8 justify-center items-center border-b-[1px] border-[#1d0605] border-opacity-20 my-20">
      <div className="relative w-[378px] h-[300px] sm:mb-20">
        <img className="absolute inset-0 top-[96px]" src={Background} alt="" />
        <img
          className="absolute left-[40px] inset-0 h-[300px] w-[284px] object-cover"
          src={ImageComments}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-4 w-[350px]">
        <h2 className="font-lilita-one text-4xl">
          ATENDIMENTO{' '}
          <span className="bg-[#f59a1b] rounded px-1">PERSONALIZADO</span>
        </h2>
        <p className="font-lato">
          Todos os nossos clientes são tratados como rei e rainha, com a nossa
          colinaria artesanal.
        </p>
        <button className="bg-[#f43127] w-[210px] p-2 rounded text-white font-bold mb-20 sm:mb-0">
          Cardápio Imperial
        </button>
      </div>
    </div>
  )
}
