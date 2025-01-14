import YoutubeEmbed from '@/components/youtube'

export default function Video() {
  return (
    <section className="relative w-full max-w-6xl mx-auto px-6">
      <div className="relative max-w-2xl mx-auto text-center pb-12">
        <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4" data-aos="fade-down" data-aos-delay="200"><span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-emerald-900 to-green-900">A walkthrough on video</span></h2>
        <p className="text-md sm:text-xl text-zinc-500" data-aos="fade-down" data-aos-delay="250">Watch for quick run through of the core features above.</p>
      </div>

      <div className="rounded-lg shadow-xl border border-zinc-200 w-full overflow-hidden" data-aos="fade-down" data-aos-delay="350">
        <YoutubeEmbed embedId={"wjgW8_lQt9g"} />
      </div>
    </section>
  )
}