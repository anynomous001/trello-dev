import { Medal } from "lucide-react"
import Link from "next/link"
import localfont from 'next/font/local'
import { Poppins } from "next/font/google"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"


const headingFont = localfont({
    src: "../../public/fonts/webfonts/CalSans-SemiBold.woff2"
})
const textFont = Poppins({
    subsets: ["latin"],
    weight: [
        "100",
        "200",
        "300",
        "400",
        "500",
        "600",
        "700",
        "800",
        "900"
    ]
})

const MarketingPage = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className={cn(
                "flex items-center justify-center flex-col",
                headingFont.className
            )}>
                <div className="flex bg-amber-100 p-4  shadow-sm rounded-full uppercase text-amber-700 mb-4">
                    <Medal className="h-6 w-6 mr-2" />
                    No 1 task Management
                </div>
                <h1 className="text-3xl md:text-6xl text-center mb-6 text-neutral-800">
                    Taskify helps team move
                </h1>
                <div className="font-semibold text-3xl md:text-6xl bg-gradient-to-r from-fuchsia-600 to-pink-600 py-4 p-2 rounded-lg shadow-sm text-white   ">
                    work forward.
                </div>
            </div>
            <div className={cn(
                "text-center text-neutral-400 mt-4 text-sm md:text-xl mx-auto max-w-xs md:max-w-2xl",
                textFont.className
            )}>
                Collaborate,manage projects and reach new prodiuctivity peaks.
                From high rises to the home office, the way your team work is unique - accomplish it all with Taskify.
            </div>
            <Button className="mt-6 text-md font-semibold" size='lg' asChild>
                <Link href={'/sign-up'}>
                    Get taskify for free
                </Link>
            </Button>
        </div>
    )
}

export default MarketingPage