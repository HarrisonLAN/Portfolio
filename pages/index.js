import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/ContactForm'
import anime from 'animejs'
import { useEffect } from 'react'
import Loader from '../components/loader'
import Link from 'next/link'


export default function Home() {
  useEffect(() => {
    anime({
      targets: '.dir-normal',
      translateX: 250,
      easing: 'easeInOutSine'

    })
  });



  return (
    <div className="leading-7 text-default bg-primary text-sm h-screen">
      <Navbar />
      <Loader />
      <div className="h-auto homeIntro flex pt-36 mb-20">
        <div className="homeIntroInner px-5 w-full h-auto">
          <div className="c-homeIntro__buzzwords c-buzzwords js_buzzwordsTrigger is-ready font-black text-4xl text-white">

            <div>Robert Harrison</div>
            <div>Web Developer</div>
            <div>Based In UK</div>
          </div>
        </div>
      </div>
      <div className="socialLinks mb-2.5 border-b pb-2 border-socialBorder">
        <ul className="socialList flex">
          <li className="socialListItem flex-1">
          <Link href="/"> 
          <img src="https://img.icons8.com/ios-filled/24/949494/instagram--v1.png"className=" m-auto"  />
          </Link>
          </li>
          <li className="socialListItem flex-1">
          <Link href="/"> 
          <img src="https://img.icons8.com/material-outlined/24/949494/github.png"className=" m-auto" />
          </Link>
          </li>
          <li className="socialListItem flex-1">
          <Link href="/"> 
          <img src="https://img.icons8.com/ios-glyphs/24/949494/twitter--v1.png" className=" m-auto" />
          </Link>
          </li>
          <li className="socialListItem flex-1">
          <Link href="/"> 
          <img src="https://img.icons8.com/ios-glyphs/24/949494/facebook.png" className=" m-auto" />
          </Link>
          </li>
          <li className="socialListItem flex-1">
          <Link href="/"> 
          <img src="https://img.icons8.com/ios-filled/24/949494/linkedin.png"className=" m-auto"  />
          </Link>
          </li>
          <li className="socialListItem flex-1">
          <Link href="/"> 
          <img src="https://img.icons8.com/ios-glyphs/24/949494/discord-logo.png"className=" m-auto"  />
          </Link>
          </li>
        </ul>
      </div>
      <div className="mainContent px-5 w-full h-auto">
        <p>
        Hello! I’m Robert Harrison a self-taught Developer. I started in my children’s room. Now I’m based in Liverpool, UK, and enjoying the life in the city.

Find out more about me.
        </p>
      </div>

      <div className="h-auto homeIntro flex pt-8">
        <div className="homeIntroInner px-5 w-full h-auto">
          <div className="c-homeIntro__buzzwords c-buzzwords js_buzzwordsTrigger is-ready font-black text-2xl text-white">
            <div>Get an overview</div>
            <div>of my lateset projects</div>
          </div>
        </div>
      </div>
      <Footer />

    </div >


  )
}
