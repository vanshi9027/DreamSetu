function JourneySection() {
  const journey = [
    {
      icon: "🌱",
      title: "Explorer",
      description:
        "Discover your interests and understand where to begin your journey.",
    },
    {
      icon: "📚",
      title: "Learner",
      description:
        "Learn through personalized roadmaps, AI mentorship, and guided resources.",
    },
    {
      icon: "🛠️",
      title: "Builder",
      description:
        "Apply your knowledge by building real-world projects with your Setu Pod.",
    },
    {
      icon: "🤝",
      title: "Collaborator",
      description:
        "Work with teammates, contribute to projects, and learn from each other.",
    },
    {
      icon: "🎓",
      title: "Mentor",
      description:
        "Guide new learners, share your experience, and inspire the next generation.",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <span className="rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-600">
            🚀 Student Journey
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Grow Step by Step
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Every learner starts somewhere.
            DreamSetu helps you progress from your first step
            to becoming a mentor who empowers others.
          </p>

        </div>

        {/* Timeline */}

        <div className="mt-20 flex flex-col items-center lg:flex-row lg:justify-between">

          {journey.map((step, index) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center lg:w-52"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow-lg">
                {step.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-4 text-gray-600 leading-7">
                {step.description}
              </p>

              {index !== journey.length - 1 && (
                <div className="my-8 text-4xl text-blue-500 lg:my-0 lg:mx-6">
                  →
                </div>
              )}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default JourneySection;