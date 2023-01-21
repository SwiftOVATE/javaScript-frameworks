import { Navbar } from "flowbite-react"
import DarkModeButton from "../hooks/DarkModeButton"

export const _Navbar = () => {
    return (
        <Navbar className="sticky top-0 bg-white dark:bg-gray-800 shadow-md shadow-gray-100 dark:shadow-gray-800">
            <Navbar fluid={true} rounded={true} className="container mx-auto">
                <Navbar.Brand href="https://github.com/pratikkabade">
                    <img src="https://avatars.githubusercontent.com/u/108847584?s=200&v=4" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Project</span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Navbar.Link href="/navbars" active={true}>
                        Home
                    </Navbar.Link>
                    <Navbar.Link>
                        About
                    </Navbar.Link>
                    <>
                        <DarkModeButton />
                    </>
                </Navbar.Collapse>
            </Navbar>
        </Navbar>
    )
}