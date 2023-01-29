import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ProjectFooter } from "../components/ProjectFooter"
import { ProjectNavbar } from "../components/ProjectNavbar"
import { Home } from "../pages/Home"
import { About } from "../pages/About"

const Route_Items = [
    { name: "Home", link: "/PROJECT", element: <Home /> },
    { name: "About", link: "/PROJECT/About", element: <About /> },
]

export const ProjectRoutes = () => {
    return (
        <div>
            <BrowserRouter>
                <ProjectNavbar />
                <Routes>
                    {
                        Route_Items.map((item, index) => {
                            return (
                                <Route
                                    key={index}
                                    path={item.link}
                                    element={item.element} />
                            )
                        })
                    }
                </Routes>
                <ProjectFooter />
            </BrowserRouter>
        </div>
    )
}