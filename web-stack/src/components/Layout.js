import React from "react"

import Footer from "./footer"
import Navbar from ".Navbar"

export default function Layout (props){
    return (
        <div>
            <div>
                <Navbar />
                {props.children}
            </div>
            <Footer />
        </div>
    )

}
