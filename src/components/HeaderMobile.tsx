import { useState } from 'react'
import Coroa from '../assets/Coroa.png'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'

export function HeaderMobile() {
  const [open, setOpen] = useState(false)
  const Links = [
    { name: 'HOME', link: '/' },
    { name: 'PROMOÇÃO', link: '/' },
    { name: 'CARDÁPIO', link: '/' },
    { name: 'COMENTÁRIO', link: '/' },
    { name: 'CONTATO', link: '/' },
  ]
  return (
    <div
      className="w-full fixed z-50 top-0 left-0 bg-[rgba(59,32,11,0.05)]"
      style={{ backdropFilter: 'blur(10px)' }}
    >
      <div className="items-center justify-between py-4 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <img className="w-7" src={Coroa} alt="" />
          <span className="text-[30px]">
            <strong className="font-black">EMPIRE </strong>
            BURGUER
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`pt-12 pb-4 absolute bg-white z-[-1] left-0 w-full pl-9 transition-all duration-500 ease-in ${
            open ? 'top-0' : 'top-[-490px]'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-blue-400 duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
