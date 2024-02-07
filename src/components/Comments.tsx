import ImageComments from '../assets/ImageComments.png'
import Background from '../assets/Background.png'

export function Comments() {
  return (
    <div className="flex flex-col bg-[#faf3f2] max-w-screen-xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-center border-b-[1px] border-[#1d0605] border-opacity-20 my-20">
        <div className="relative w-[378px] h-[300px] sm:mb-20">
          <img
            className="absolute inset-0 top-[96px]"
            src={Background}
            alt=""
          />
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
      <div className="flex flex-col px-10">
        <div className="flex flex-col">
          <h2 className="font-lilita-one text-[32px]">NOSSA REALEZA</h2>
          <p className="font-lato mb-4">
            A satisfação de nossos clientes em primeiro lugar!
          </p>
        </div>
        <div className="flex flex-row gap-4 mb-10">
          <div className="flex flex-col gap-4 bg-white w-[370px] rounded-lg shadow-md px-6 py-2">
            <p className="font-lato">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut quas
              soluta voluptatibus doloremque, cumque exercitationem quis vel
              deleniti facilis quisquam.
            </p>
            <div className="flex items-center gap-4">
              <img
                className="h-[100px] rounded-full"
                src={ImageComments}
                alt=""
              />
              <div className="flex flex-col">
                <h2 className="font-lilita-one text-[18px]">Carla Gomes</h2>
                <span className="font-lato text-[12px]">
                  23 Anos &bull; Designer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
