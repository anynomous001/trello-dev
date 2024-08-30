import Logo from "@/components/logo"
import { Button } from "@/components/ui/button"
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs"
import { Plus } from "lucide-react"
import MobileSidebar from "./mobile-sidebar"


const NavbarPage = () => {
    return (<div className="h-16  z-50 px-4 fixed top-0 shadow-sm  w-full flex items-center bg-white">
        <MobileSidebar />
        <div className="flex items-center gap-x-5 ">
            <div className="hidden md:flex">
                <Logo />
            </div>
            <Button variant="primary" size='sm' className="rounded-sm py-2 px-4 hidden md:block" >Create</Button>
            <Button variant="primary" size='sm' className="rounded-sm py-2 px-4  md:hidden" >
                <Plus className="w-4 h-4" />
            </Button>
        </div>
        <div className="ml-auto flex items-center gap-x-4">
            <OrganizationSwitcher
                hidePersonal
                afterCreateOrganizationUrl={'/organization/:id'}
                afterLeaveOrganizationUrl="/select-org"
                afterSelectPersonalUrl={'/organization/:id'}
                appearance={{
                    elements: {
                        rootBox: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }
                }}
            />
            <UserButton
                afterSignOutUrl="/"
                appearance={{
                    elements: {
                        avatarBox: {
                            height: 30,
                            width: 30
                        }
                    }
                }}
            />
        </div>
    </div>
    )
}


export default NavbarPage