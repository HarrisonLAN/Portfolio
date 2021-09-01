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
      <div className="circle fixed left-1/2 bottom-1/2 bg-navItem w-8 h-8 rounded-full">
      </div>
      <Footer />

    </div>


  )
}
