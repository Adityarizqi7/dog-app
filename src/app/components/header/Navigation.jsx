import Link from "next/link"
import { ToastContainer } from 'react-toastify';

import NavigationMobile from "./NavigationMobile"

const Navigation = () => {

    return (
        <nav>
            <div className="bg-white border-b border-solid border-gray-300/80 flex flex-wrap items-center justify-between py-6 px-6">
                <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Dogs App</span>
                </Link>
                <NavigationMobile />
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
                        <li>
                            <Link href="/" className="block text-slate-900 hover:text-opacity-80 rounded md:bg-transparent">Home</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <ToastContainer />
        </nav>
    )
}

export default Navigation