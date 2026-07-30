import ProgressCard from "../dashboard/ProgressCard";

export default function ProgressOverview() {

    const progressData = [
        {
            title: "Profile",
            value: "80%",
            subtitle: "Completed"
        },
        {
            title: "Assessment",
            value: "0%",
            subtitle: "Not Started"
        },
        {
            title: "Roadmap",
            value: "Week 1",
            subtitle: "Active"
        },
        {
            title: "Projects",
            value: "2",
            subtitle: "Active"
        }
    ];

    return (
        <section className="mt-8">
            <h2 className="text-xl font-bold mb-4">
                Progress Overview
            </h2>

            <div className="grid grid-cols-4 gap-6">
                {progressData.map((item) => (
                    <ProgressCard
                        key={item.title}
                        title={item.title}
                        value={item.value}
                        subtitle={item.subtitle}
                    />
                ))}
            </div>
        </section>
    );
}