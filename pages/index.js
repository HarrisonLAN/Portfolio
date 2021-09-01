import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/ContactForm'
import anime from 'animejs'
import { useEffect } from 'react'


export default function Home() {
  useEffect(() => {
    anime({
      targets: '.square',
      translateX: 250,
    })
  });



  return (
    <div className="leading-7 text-default bg-primary text-sm">
      <Navbar />
      <div className="square bg-black w-8 h-8">
      </div>
      <Footer />

    </div>


  )
}
