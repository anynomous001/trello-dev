import NavbarPage from "./_components/navbar"

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavbarPage />
            {children}
        </div>
    )
}

export default DashboardLayout