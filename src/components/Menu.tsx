import { useEffect, useState } from 'react'
import MenuImage from '../assets/MenuImage.png'
import MenuImageMobile from '../assets/MenuImageMobile.png'

interface MenuProps {
  plate: string
  price: number
  ingredients: string
}

export function Menu() {
  const [backgroundImage, setBackgroundImage] = useState(MenuImage)
  const [data, setData] = useState<MenuProps[]>([])

  async function fetchData() {
    try {
      const response = await fetch(
        'https://api.brchallenges.com/api/empire-burger/menu',
      )
      const data = await response.json()
      setData(data)
    } catch (error) {
      console.log('Erro:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 640) {
        setBackgroundImage(MenuImage)
      } else {
        setBackgroundImage(MenuImageMobile)
      }
    }

    window.addEventListener('resize', handleSize)

    handleSize()

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return (
    <div className="flex flex-col 2xl:flex-row items-center mt-20 h-[1250px] sm:h-[1150px] 2xl:h-[575px] w-full">
      <div
        className="bg-no-repeat bg-cover bg-right h-full w-full 2xl:w-[50%] relative"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="flex flex-col gap-4 absolute w-[350px] sm:w-[420px] top-[50%] right-[50%] translate-y-[-50%] translate-x-[50%] sm:right-[250px] md:right-[250px] lg:right-[250px] xl:right-[300px] 2xl:right-[250px] custom-3xl:right-[300px]">
          <h2 className="font-lilita-one text-4xl">
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
        {data.map((item) => {
          return (
            <div key={item.plate}>
              <h3 className="font-lilita-one text-xl text-[#fae4d0]">
                {item.plate}
                .........................................................................
                R${item.price.toFixed(2)}.
              </h3>
              <p className="font-lato text-[#ffffff] max-w-[470px]">
                {item.ingredients}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
