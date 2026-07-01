function ComparisonSection() {
  const comparison = [
    {
      feature: "AI Guidance",
      dreamsetu: "✅",
      youtube: "❌",
      chatgpt: "✅",
      courses: "❌",
    },
    {
      feature: "Team Learning",
      dreamsetu: "✅",
      youtube: "❌",
      chatgpt: "❌",
      courses: "❌",
    },
    {
      feature: "Project Collaboration",
      dreamsetu: "✅",
      youtube: "❌",
      chatgpt: "❌",
      courses: "❌",
    },
    {
      feature: "Progress Tracking",
      dreamsetu: "✅",
      youtube: "❌",
      chatgpt: "❌",
      courses: "Limited",
    },
    {
      feature: "Skill Assessment",
      dreamsetu: "✅",
      youtube: "❌",
      chatgpt: "❌",
      courses: "❌",
    },
    {
      feature: "Community Support",
      dreamsetu: "✅",
      youtube: "❌",
      chatgpt: "❌",
      courses: "Limited",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            ⭐ Why DreamSetu?
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            More Than Just Another Learning Platform
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            DreamSetu combines AI, collaboration, mentorship,
            and project-based learning into one ecosystem.
          </p>

        </div>

        <div className="mt-16 overflow-x-auto">

          <table className="w-full overflow-hidden rounded-2xl shadow-lg">

            <thead className="bg-blue-600 text-white">

              <tr>

                <th className="px-6 py-4 text-left">Feature</th>

                <th className="px-6 py-4">DreamSetu</th>

                <th className="px-6 py-4">YouTube</th>

                <th className="px-6 py-4">ChatGPT</th>

                <th className="px-6 py-4">Courses</th>

              </tr>

            </thead>

            <tbody>

              {comparison.map((row) => (
                <tr
                  key={row.feature}
                  className="border-b hover:bg-slate-50"
                >
                  <td className="px-6 py-5 font-semibold">
                    {row.feature}
                  </td>

                  <td className="px-6 py-5 text-center">
                    {row.dreamsetu}
                  </td>

                  <td className="px-6 py-5 text-center">
                    {row.youtube}
                  </td>

                  <td className="px-6 py-5 text-center">
                    {row.chatgpt}
                  </td>

                  <td className="px-6 py-5 text-center">
                    {row.courses}
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}

export default ComparisonSection;