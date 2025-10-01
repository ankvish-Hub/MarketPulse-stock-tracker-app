import Link from "next/link";
import Image from "next/image";
import UserDropdown from "@/components/UserDropdown";
import NavItems from "@/components/Navitems";

const Header = () => {
    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/" className="flex items-center gap-2 cursor-pointer">
                    <Image
                        src="/assets/icons/logo.svg"
                        alt="MarketPulse logo"
                        width={40}
                        height={40}
                        className="h-10 w-auto"
                    />
                    <span className="text-2xl  text-white">MarketPulse</span>
                </Link>

                <nav className="hidden sm:block">
                    <NavItems />
                </nav>

                <UserDropdown />
            </div>
        </header>
    )
}
export default Header