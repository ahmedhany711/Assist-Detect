import React, { useEffect, useState } from 'react';
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

const DarkMode = () => {

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )

    const element = document.documentElement;  // Html TAG

    useEffect(() => {
        if (theme === 'dark') {
            element.classList.add('dark');
            localStorage.setItem("theme", "dark")
        } else {
            element.classList.remove('dark');
            localStorage.setItem("theme", "light")
        }
    }, [theme])

    return (
        <>
            <div className=' relative right-0 '>
                <MdLightMode onClick={() => {
                    setTheme(theme === 'dark' ? "light" : "dark")
                }}
                    className={`absolute top-1/2 -translate-y-1/2 right-4 text-2xl cursor-pointer ${theme === 'light' ? 'opacity-0' : 'opacity-100'}`}
                />
                <MdDarkMode onClick={() => {
                    setTheme(theme === 'dark' ? "light" : "dark")
                }}
                    className={`absolute top-1/2 -translate-y-1/2 right-4 text-2xl cursor-pointer ${theme === 'dark' ? 'opacity-0' : 'opacity-100'}`}
                />
            </div>
        </>
    );
}

export default DarkMode;
