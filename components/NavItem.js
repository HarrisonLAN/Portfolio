import classNames from 'classnames'
import Link from 'next/link'
export default function NavItem({ path, currentPath }) {
    const styles = classNames({
        "border-b border-black": path === currentPath
    });
    if (path === "/") {
        return (
            <Link href={path}>
                <a className={"px-4 border-b border-black"}>
                    <span>Home</span>
                </a>
            </Link>
        )
    } else {
        var res = path.replace('/', '');
        res = res.charAt(0).toUpperCase() + res.slice(1);
        return (
            <Link href={path}>
                <a className={"px-4" + styles}>
                    <span>{res}</span>
                </a>
            </Link>
        )
    }
}

