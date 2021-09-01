import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import Navbar from './NavBar';
import Link from 'next/link'
export default function Header() {
    const path = useRouter();

    useEffect(() => {
        const closebtn = document.querySelector('.close-menu-button')
        const btn = document.querySelector('.mobile-menu-button')
        const sidebar = document.querySelector('.mobile-sidebar')
        closebtn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }, [])
    return (
        <div className="relative min-h-auto xl:flex z-30">

            <div className="text-black space-y-2 px-2 xl:hidden flex justify-start">
                <button className="mobile-menu-button p4">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button >
            </div >

            <div className=" mobile-sidebar text-black w-full h-auto space-y-1 absolute inset-y-0 left-0 transform -translate-x-full xl:hidden transition duration-300 ease-in-out">
                <nav className = "bg-primary flex justify-center w-full border-b border-black">
                <div className="absolute top-0 left-2">
                <button className="close-menu-button p4">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button >
                </div >
                <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>contact</a>
        </Link>
      </li>
      <li>
        <Link href="/other">
          <a>Other</a>
        </Link>
      </li>
    </ul>             
                </nav>
            </div>
            <Navbar />
        </div >


    )
}