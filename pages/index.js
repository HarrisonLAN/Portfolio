import Image from 'next/image'
import Navbar from '../components/nav'
import Footer from '../components/footer'
import ContactForm from '../components/ContactForm'
import anime from 'animejs'
import { useEffect } from 'react'
import Loader from '../components/loader'
import Link from 'next/link'
import owl from '../public/background.png'


export default function Home() {
  

  useEffect(() => {
    setTimeout(function () {
      anime({
        targets: '.mainContent1',
        translateX: 15,
        duration: 2000,
        easing: 'easeInOutExpo',
        direction: 'alternate',
        opacity: 0.4
      });
    }, 2200);
    setTimeout(function () {
      anime({
        targets: '.mainContent2',
        translateX: 15,
        duration: 2000,
        easing: 'easeInOutExpo',
        direction: 'alternate',
        opacity: 0.4
      });
    }, 2300);
    setTimeout(function () {
      anime({
        targets: '.mainContent3',
        translateX: 15,
        duration: 2000,
        easing: 'easeInOutExpo',
        direction: 'alternate',
        opacity: 0.4
      });
    }, 2400);


  });

  return (
    <div className="leading-7 text-default bg-primary text-sm h-screen">
      <Navbar />
      <Loader />
      <div className="h-auto homeIntro flex pt-36 mb-20 md:pt-0 md:mb-0 navItem md:hidden">
        <div className="homeIntroInner px-5 w-full h-auto">
          <div className="font-black text-4xl text-white h-full max-w-full">

            <div className="mainContent1">Robert Harrison</div>
            <div className="mainContent2">Aspiring Developer</div>
            <div className="mainContent3">Based In UK</div>
          </div>
        </div>
      </div>
      <div className="socialLinks mb-2.5 border-b pb-2 border-socialBorder md:hidden">
        <ul className="socialList flex">
          <li className="socialListItem flex-1">
            <Link href="/">
              <img src="https://img.icons8.com/ios-filled/24/949494/instagram--v1.png" className=" m-auto" />
            </Link>
          </li>
          <li className="socialListItem flex-1">
            <Link href="/">
              <img src="https://img.icons8.com/material-outlined/24/949494/github.png" className=" m-auto" />
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
              <img src="https://img.icons8.com/ios-filled/24/949494/linkedin.png" className=" m-auto" />
            </Link>
          </li>
          <li className="socialListItem flex-1">
            <Link href="/">
              <img src="https://img.icons8.com/ios-glyphs/24/949494/discord-logo.png" className=" m-auto" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="mainContent px-5 w-full h-auto md:hidden">
        <p>
          Hello! I’m Robert Harrison a self-taught Developer. I’m based in Liverpool, UK, and enjoy climbing,gaming and programming.

          Find out more about me and my current projects.
        </p>
      </div>

      <div className="h-auto homeIntro flex pt-8">
        <div className="homeIntroInner px-5 w-full h-auto">
          <div className="font-black text-2xl text-white md:text-2xl">
            <div className='md:hidden'>Get an overview</div>
            <div className='md:hidden'>of my lateset projects</div>
            <div className='text-center'>Get an overview of my lateset projects</div>
          </div>
        </div>
      </div>
      <Footer />

    </div >


  )
}
