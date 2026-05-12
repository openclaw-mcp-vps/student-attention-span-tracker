export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest border border-[#30363d]">
          Education Tech
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Know Exactly When Students<br />
          <span className="text-[#58a6ff]">Stop Paying Attention</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Embed a lightweight tracking widget into your online lessons. Monitor mouse movement, scroll behavior, tab focus, and video interactions — then see real-time attention heatmaps on your dashboard.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $10/mo
        </a>
        <p className="mt-4 text-xs text-[#6e7681]">No credit card required to try. Cancel anytime.</p>
      </section>

      {/* Features strip */}
      <section className="max-w-3xl mx-auto px-6 pb-16 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        {[
          ["Real-Time Signals", "See engagement drop-offs as they happen during live sessions."],
          ["Attention Heatmaps", "Visual overlays show exactly where students zone out in your content."],
          ["One-Line Embed", "Paste a single script tag into any LMS, Webflow, or custom page."]
        ].map(([title, desc]) => (
          <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <h3 className="text-white font-semibold mb-2">{title}</h3>
            <p className="text-sm text-[#8b949e]">{desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$10</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8 text-sm text-[#c9d1d9]">
            {[
              "Unlimited lessons tracked",
              "Real-time attention dashboard",
              "Attention heatmaps & drop-off reports",
              "Up to 500 student sessions/mo",
              "Email digest & alerts"
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">&#10003;</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "How does the tracking widget work?",
              "You paste a single JavaScript snippet into your lesson page. It silently monitors engagement signals — mouse activity, scroll depth, tab visibility, and video play/pause events — and sends anonymized data to your dashboard."
            ],
            [
              "Does it work with any LMS or video platform?",
              "Yes. The widget is platform-agnostic. It works on any webpage, including Teachable, Thinkific, Kajabi, custom HTML pages, and embedded YouTube or Vimeo videos."
            ],
            [
              "Is student data private and GDPR-compliant?",
              "All data is anonymized and aggregated. No personally identifiable information is stored. You can configure a consent banner, and data is processed in compliance with GDPR and CCPA."
            ]
          ].map(([q, a]) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} Student Attention Span Tracker. All rights reserved.
      </footer>
    </main>
  );
}
