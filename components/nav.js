import { useRouter } from 'next/router'
export default function Header() {
    const router = useRouter()
    //BAD CODE FOR DYNAMIC BORDER
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

        <header>
            <nav className=" flex justify-center w-screen h-auto text-5xl">
                <div className="py-2.5 w-11/12 flex justify-center">
                    <div className="md:font-body h-auto font-sans flex justify-justify-start">
                        <a href="/" className={'border-black px-4 ' + home}>Home</a>
                    </div>
                    <div className="md:font-body h-auto font-sans flex justify-end w-10/12">
                        <a href="/about" className={'border-black px-4 ' + about}>About</a>
                        <a href="/contact" className={'border-black px-4 ' + contact}>Contact</a>
                        <a href="/other" className={'border-black px-4 ' + other}>Other</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}