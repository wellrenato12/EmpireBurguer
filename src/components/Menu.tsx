import MenuImage from '../assets/Cardapio.png'

export function Menu() {
  return (
    <div className="flex flex-col 2xl:flex-row items-center mt-20 h-[1150px] 2xl:h-[575px] w-full">
      <div
        className="bg-no-repeat bg-cover bg-right h-full w-full 2xl:w-[50%] relative"
        style={{ backgroundImage: `url(${MenuImage})` }}
      >
        <div className="flex flex-col gap-4 absolute w-[420px] top-[200px] right-[50%] translate-x-[50%] sm:right-[250px] md:right-[250px] lg:right-[250px] xl:right-[300px] 2xl:right-[250px] custom-3xl:right-[300px]">
          <h2 className="font-lilita-one sm:text-4xl">
            ESCOLHA O SEU COMBO IMPERIAL,{' '}
            <span className="bg-[#f59a1b] rounded px-1">PEÇA AGORA!</span>
          </h2>
          <p className="font-lato">
            Temos vários tipos de pratos para a nossa realeza, fique esperto
            porque temos sempre promoção!
          </p>
          <button className="bg-[#f43127] w-[210px] p-2 rounded text-white font-bold">
            Ver Cardápio Completo
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center 2xl:justify-start 2xl:items-start gap-4 bg-[#3b200b] h-full w-full 2xl:w-[50%] p-16">
        <h2 className="font-lilita-one text-3xl text-[#f59a1b]">
          CARDÁPIO IMPERIAL | BURGUER
        </h2>
        <div>
          <h3 className="font-lilita-one text-xl text-[#fae4d0]">
            CLASSIC BURGER
            .........................................................................
            R$49,99
          </h3>
          <p className="font-lato text-[#ffffff] max-w-[470px]">
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
        <div>
          <h3 className="font-lilita-one text-xl text-[#fae4d0]">
            SPECIAL BIG BURGUER
            .................................................................
            R$49,99
          </h3>
          <p className="font-lato text-[#ffffff] max-w-[470px]">
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
        <div>
          <h3 className="font-lilita-one text-xl text-[#fae4d0]">
            SPECIAL MAC BURGUER
            .................................................................
            R$49,99
          </h3>
          <p className="font-lato text-[#ffffff] max-w-[470px]">
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
        <div>
          <h3 className="font-lilita-one text-xl text-[#fae4d0]">
            MEXICAN BURGUER
            ......................................................................
            R$49,99
          </h3>
          <p className="font-lato text-[#ffffff] max-w-[470px]">
            Hamburguer bonino 160g, Molho, Bacon, Queijo prato, peito de peru,
            Tomate, Alface, Servidor do pão de batata
          </p>
        </div>
      </div>
    </div>
  )
}
