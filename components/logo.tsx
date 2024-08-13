import { cn } from "@/lib/utils"
import localfont from "next/font/local"
import Image from "next/image"
import Link from "next/link"


const headingFont = localfont({
    src: "../public/fonts/webfonts/CalSans-SemiBold.woff2"
})


const Logo = () => {
    return (
        <Link href='/'>
            <div className=" hidden md:flex items-center gap-x-0.5 hover:opacity-75 transition ">
                <Image
                    src="/logo.png"
                    alt="logo"
                    height={35}
                    width={35}
                />
                <p className={cn("text-xl text-neutral-700 pb-1", headingFont.className)}>
                    Taskify
                </p>
            </div>
        </Link>
    )
}

export default Logo