import QuickActionCard from "../dashboard/QuickActionCard";
import {
    UserRound,
    Brain,
    Users,
    FolderKanban,
} from "lucide-react";
export default function QuickActions() {


    const quickActions = [
        {
            icon: <UserRound size={34} />,
            title: "Complete Profile",
            description: "Finish your profile setup",
            button: "Complete",
        },
        {
            icon: <Brain size={34} />,
            title: "Skill Assessment",
            description: "Take AI assessment",
            button: "Start",
        },
        {
            icon: <Users size={34} />,
            title: "Find Setu Pods",
            description: "Discover your AI team",
            button: "Explore",
        },
        {
            icon: <FolderKanban size={34} />,
            title: "Create Project",
            description: "Start your first project",
            button: "Create",
        },
    ];

    return (
        <section>
            <h2> ⚡ Get Started</h2>
            <p>Complete these steps to unlock DreamSetu AI.</p>
            <div className="grid grid-cols-2 gap-6">
                {quickActions.map((action) => (

                    <QuickActionCard
                        key={action.title}
                        icon={action.icon}
                        title={action.title}
                        description={action.description}
                        button={action.button}
                    />
                ))}
            </div>
        </section>


    )

}