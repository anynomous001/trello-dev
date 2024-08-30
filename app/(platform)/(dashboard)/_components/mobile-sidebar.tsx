'use client'

import { SheetContent, Sheet } from "@/components/ui/sheet"
import { useMobileSidebar } from "@/hooks/use-mobile-sidebar"
import { Menu } from "lucide-react"
import React from "react"
import Sidebar from "./sidebar"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"




const MobileSidebar = () => {

    const isOpen = useMobileSidebar((state) => state.isOpen)
    const onOpen = useMobileSidebar((state) => state.onOpen)
    const onClose = useMobileSidebar((state) => state.onClose)

    const [isMounted, setIsMounted] = React.useState(false)
    const pathname = usePathname()


    React.useEffect(() => {
        setIsMounted(true)
    }, [])

    React.useEffect(() => {
        onClose()
    }, [pathname, onClose])



    if (!isMounted) {
        return null
    }




    return (
        <>
            <Button
                className="block md:hidden"
                onClick={onOpen}
                variant='ghost'
                size='sm'
            >
                <Menu
                    className="mr-6 w-7 h-7 " />
            </Button>

            <Sheet open={isOpen} onOpenChange={onClose}  >
                <SheetContent
                    side='left'
                    className='pt-10'
                >
                    <Sidebar

                        storageKey="t-sidebar-mobile-state"
                    />
                </SheetContent>
            </Sheet>



        </>
    )
}

export default MobileSidebar