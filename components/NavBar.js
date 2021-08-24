import NavItem from "./NavItem"
import { useRouter } from "next/router"
export default function Navbar() {
    var homePath = "/";
    const items = [
        {
            path: "/about",
        },
        {
            path: "/contact",
        },
        {
            path: "/other",
        },
    ];

    const router = useRouter()
    return (
        <nav className="mainNav flex justify-center w-screen h-auto text-5xl hidden xl:block">
            <div className="py-2.5 w-11/12 flex justify-center">

                <div className=" h-auto font-sans flex justify-justify-start">
                    <NavItem path={homePath} currentPath={router.asPath} />
                </div>
                <div className="lg:font-body h-auto font-sans flex justify-end w-10/12">
                    {items.map((item) => <div key={item.path}><NavItem path={item.path} currentPath={router.asPath} /> </div>)}
                </div>

            </div>
        </nav>
    )
}