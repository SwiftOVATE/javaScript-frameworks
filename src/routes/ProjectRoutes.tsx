import { Route } from "react-router"
import { BrowserRouter, Routes } from "react-router-dom"
import { ProjectFooter } from "../components/ProjectFooter"
import { ProjectNavbar } from "../components/ProjectNavbar"
import { Home } from "../pages/Home"
import { Gradients } from "../pages/Gradients"
import { ScrollTop } from "../hooks/ScrollTop"
import { Parallax } from "../pages/Parallax"
import { FullPage } from "../pages/FullPage"

export const Route_Items = [
    { name: "Home", link: "/PROJECT", element: <Home /> },
    { name: "Gradients", link: "/PROJECT/Gradients", element: <Gradients /> },
    { name: "Parallax", link: "/PROJECT/Parallax", element: <Parallax /> },
    { name: "FullPage", link: "/PROJECT/FullPage", element: <FullPage /> },
]

export const Nav_Items = [
    { name: "Home", link: "/PROJECT" },
    { name: "Gradients", link: "/PROJECT/Gradients" },
    { name: "Parallax", link: "/PROJECT/Parallax" },
    { name: "FullPage", link: "/PROJECT/FullPage" },
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
                <ScrollTop col={"green"} />

            </BrowserRouter>
        </div>
    )
}