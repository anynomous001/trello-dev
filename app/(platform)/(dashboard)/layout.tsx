import NavbarPage from "./_components/Navbar/page"

const OrganizationIdLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div>
            <NavbarPage />
            {children}
        </div>
    )
}

export default OrganizationIdLayout