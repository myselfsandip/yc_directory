import Image from "next/image";
import Link from "next/link";


export default function NavbarLayout() {
    return (<div className="px-5  py-3 bg-white shadow-sm font-work-sans" >
        <nav className="flex justify-content-between items-center">
            <Link href="/">
                <Image src="/logo.png" alt="Logo" className="size-6" />
            </Link>
        </nav>
    </div>
    )
}