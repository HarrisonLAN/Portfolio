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
      direction: 'reverse',
      opacity: 0.6
    });
  });

  return (
    <div>
      <Link href="/"><a className="rhNav block w-14 h-14 bg-navItem text-navText text-lg text-center font-bold absolute top-0 left-0 leading-extra-loose">RH</a></Link>
      <nav className="mobileNav fixed bottom-0 left-0 w-screen">
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