import React from "react"

import Footer from "./Footer"
import Navbar from "./Navbar"

export default function Layout ({ children }){
    return (
        <div className="layout">
            <div className="content">
                <Navbar />
                { children }
            </div>
            <Footer />
        </div>
    )

}
