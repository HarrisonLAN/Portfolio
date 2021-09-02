import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/ContactForm'
import anime from 'animejs'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    anime({
      targets: '.circle',

    })
  });



  return (
    <div className="leading-7 text-default bg-primary text-sm h-screen">
      <Navbar />
      <div className="flex h-screen"><div className="z-0 loader m-auto bg-navItem w-12 h-12 rounded-full">
        <div className="pt-2 z-10 loader1 m-auto bg-black w-8 h-8 rounded-full"></div>
      </div></div>

      <Footer />

    </div >


  )
}
