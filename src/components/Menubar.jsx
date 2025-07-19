import {useState} from "react";
import {assets} from "../assets/assets.js";
import {Menu, X} from "lucide-react";
import { Link } from "react-router-dom";
import {SignedIn, SignedOut, useClerk, UserButton, useUser} from "@clerk/clerk-react";


const Menubar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const {openSignIn, openSignUp} = useClerk();
    const {user} = useUser();

    const openRegister = () =>{
        setMenuOpen(false);
        openSignUp({});
    }

    const openLogin = () =>{
        setMenuOpen(false);
        openSignIn({});
    }
    return (
        <nav className="bg-white px-8 py-4 flex items-center justify-between">
            {/* Left Side: logo + text  */}
                <Link className="flex items-center space-x-2" to="/">
                    <img className="h-8 w-8 object-contain cursor-pointer" src={assets.logo} alt="logo" />
                    <span className= "text-2xl font-bold text-violet-700 cursor-pointer">
                        erasey.<span className="text-gray-400 cursor-pointer">bg</span>
                    </span>
                </Link>
            {/* Right side: Action button */}
            <div className="hidden md:flex items-center space-x-4">
                <SignedOut>
                <button className="text-gray-700 hover:text-indigo-500 font-medium cursor-pointer" onClick={openLogin}>
                    Login
                </button>
                <button className="bg-gray-100 hover:bg-gray-200 hover:text-blue-700 font-medium px-4 py-2 rounded-full
                 transition-all cursor-pointer" onClick={openRegister}>
                    Sign up
                </button>
                </SignedOut>
                <SignedIn>
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button className="flex items-center gap-2 bg-blue-100 px-4 sm:px-5 py-1.5 sm:py-2.5 rounded-full
                        hover:scale-105 transition-all duration-500 cursor-pointer">
                            <img src={assets.credits} alt="credits" height={24} width={24}/>
                            <p className="text-xs sm:text-sm font-medium text-gray-800">
                                Credits: 0
                            </p>
                        </button>
                        <p className="text-gray-800 max-sm:hidden">
                            Hi, {user?.fullName}
                        </p>
                    </div>
                    <UserButton />
                </SignedIn>
            </div>

            {/* Mobile Hamburger*/}
            <div className="flex md:hidden">
                <button onClick={()=> setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} />: <Menu size={28}/>}
                </button>
            </div>

            {/* Mobile Menu */}
            { menuOpen && (
                <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y p-4 w-40">
                    <SignedOut>
                    <button onClick={openLogin} className="text-gray-700 hover:text-indigo-500 active:text-indigo-600
                     focus:text-indigo-600 font-medium"> Login
                    </button>
                    <button onClick={openRegister} className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300
                    focus:bg-gray-300 hover:text-blue-700 font-medium px-4 py-2 rounded-full transition-all"> Sign up
                    </button>
                    </SignedOut>
                    <SignedIn>
                        <div className="flex items-center gap-2 sm:gap-3">
                            <button className="flex items-center gap-2 bg-blue-100 px-4 py-1.5 sm:py-2.5 rounded-full
                            hover:scale-105 transition-all duration-500 cursor-pointer">
                                <img src={assets.credits} alt="credits" height={24} width={24}/>
                                <p className="text-xs sm:text-sm font-medium text-gray-600">
                                    Credits: 0
                                </p>
                            </button>9
                        </div>
                        <UserButton />
                    </SignedIn>
                </div>
            )}
        </nav>
    )
}
export default Menubar;