import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/ContactForm'
import anime from 'animejs'
import { useEffect } from 'react'
import Loader from '../components/loader'


export default function Home() {
  useEffect(() => {
    anime({
      targets: '.circle',

    })
  });



  return (
    <div className="leading-7 text-default bg-primary text-sm h-screen">
      <Navbar />
      <Loader />
      <Footer />

    </div >


  )
}
