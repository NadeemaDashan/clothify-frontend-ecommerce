import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex w-screen  p-5">
            <ul className="flex ">
                <li className="ml-2">Home</li>
                <li className="ml-12">Mens</li>
                <li className="ml-12">Womens</li>
                <li className="ml-12">Kids</li>
            </ul>
            <div>
                <p>LOGO</p>
            </div>
            <div>
            </div>
        </header>
    )
}