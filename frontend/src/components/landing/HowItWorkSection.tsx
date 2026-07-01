function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Create Your Account",
      description:
        "Sign up and create your DreamSetu profile to begin your learning journey.",
    },
    {
      number: "02",
      title: "Take AI Skill Assessment",
      description:
        "Our AI analyzes your current skills and identifies areas for improvement.",
    },
    {
      number: "03",
      title: "Join a Setu Pod",
      description:
        "Connect with learners at different skill levels and collaborate as a team.",
    },
    {
      number: "04",
      title: "Build Real Projects",
      description:
        "Work on practical projects that strengthen your portfolio and experience.",
    },
    {
      number: "05",
      title: "Track Your Progress",
      description:
        "Monitor achievements, complete milestones, and stay motivated.",
    },
    {
      number: "06",
      title: "Become a Mentor",
      description:
        "Share your knowledge, guide new learners, and give back to the community.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="text-center">
          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🚀 How It Works
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Your Journey with DreamSetu
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            A simple step-by-step journey designed to help students
            learn faster, collaborate better, and grow confidently.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-20 space-y-10">

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-6"
            >
              {/* Circle */}
              <div className="flex flex-col items-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-xl font-bold text-white">
                  {step.number}
                </div>

                {index !== steps.length - 1 && (
                  <div className="mt-2 h-16 w-1 bg-blue-200"></div>
                )}

              </div>

              {/* Content */}
              <div className="rounded-2xl border border-gray-200 bg-slate-50 p-6 shadow-sm flex-1">

                <h3 className="text-2xl font-bold text-gray-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-7">
                  {step.description}
                </p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default HowItWorksSection;