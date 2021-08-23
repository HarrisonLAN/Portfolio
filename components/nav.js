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
        <div className="relative min-h-screen md:flex">

            <div className="text-black space-y-2 px-2 md:hidden flex justify-end">
                <button className="mobile-menu-button p4">
                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button >
            </div >

            <div className="mobile-sidebar bg-black text-white w-32 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:hidden transition duration-200 ease-in-out">
                <nav>
                    <a href="/" className='block px-4 py-4'>Home</a>
                    <a href="/about" className='block px-4 py-4'>About</a>
                    <a href="/contact" className='block px-4 py-4'>Contact</a>
                    <a href="/other" className='block px-4 py-4'>Other</a>
                </nav>
            </div>






            <div class="flex-1 p-10 text-2xl font-bold">
                content
            </div>

        </div >
    )
}