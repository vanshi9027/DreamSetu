function ProblemSection() {
  const problems = [
    {
      emoji: "😟",
      title: "Fear of Asking Questions",
      description:
        "Many students hesitate to ask questions because they fear being judged.",
    },
    {
      emoji: "🤯",
      title: "Too Many Resources",
      description:
        "Thousands of tutorials and courses create confusion instead of clarity.",
    },
    {
      emoji: "😔",
      title: "No Mentors",
      description:
        "Students often lack guidance from experienced mentors to move forward.",
    },
    {
      emoji: "🤝",
      title: "No Team",
      description:
        "Finding teammates for projects and hackathons is difficult.",
    },
    {
      emoji: "📉",
      title: "Low Confidence",
      description:
        "Without consistent progress, students lose confidence and motivation.",
    },
    {
      emoji: "❌",
      title: "Comparison Culture",
      description:
        "Comparing yourself with others creates stress and slows learning.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">

        <div className="text-center">

          <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-600">
            🚨 The Problem
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Why Do Students Stop Learning?
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Every student starts with excitement, but many lose their way because
            they lack guidance, confidence, and the right community.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {problems.map((problem) => (
            <div
              key={problem.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {problem.emoji}
              </div>

              <h3 className="mt-6 text-xl font-bold text-gray-900">
                {problem.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600">
                {problem.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ProblemSection;