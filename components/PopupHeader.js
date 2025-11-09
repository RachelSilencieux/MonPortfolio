"use client";


import { useEffect, useState } from "react"
import "../styles/popup.css"

export default function PopupHeader() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true)

        const timer = setTimeout(() => {
            setIsVisible(false)
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

    return(
        <div className={`popup-header ${isVisible ? "show" : "hide"}`}>
            <img src="/images/meSmiley.png" alt="smiley" className="popup-image" />
            <p className="popup-msg">Oui, oui, voici tous mes projets de différentes langages faites avec HTML/CSS, JS, C# et plus encore!!!</p>
        </div>
    )
}