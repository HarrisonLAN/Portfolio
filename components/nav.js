import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import Navbar from './NavBar';
import Link from 'next/link'
export default function Header() {
  const path = useRouter();

  return (
    <div>
      <Link href="/"><a className="block w-14 h-14 bg-navItem text-navText text-lg text-center font-bold absolute top-0 left-0 leading-extra-loose">RH</a></Link>
      <nav className="mobileNav fixed bottom-0 left-0 w-screen">
        <ul className="mobileNav_list flex">
          <li className="mobileNav__item flex-1 text-center">
            <Link href="/">
              <a className="w-full">
                <img src="https://img.icons8.com/material-outlined/20/000000/home--v2.png" className="m-auto" />
                <span>Home</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center">
            <Link href="/work">
              <a className="w-full">
                <img src="https://img.icons8.com/ios-glyphs/20/000000/monitor.png" className="m-auto" />
                <span>Work</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center">
            <Link href="/blog">
              <a>
                <img src="https://img.icons8.com/ios-filled/20/000000/book.png" className="m-auto" />
                <span>Blog</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center">
            <Link href="/about">
              <a>
                <img src="https://img.icons8.com/material-outlined/20/000000/person-male.png" className="m-auto" />
                <span>About</span>
              </a>
            </Link>
          </li>
          <li className="mobileNav__item flex-1 text-center">
            <Link href="/search">
              <a>
                <img src="https://img.icons8.com/material-outlined/20/000000/search--v1.png" className="m-auto" />
                <span>Search</span>
              </a>
            </Link>
          </li>


        </ul>

      </nav>
    </div >
  )
}