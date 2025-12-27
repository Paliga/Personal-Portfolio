import Link from 'next/link';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Fading gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900 to-black pointer-events-none" />

      {/* Subtle cyan grid with radial fade */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(cyan 1px, transparent 1px),
            linear-gradient(90deg, cyan 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
          maskImage: 'radial-gradient(circle at center, white 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            My <span className="text-red-500">Projects</span>
          </h1>
          <p className="text-zinc-400 mb-12">
            Here are my projects.
          </p>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example Project Card */}
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2">My Personal Portfolio</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Description of your project goes here.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">React</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">Next.js</span>
              </div>
            </div>

            {/* Add more project cards here */}
            <div className="bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-500">
              <h3 className="text-xl font-bold mb-2">IT Asset Manager</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Description of your project goes here.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-zinc-800 text-xs rounded-full">Tailwind</span>
              </div>
            </div>

            {/* Back Button */}
            <div className="col-span-1 md:col-span-2 mt-12 flex">
              <Link
                href="/"
                className="px-6 py-3 bg-zinc-800 text-white rounded-xl hover:bg-red-500 transition-all duration-300"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
