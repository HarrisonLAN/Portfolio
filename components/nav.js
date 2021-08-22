export default function Header() {
    return (

        <header>
            <nav className="flex justify-center w-screen h-10">
                <div className="py-2.5 w-10/12 h-9 flex">
                    <div className="flex justify-justify-start">
                        <a href="/" className="text-black-500 ">Home</a>
                    </div>
                    <div className="flex justify-end w-10/12">
                        <a href="/about" className="px-2 text-black-500 ">About</a>
                        <a href="/contact" className="px-2 text-black-500 ">Contact</a>
                        <a href="/other" className="px-2 text-black-500 ">Other</a>
                    </div>
                </div>
            </nav>
        </header>
    )
}