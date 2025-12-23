export default function Contact() {
  return (
    <section id="contact" className="lg:col-start-1 lg:col-end-3 lg:row-start-4 lg:row-end-7 bg-zinc-900/80 backdrop-blur-xl border border-zinc-800 rounded-3xl p-6 shadow-2xl hover:border-red-500/50 transition-all duration-500 flex items-center justify-center">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-12">Get In Touch</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          I&apos;m always open to new opportunities and interesting projects.
        </p>
        <a
          href="mailto:your-email@example.com"
          className="inline-block bg-accent text-primary px-12 py-5 rounded-full text-lg font-semibold hover:bg-sky-400 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}