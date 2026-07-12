


import React from "react";


function AuthLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">

        {/* Left Section */}
        <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">

          <h1 className="text-5xl font-bold">
            DreamSetu
          </h1>

          <p className="mt-6 text-lg leading-8">
            Learn together.
            <br />
            Build together.
            <br />
            Grow together.
          </p>

          <div className="mt-10 space-y-4">

            <div>✅ AI Career Mentor</div>

            <div>🚀 Project Based Learning</div>

            <div>👨‍💻 Setu Pods Collaboration</div>

            <div>🏆 Internship Ready Journey</div>

          </div>

        </div>

        {/* Right Section */}

        <div className="p-10 flex items-center justify-center">

          <div className="w-full max-w-md">

            {children}

          </div>

        </div>

      </div>
    </div>
  );
}

export default AuthLayout;