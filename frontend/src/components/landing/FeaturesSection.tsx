function FeaturesSection() {
  const features = [
    {
      icon: "🤖",
      title: "AI Mentor",
      description:
        "Get personalized guidance, recommendations, and career support anytime.",
    },
    {
      icon: "📝",
      title: "Skill Assessment",
      description:
        "Analyze your current level and receive a customized learning roadmap.",
    },
    {
      icon: "👥",
      title: "Setu Pods",
      description:
        "Join collaborative learning groups with students of different skill levels.",
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description:
        "Track your learning, projects, and achievements in one dashboard.",
    },
    {
      icon: "🛠️",
      title: "Project Collaboration",
      description:
        "Build real-world projects together and strengthen your portfolio.",
    },
    {
      icon: "🏆",
      title: "Achievements",
      description:
        "Earn badges, complete milestones, and stay motivated throughout your journey.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            ⭐ Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Everything You Need to Learn & Grow
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            DreamSetu combines AI, collaboration, projects, and mentorship
            into one powerful learning platform.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="text-5xl">{feature.icon}</div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturesSection;