import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import Navbar from './NavBar';
import Link from 'next/link'
import anime from 'animejs';
export default function Header() {
  const path = useRouter();
  useEffect(() => {
    anime({
      targets: '.rhNav',
      translateX: 250,
      duration: 2000,
      easing: 'easeInOutExpo',
      direction: 'reverse',
      opacity: 0.6
    });
  });
  useEffect(() => {
    anime({
      targets: '.mainContent4',
      translateX: 250,
      duration: 2000,
      easing: 'easeInOutExpo',
      direction: 'reverse',
      opacity: 0.6
    });
  });

  return (
    <div className='topNav'>
      <Link href="/"><a className="rhNav block w-14 h-14 bg-navItem text-navText text-lg text-center font-bold absolute top-0 left-0 leading-extra-loose">RH</a></Link>
      <div className="mainContent4 pl-14 hidden md:flex w-full h-14 items-center justify-center font-black text-4xl text-white">Robert Harrison Aspiring Developer Based In UK</div>
      <nav className="mobileNav fixed bottom-0 left-0 w-screen md:hidden">
        <ul className="mobileNav_list flex">
          <li className="mobileNav__item flex-1 text-center border-r-2 border-borderColour">
            <Link href="/">
              <a className="text-mobileNav">
                <img src="https://img.icons8.com/material-outlined/20/ffffff/home--v2.png" className=" m-auto" />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center border-r-2 border-borderColour">
            <Link href="/work">
              <a className="text-mobileNav">
                <img src="https://img.icons8.com/ios-glyphs/20/ffffff/monitor.png" className=" m-auto" />
                <span>Work</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center border-r-2 border-borderColour">
            <Link href="/blog">
              <a className="text-mobileNav">
                <img src="https://img.icons8.com/ios-filled/20/ffffff/book.png" className=" m-auto" />
                <span>Blog</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center border-r-2 border-borderColour">
            <Link href="/about">
              <a className="text-mobileNav">
                <img src="https://img.icons8.com/material-outlined/20/ffffff/person-male.png" className=" m-auto" />
                <span>About</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center border-r-2 border-borderColour">
            <Link href="/search">
              <a className="text-mobileNav">
                <img src="https://img.icons8.com/material-outlined/20/ffffff/search--v1.png" className=" m-auto" />
                <span>Search</span>
              </a>
            </Link>
          </li>


        </ul>

      </nav>
    </div >
  )
}