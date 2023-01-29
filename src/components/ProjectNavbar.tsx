import { Navbar } from "flowbite-react"
import DarkModeButton from "../hooks/DarkModeButton"
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav_Items = [
    { name: "Home", link: "/PROJECT" },
    { name: "About", link: "/PROJECT/About" },
]

export const ProjectNavbar = () => {

    const [active, setActive] = useState("")

    function ButtonPress(arg: string) {
        setActive(arg)
    }

    return (
        <div className="sticky top-0 shadow-sm bg-gray-50 dark:bg-gray-800 z-50">
            <Navbar fluid={true} rounded={true} className="container bg-gray-50 dark:bg-gray-800 mx-auto">
                <Link
                    className="text-gray-600 hover:text-blue-700 dark:text-gray-200 dark:hover:text-white"
                    onClick={() =>
                        ButtonPress(Nav_Items[0].name)}
                    to={Nav_Items[0].link}>
                    <Navbar.Brand>
                        <img src="https://avatars.githubusercontent.com/u/108736576?s=200&v=4" className="mr-3 h-6 sm:h-9 rounded-lg" alt="Logo" />
                        <span className="self-center whitespace-nowrap text-xl font-semibold">
                            PROJECT
                        </span>
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse>

                    {
                        Nav_Items.map((item, index) => {
                            return (
                                <Link
                                    onClick={() =>
                                        ButtonPress(item.name)}
                                    to={item.link}
                                    key={index}>
                                    <Navbar.Link
                                        className="mt-1 text-center rounded-lg"
                                        active={active === item.name}>
                                        {item.name}
                                    </Navbar.Link>
                                </Link>
                            )
                        })
                    }

                    <div className="self-center">
                        <DarkModeButton />
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}