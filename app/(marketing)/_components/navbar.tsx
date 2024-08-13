import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"





const Navbar = () => {
    return (
        <div className="w-full fixed top-0 h-16 px-4 shadow-sm bg-white  flex items-center ">
            <div className="md:max-w-screen-lg  flex items-center justify-between w-full ">
                <Logo />
                <div className="w-full flex justify-between md:block md:w-auto space-x-4 items-center" >
                    <Button className="text-md font-semibold" variant="outline" size='sm' asChild>
                        <Link href={'/sign-in'}>
                            Login
                        </Link>
                    </Button>
                    <Button className="text-md font-semibold" size='lg' asChild>
                        <Link href={'/sign-up'}>
                            Get Taskify for free
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Navbar