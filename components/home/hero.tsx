export default function Hero() {
  return (
    <section className="relative flex-1 before:absolute before:inset-0 before:h-80 before:pointer-events-none bg-zinc-900 bg-gradient-to-t from-zinc-900 before:-z-10">
      <div className="flex flex-col items-center justify-center min-h-[30vh] text-center px-4" data-aos="fade-up">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4">
          CarefulAI
        </h1>
        <p className="text-xl md:text-2xl text-white/70">
          The AI-native patent search platform
        </p>
      </div>
    </section>
  )
}
