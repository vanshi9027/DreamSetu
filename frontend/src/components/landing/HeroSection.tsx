function HeroSection() {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-24 lg:flex-row lg:px-10">

        {/* Left Content */}
        <div className="flex-1">

          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600">
            🚀 AI Powered Career Platform
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            From Learning
            <br />
            to Landing Opportunities.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Everything you need to grow your career—
            AI mentorship, real-world projects,
            personalized roadmaps,
            and a community that learns and builds together.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700">
              🚀 Get Started
            </button>

            <button className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-700 transition-all duration-300 hover:border-blue-600 hover:text-blue-600">
              ▶ Watch Demo
            </button>

          </div>

          <div className="mt-12 flex flex-wrap gap-6 text-sm font-medium text-gray-500">

            <span>✅ Learn</span>

            <span>✅ Build</span>

            <span>✅ Collaborate</span>

            <span>✅ Grow</span>

          </div>

        </div>

        {/* Right Illustration */}
        <div className="flex flex-1 justify-center">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <h3 className="text-center text-xl font-bold text-blue-600">
              DreamSetu Journey
            </h3>

            <div className="mt-8 flex flex-col items-center gap-4 text-lg">

              <div className="rounded-xl bg-blue-100 px-6 py-3">
                🌱 Learner
              </div>

              ↓

              <div className="rounded-xl bg-green-100 px-6 py-3">
                🤖 AI Mentor
              </div>

              ↓

              <div className="rounded-xl bg-yellow-100 px-6 py-3">
                👥 Setu Pod
              </div>

              ↓

              <div className="rounded-xl bg-purple-100 px-6 py-3">
                💻 Real Project
              </div>

              ↓

              <div className="rounded-xl bg-pink-100 px-6 py-3">
                🚀 Career Growth
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;