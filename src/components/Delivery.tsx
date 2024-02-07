import DeliveryImage from '../assets/DeliveryImage.png'
import IconWhats from '../assets/IconWhats.png'
import IconDelivery from '../assets/IconDelivery.png'
import IconSweet from '../assets/IconSweet.png'
import IconIfood from '../assets/IconIfood.png'
import IconSmartphone from '../assets/IconSmartphone.png'
import BackgroundImage from '../assets/Background.png'

export function Delivery() {
  return (
    <div className="flex flex-col max-w-screen-xl mx-auto mt-10">
      <div className="flex flex-col sm:flex-row justify-around">
        <div className="relative flex justify-center">
          <img
            className="absolute sm:relative right-[50%] translate-x-[50%] sm:translate-x-[60%] top-36 w-[380px] h-[205px]"
            src={BackgroundImage}
            alt=""
          />
          <img
            className="absolute w-[296px] h-[427px]"
            src={DeliveryImage}
            alt=""
          />
        </div>
        <div className="mt-[480px] sm:mt-10 flex flex-col gap-2 items-center">
          <h2 className="font-lilita-one text-2xl">NOSSAS ENTREGAS</h2>
          <div>
            <div className="flex items-center gap-4 p-2 bg-white w-[380px] sm:w-[570px] shadow rounded-lg">
              <img className="border-r-2 px-4" src={IconWhats} alt="" />
              <div>
                <h2 className="font-lilita-one text-[18px]">WHATSAPP</h2>
                <p className="font-lato">
                  Vamos direto ao ponto, sem perder tempo!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-2 bg-white w-[380px] sm:w-[570px] shadow rounded-lg">
              <img className="border-r-2 px-4" src={IconDelivery} alt="" />
              <div>
                <h2 className="font-lilita-one text-[18px]">ENTREGA</h2>
                <p className="font-lato">
                  Entregamos em menos de 45 minutos na porta da sua casa!
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-2 bg-white w-[380px] sm:w-[570px] shadow rounded-lg">
              <img className="border-r-2 px-4" src={IconSweet} alt="" />
              <div>
                <h2 className="font-lilita-one text-[18px]">SOBREMESA</h2>
                <p className="font-lato">
                  Pedidos acima de 100 reais, ganham brindes.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 p-2 bg-white w-[380px] sm:w-[570px] shadow rounded-lg">
              <img className="border-r-2 px-4" src={IconIfood} alt="" />
              <div>
                <h2 className="font-lilita-one text-[18px]">IFOOD</h2>
                <p className="font-lato">Nossa loja é Top 1 da região!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mx-auto my-20 bg-[#f43127] rounded-lg w-[350px] sm:w-[auto]">
        <img className="my-4 mx-0 sm:mx-4" src={IconSmartphone} alt="" />
        <div className="flex flex-col sm:flex-row items-center text-center border-t-[1px] sm:border-t-0 border-l-0 sm:border-l-[1px] py-4 border-[#1d0605] w-[80%]">
          <div className="sm:text-start sm:pl-8">
            <h2 className="font-lilita-one text-[18px]">
              FAÇA O SEU PEDIDO AGORA MESMO!
            </h2>
            <p className="font-lato text-white text-[14px]">
              Venha saborear a melhor experiência de hamburguenses artesanal do{' '}
              <span>Empires Burger</span>, com temática medieval!
            </p>
          </div>
          <button className="bg-[#fae4d0] w-[318px] sm:w-[200px] py-2 px-4 sm:ml-8 rounded text-[#f43127] font-black my-4">
            SOLICITAR PEDIDO
          </button>
        </div>
      </div>
    </div>
  )
}
