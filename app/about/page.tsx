// About component

import { Metadata } from "next"

export const metadata:Metadata = {
    title: "About | Next app"
} 

export default function About(){
    return (
        <section className="container">
            <h1>This about page</h1>
        </section>
    )
}