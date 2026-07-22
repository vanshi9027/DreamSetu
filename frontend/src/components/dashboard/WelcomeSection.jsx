export default function WelcomeSection() {

    return (
        <section className="flex justify-between items-center bg-white p-6 rounded-xl shadow-sm mb-6">

            <div className="space-y-2">
                <h1 className="text-2xl font-bold">
                    <span>👋</span> 
                    Good Morning, Vanshika
                </h1>

                <p className="text-gray-600">
                    Ready to build your dream today?
                </p>
            </div>

            <div className="flex gap-4">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Continue Learning
                </button>

                <button className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                    Ask AI Mentor
                </button>
            </div>

        </section>
    );
}