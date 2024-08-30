'use client'
import {
    Activity,
    Settings,
    CreditCard,
    Layout
} from "lucide-react"

import { AccordionTrigger, AccordionItem, AccordionContent } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from "next/navigation"

export type Organization = {
    id: string,
    slug: string,
    imageUrl: string,
    name: string
}

interface NavItemsProps {
    onExpand: (id: string) => void,
    isActive: boolean,
    isExpanded: boolean,
    organization: Organization,

}






const NavItems = ({ onExpand, organization, isActive, isExpanded }: NavItemsProps) => {

    const router = useRouter()
    const pathname = usePathname()



    const routes = [
        {
            label: "Boards",
            icon: <Layout className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}`
        },
        {
            label: "Activity",
            icon: <Activity className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/activity`
        },
        {
            label: "Settings",
            icon: <Settings className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/settings`
        },
        {
            label: "Billing",
            icon: <CreditCard className="w-4 h-4 mr-2" />,
            href: `/organization/${organization.id}/billing`
        },
    ]

    const Onclick = (href: string) => {
        router.push(href)
    }



    return (
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn("flex items-center rounded-sm hover:no-underline hover:bg-blue-400/90 p-1.5 gap-x-2",
                    isActive && !isExpanded && "bg-sky-800/10 text-sky-700")}
            >
                <div className="flex items-center gap-x-5">
                    <div className="w-7 h-7 relative" >
                        <Image
                            fill
                            src={organization.imageUrl}
                            alt='Organization'
                            className="rounded-sm object-cover "
                        />

                    </div>
                    {organization.name}

                </div>
            </AccordionTrigger>
            <AccordionContent className="flex flex-col mt-2">
                {routes.map(route => {
                    return <Button
                        key={route.href}
                        size='sm'
                        className={cn("w-full pl-10 font-normal justify-start ",
                            pathname === route.href && 'bg-sky-700/10 text-sky-700'
                        )}
                        variant={'ghost'}
                        onClick={() => Onclick(route.href)}
                    >
                        {route.icon}
                        {route.label}
                    </Button>
                })}
            </AccordionContent>
        </AccordionItem >
    )
}


export default NavItems