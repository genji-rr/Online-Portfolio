import React from 'react'
export default function Navbar() {
    const NavbarLinks =[
        {id:1,name:"Home",link:"#home"},
        {id:2,name:"Projects",link:"#projects"},
        {id:3,name:"Skills",link:"#skills"},
        {id:4,name:"Contact",link:"#contact"},
        {id:5,name:"Fun",link:"#fun"}

    ]
    return (
        <header className="fixed top-0 left-0 w-full text-white bg-[#111827]/90 backdrop-blur-md border-b border-white/5"
                style={{ zIndex: 9999, position: 'fixed' }}>
            <div className="container mx-auto flex items-center justify-between p-5">

                <a href="/#home" className="text-3xl font-bold italic text-white">RAINIEL RAPHAEL MONTARIL</a>
                <nav className="flex items-center space-x-7">
                    {NavbarLinks.map((link)=>(
                        <a key={link.id} href={link.link} className="hover:text-gray-200 text-lg">
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>

        </header>
    )
}