import ProjectModal from "../components/ProjectModal"
import { ProgressBar } from "../hooks/ProgressBar"

export const Parallax = () => {
    return (
        <div>
            <ProgressBar bg={"bg-blue-400"} h={"h-2"} />
            <header className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
                <div className="p-5 text-2xl text-purple-900 bg-purple-300 bg-opacity-80 rounded-xl">
                    Welcome to my site!
                </div>
            </header>

            <div className="m-auto">
                <p className="m-36 text-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                    laoreet sem, semper molestie libero.
                </p>
            </div>

            <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover custom-img">
                <div className="p-5 text-2xl text-purple-900 bg-purple-300 bg-opacity-80 rounded-xl">
                    Parralax inline
                    <ProjectModal buttonName={"open modal"} modalHeader={"Terms and Conditions"} modalBody={"These are the terms and conditions of this modal"} modalFooterButton1={"I accept"} modalFooterButton2={"Decline"} />
                </div>
            </section>

            <div className="m-auto">
                <p className="m-36 text-5xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat a
                    magna non varius. Proin leo felis, euismod non porta eget, varius sit amet
                    sapien. Maecenas in nulla at leo convallis consectetur id a sapien. Nulla
                    nec pulvinar nisi. Vivamus non facilisis lacus, et volutpat libero. Nulla ac
                    odio aliquam, accumsan arcu ut, lacinia est. Nulla eu sem elit. Fusce nec
                    laoreet sem, semper molestie libero.
                </p>
            </div>
        </div>
    )
}