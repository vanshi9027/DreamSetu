function CTASection() {
  return (
    <section className="bg-blue-600 py-24">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <span className="rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white">
          🚀 Start Today
        </span>

        <h2 className="mt-8 text-5xl font-bold text-white">
          Ready to Build Your Future?
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-blue-100">
          Join DreamSetu and start learning with AI mentors,
          collaborate on real-world projects,
          and grow with an amazing community.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

          <button className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:scale-105">
            🚀 Join DreamSetu
          </button>

          <button className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-blue-600">
          
            🤖 Take AI Skill Assessment
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTASection;