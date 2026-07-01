function SolutionSection() {
  const solutions = [
    {
      icon: "🤖",
      title: "AI Mentor",
      description:
        "Receive personalized guidance, learning suggestions, and career support whenever you need it.",
    },
    {
      icon: "📝",
      title: "Skill Assessment",
      description:
        "Identify your strengths and weaknesses to receive a personalized learning roadmap.",
    },
    {
      icon: "👥",
      title: "Setu Pods",
      description:
        "Join small learning groups where beginners, intermediate learners, and experts grow together.",
    },
    {
      icon: "💻",
      title: "Real Projects",
      description:
        "Build practical projects with your team to gain hands-on experience and strengthen your portfolio.",
    },
    {
      icon: "📈",
      title: "Progress Tracking",
      description:
        "Track milestones, celebrate achievements, and stay motivated throughout your journey.",
    },
    {
      icon: "🎯",
      title: "Career Roadmap",
      description:
        "Follow an AI-powered roadmap designed to help you reach your career goals step by step.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            💡 Our Solution
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            One Platform.
            <br />
            Endless Growth Opportunities.
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            DreamSetu connects AI, collaboration, and real-world learning
            to help students build confidence, projects, and successful careers.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {solutions.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {item.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default SolutionSection;