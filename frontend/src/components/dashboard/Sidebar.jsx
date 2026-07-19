import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    User,
    Brain,
    BookOpen,
    Users,
    FolderKanban,
    FileText,
    Mic,
    Settings,
    LogOut,
} from "lucide-react";
export default function Sidebar() {
    const menuItems = [
        {
            title: "Dashboard",
            path: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            title: "Profile",
            path: "/profile",
            icon: User,

        },
        {
            title: "Skill Assessment",
            path: "/assessment",
            icon: Brain,
        },
        {
            title: "Learning Roadmap",
            path: "/roadmap",
            icon: BookOpen,
        },
        {
            title: "Setu Pods",
            path: "/pods",
            icon: Users,
        },
        {
            title: "Projects",
            path: "/projects",
            icon: FolderKanban,
        },
        {
            title: "Resume",
            path: "/resume",
            icon: FileText,
        },
        {
            title: "Mock Interview",
            path: "/interview",
            icon: Mic,
        },
        {
            title: "Settings",
            path: "/settings",
            icon: Settings,
        },
        {
            title: "Logout",
            path: "/logout",
            icon: LogOut,
        },
    ];
    return (
        <aside className="w-64 min-h-screen border-r p-4 space-y-2">
            {
                menuItems.map((item, index) => {
                    const Icon = item.icon;
                   return( <NavLink
                        key={item.path}
                        to={item.path}
                        
                        className={({ isActive }) =>
                            isActive == true ? "flex items-center gap-3  p-2 rounded bg-blue-600 text-white" : "flex items-center gap-3 p-2 rounded text-gray-700 hover:bg-gray-100"
                        }>
                       <Icon size={20} />  {item.title}
                    </NavLink>
                )})
            }
        </aside>
    );
}