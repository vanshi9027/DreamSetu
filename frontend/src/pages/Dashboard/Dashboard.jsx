import Navbar from "../../components/dashboard/Navbar";
import QuickActions from "../../components/Sections/QuickActions";
import Sidebar from "../../components/dashboard/Sidebar";
import WelcomeSection from "../../components/dashboard/WelcomeSection"

export default function Dashboard() {
    return (
        <>
            <Navbar />
            <div className="flex">

                <Sidebar />
                <main className="flex-1 p-6">
                    <div className="max-w-7xl mx-auto">
                        <WelcomeSection />
                        <QuickActions />
                    </div>

                </main>
            </div>

        </>

    );
}