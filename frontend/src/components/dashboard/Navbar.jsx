import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { CircleUserRound, ChevronDown } from "lucide-react";
// CircleUserRound → User Avatar
//ChevronDown → Down Arrow
import { useState } from "react";
import Logo from "../common/Logo";
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="flex justify-between items-center px-6 py-6 border-b">
           
            <Logo />
            {/* search */}
            <div className="relative">

                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2" />  <input
                    type="text"
                    placeholder="Search..."
                    className="w-80  pl-10 px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
                /></div>

            {/* User profile */}
            <div className="flex items-center gap-5">
                <div className="cursor-pointer p-2 rounded-full hover:bg-gray-100">
                    <Bell size={22} />
                </div>
                <div className="relative">
                    <div className="flex items-center gap-2 cursor-pointer p-2 rounded-lg hover:bg-gray-100"
                        onClick={() => setShowMenu(!showMenu)}>
                        <CircleUserRound size={28} />

                        <span>Vanshika</span>

                        <ChevronDown size={18} />
                    </div>
                    {showMenu && (

                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                My Profile
                            </div>

                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Settings
                            </div>
                            <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Logout
                            </div>

                        </div>

                    )}

                </div>
            </div>

        </nav>

    );
}