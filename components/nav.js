export default function Header() {
    return (

        <header>
            <nav className=" flex justify-center w-screen h-auto text-5xl">
                <div className="py-2.5 w-11/12 flex justify-center">
                    <div className="md:font-body h-auto font-sans flex justify-justify-start">
                        <a href="/" className="px-4 text-black-500 ">Home</a>
                    </div>
                    <div className="md:font-body h-auto font-sans flex justify-end w-10/12">
                        <a href="/about" className="px-4">About</a>
                        <a href="/contact" className="px-4">Contact</a>
                        <a href="/other" className="px-4">Other</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}