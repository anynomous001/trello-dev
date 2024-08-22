'use client'

import { AccordionTrigger, AccordionItem } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Image from "next/image"

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
    return (
        <AccordionItem
            value={organization.id}
            className="border-none"
        >
            <AccordionTrigger
                onClick={() => onExpand(organization.id)}
                className={cn("flex items-center rounded-sm hover:bg-blue-400/90 p-1.5 gap-x-2",
                    isActive && !isExpanded && "bg-sky-800/10 text-blue-200")}
            >
                <div className="flex items-center gap-x-2">
                    <div className="w-7 h-7 relative" >
                        <Image
                            fill
                            src={organization.imageUrl}
                            alt='Organization'
                            className="rounded-sm object-cover"
                        />
                    </div>
                </div>
            </AccordionTrigger>
        </AccordionItem >
    )
}


export default NavItems