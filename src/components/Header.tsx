import { InstagramLogo } from '@phosphor-icons/react'
import { WhatsappLogo } from '@phosphor-icons/react/dist/ssr'
import Coroa from '../assets/Coroa.png'
import Ifood from '../assets/ifood-icon.png'

export function Header() {
  return (
    <div
      className="bg-[rgba(59,32,11,0.05)] font-lato h-[64px] w-full"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto h-[64px]">
        <div className="flex items-center gap-1">
          <img className="w-7" src={Coroa} alt="" />
          <span className="text-[30px]">
            <strong className="font-black">EMPIRE </strong>
            BURGUER
          </span>
        </div>

        <ul className="flex items-center gap-4">
          <li className="font-bold">
            <a href="">Home</a>
          </li>

          <li>
            <a href="">Promoção</a>
          </li>

          <li>
            <a href="">Cardápio</a>
          </li>

          <li>
            <a href="">Comentário</a>
          </li>

          <li>
            <a href="">Contato</a>
          </li>
        </ul>

        <div className="flex items-center gap-2">
          <img className="w-7 h-4" src={Ifood} alt="" />
          <button>
            <InstagramLogo className="w-7 h-7 text-zinc-50" />
          </button>
          <span className="w-px h-12 mx-2 bg-zinc-950" />
          <button className="w-32 h-[34px] bg-[#f59a1b] font-bold flex items-center justify-center gap-2 rounded-sm">
            <WhatsappLogo className="w-6 h-6" />
            Contato
          </button>
        </div>
      </nav>
    </div>
  )
}
