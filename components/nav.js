import { useRouter } from 'next/router'
import React, { useEffect } from "react";
import Image from 'next/image'
export default function Header() {

    const router = useRouter()
    //BAD CODE FOR DYNAMIC BORDER
    useEffect(() => {
        const btn = document.querySelector('.mobile-menu-button')
        const sidebar = document.querySelector('.mobile-sidebar')
        btn.addEventListener('click', () => {
            sidebar.classList.toggle('-translate-x-full');
        });
    }, [])
    var home;
    var about;
    var contact;
    var other;
    var path = router.pathname;
    if (path === '/') {
        home = 'border-b-2'
    }
    if (path === '/about') {
        about = 'border-b-2'
    }
    if (path === '/other') {
        other = 'border-b-2'
    }
    if (path === '/contact') {
        contact = 'border-b-2'
    }
    return (
        <div className="relative min-h-auto md:flex">

            <div className="text-black space-y-2 px-2 md:hidden flex justify-end">
                <button className="mobile-menu-button p4">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button >
            </div >

            <div className=" bg-white border-r border-black mobile-sidebar text-black w-20 space-y-1 py-1 px-1 absolute inset-y-0 left-0 transform -translate-x-full md:hidden transition duration-200 ease-in-out">
                <nav>
                    <a href="/" className='border-b border- px-1 py-1'>Home</a>
                    <a href="/about" className='border-b  block px-1 py-1'>About</a>
                    <a href="/contact" className='border-b  block px-1 py-1'>Contact</a>
                    <a href="/other" className='border-b  block px-1 py-1'>Other</a>
                </nav>
            </div>


            <nav className="mainNav flex justify-center w-screen h-auto text-5xl hidden md:block">
                <div className="py-2.5 w-11/12 flex justify-center">
                    <div className=" h-auto font-sans flex justify-justify-start">
                        <a href="/" className={'border-black px-4 ' + home}>Home</a>
                    </div>
                    <div className="md:font-body h-auto font-sans flex justify-end w-10/12">
                        <a href="/about" className={'border-black px-4 ' + about}>About</a>
                        <a href="/contact" className={'border-black px-4 ' + contact}>Contact</a>
                        <a href="/other" className={'border-black px-4 ' + other}>Other</a>
                    </div>
                </div>
            </nav>
        </div >
    )
}