'use client'
import Link from "next/link";
import { Plus } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Accordion } from "@/components/ui/accordion";
import NavItems, { Organization } from "./navitems";


interface SidebarProps {
    storageKey?: string;
}

const Sidebar = ({ storageKey = "t-sidebar-state" }: SidebarProps) => {

    const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(storageKey, {})

    const {
        organization: activeOrganization,
        isLoaded: isLoadedOrg
    } = useOrganization()

    const {
        userMemberships,
        isLoaded: isLoadedOrgList
    } = useOrganizationList({
        userMemberships: {
            infinite: true,
        }
    })

    const defaultAccordionValue = Object.keys(expanded)
        .reduce((acc: string[], key: string) => {
            if (expanded[key]) {
                acc.push(key)
            }
            return acc
        }, [])

    const onExpand = (id: string) => {

        setExpanded((curr) => ({
            ...[curr],
            [id]: !expanded[id]
        }))
    }

    if (!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) {
        return (
            <>
                <div className="flex items-center justify-between">
                    <Skeleton className="w-1/2 h-10 " />
                    <Skeleton className="w-10 h-10 " />
                </div>
                <div className="space-y-2">
                    <NavItems.Skeleton />
                    <NavItems.Skeleton />
                    <NavItems.Skeleton />
                </div>
            </>)
    }

    return (
        <>
            <div className="font-medium flex justify-between  items-center ">
                <span >WorkSpaces</span>
                <div >
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        asChild
                        className="ml-auto"
                    >
                        <Link href='/select-org'>
                            <Plus className="w-4 h-4 " />
                        </Link>
                    </Button>
                </div>
            </div>
            <Accordion
                type="multiple"
                defaultValue={defaultAccordionValue}
                className="space-y-2"
            >


                {
                    userMemberships.data.map(({ organization }) => (
                        <NavItems
                            key={organization.id}
                            onExpand={onExpand}
                            isActive={activeOrganization?.id === organization.id}
                            isExpanded={expanded[organization.id]}
                            organization={organization as Organization}
                        />
                    ))
                }



            </Accordion>
        </>

    )
}




export default Sidebar