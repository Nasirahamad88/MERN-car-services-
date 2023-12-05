import Image from 'next/image'
import Carusol from './(pages)/Home/Carousel/page'
import About from './(pages)/Home/Carousel/about/page'
import Services from './(pages)/services/page'

export default function Home() {
  return (
    <div>
      <Carusol />
      <About />
      <Services/>
    </div>
  )
}
