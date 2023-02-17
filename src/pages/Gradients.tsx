import { Card } from "flowbite-react"
import { ProgressBar } from "../hooks/ProgressBar"

export const Gradients = () => {
    return (
        <div>
            <ProgressBar bg={"bg-emerald-400"} h={"h-6"} />
            <div className="container mx-auto">
                <Card className="w-2/3 mx-auto m-10">
                    <div className="mx-auto flex min-h-screen max-w-screen-sm items-center justify-center">
                        <div className="h-36 w-full rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
                            <div className="flex h-full w-full items-center justify-center bg-white back">
                                <h1 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, sed in! Voluptate voluptates earum quo architecto odit dolores beatae aliquid repellendus culpa, possimus molestias nostrum, maxime quasi qui iusto quidem?</h1>
                            </div>
                        </div>
                    </div>
                </Card >
            </div >
        </div>
    )
}