import Sidebar from "../_components/sidebar"

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="px-4 pt-20 2xl:max-w-xl mx-auto">
            <div className="flex gap-x-7 ">
                <div className="md:block hidden w-64 ml-1">
                    <Sidebar />
                </div>
                {children}
            </div>
        </div>
    )
}

export default OrganizationLayout