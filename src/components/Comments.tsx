import Slider from 'react-slick'
import { useEffect, useState } from 'react'

interface CommentsProps {
  name: string
  image: string
  age: number
  testimonial: string
}

export function Comments() {
  const [data, setData] = useState<CommentsProps[]>([])

  async function fetchData() {
    try {
      const response = await fetch(
        'https://api.brchallenges.com/api/empire-burger/testimonials',
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

  return (
    <Slider
      infinite
      autoplay
      speed={500}
      slidesToShow={3} // Define quantos slides serão exibidos de uma vez
      slidesToScroll={1} // Define quantos slides serão movidos ao avançar/retroceder
      responsive={[
        {
          breakpoint: 1280, // Define o ponto de quebra para dispositivos de tela média
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 768, // Define o ponto de quebra para dispositivos de tela pequena
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ]}
    >
      {data.map((item) => {
        return (
          <div key={item.name} className="flex gap-4 mb-10 h-[300px]">
            <div className="flex flex-col justify-around gap-4 h-full bg-white w-[370px] rounded-lg shadow-md px-6 py-2">
              <p className="font-lato">{item.testimonial}</p>
              <div className="flex items-center gap-4">
                <img
                  className="h-[100px]  rounded-full"
                  src={item.image}
                  alt=""
                />
                <div className="flex flex-col">
                  <h2 className="font-lilita-one text-[18px]">{item.name}</h2>
                  <span className="font-lato text-[12px]">{item.age} anos</span>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </Slider>
  )
}
