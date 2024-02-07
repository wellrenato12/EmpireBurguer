import CoroaRed from '../assets/Coroa-Red.png'

export function Footer() {
  return (
    <div className="flex flex-col bg-[#faf3f2] max-w-screen-xl mx-auto">
      <div className="flex gap-8 flex-col items-center sm:flex-row justify-around border-b-[1px] border-[#1d0605] border-opacity-20 py-4">
        <div className="flex items-center gap-1">
          <img className="w-7 text-[#f43127]" src={CoroaRed} alt="" />
          <span className="text-[30px] text-[#F59A1B]">
            <strong className="">EMPIRE </strong>
            BURGUER
          </span>
        </div>
        <div className="flex items-center font-lato">
          <ul className="flex flex-col sm:flex-row gap-4">
            <li>
              <a href="">
                <strong>Home</strong>
              </a>
            </li>
            <li>
              <a href="">
                <strong>Localização</strong>
              </a>
            </li>
            <li>
              <a href="">
                <strong>Cardapio</strong>
              </a>
            </li>
            <li>
              <a href="">
                <strong>Sobre</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center py-4">
        2024 &copy; EmpireBurguer.&nbsp;
        <span className="text-gray-400">Todos os direitos reservados.</span>
      </div>
    </div>
  )
}
