import { BannerHero } from './components/BannerHero'

import BannerHeroImage from './assets/Banner-Desktop.png'
import BannerHeroImageMobile from './assets/Banner-Mobile.png'

import './styles/global.css'
import { Services } from './components/Services'
import { SpecialOffers } from './components/SpecialOffers'
import { Menu } from './components/Menu'
import { Header } from './components/Header'
import { useEffect, useState } from 'react'
import { HeaderMobile } from './components/HeaderMobile'

export function App() {
  const [backgroundImage, setBackgroundImage] = useState(BannerHeroImage)
  const [pageSize, setPageSize] = useState({
    width: window.innerWidth,
  })
  const componentRender = pageSize.width > 768 ? <Header /> : <HeaderMobile />

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth >= 430) {
        setBackgroundImage(BannerHeroImage)
      } else {
        setBackgroundImage(BannerHeroImageMobile)
      }
      setPageSize({
        width: window.innerWidth,
      })
    }

    window.addEventListener('resize', handleSize)

    handleSize()

    return () => {
      window.removeEventListener('resize', handleSize)
    }
  }, [])

  return (
    <div className="bg-[#faf3f2]">
      <div
        className="bg-center bg-no-repeat bg-auto custom-bg-image:bg-cover w-screen h-[855px] custom-bg-image:h-[545px] relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        {componentRender}
        <BannerHero />
        <Services />
      </div>
      <SpecialOffers />
      <Menu />
    </div>
  )
}
