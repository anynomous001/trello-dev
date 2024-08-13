import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import Link from "next/link"




const Footer = () => {
    return (
        <div className="w-full fixed bottom-0 h-16 px-4 shadow-sm bg-white  flex items-center ">
            <div className="md:max-w-screen-lg  flex items-center justify-between w-full ">
                <Logo />
                <div className="w-full flex justify-between md:block md:w-auto space-x-4 items-center" >
                    <Button size="sm" variant="ghost" >
                        Privacy Policy
                    </Button>
                    <Button variant="ghost" size="sm" >
                        Terms of Service
                    </Button>
                </div>
            </div>
        </div>)
}

export default Footer