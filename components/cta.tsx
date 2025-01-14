import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'

export default function CTA() {
  return (
    <section className="bg-gradient-to-b from-white">
      <div className="py-12 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Testimonial Side */}
            <div className="text-center md:text-left">
              <div className="text-2xl font-medium leading-relaxed text-gray-900 sm:text-4xl md:text-5xl">
                <p>Trusted by partners, senior associates, and of counsel</p>
                <p>at three AmLaw 10 firms</p>
              </div>
            </div>

            {/* Logo and CTA Side */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-xl shadow-lg mb-8 relative before:absolute before:-top-12 before:w-52 before:h-52 before:bg-zinc-900 before:opacity-[.08] before:rounded-full before:blur-3xl before:-z-10">
                <Link href="/">
                  <Image src={Logo} width={60} height={60} alt="Logo" />
                </Link>
              </div>
              <div>
                <Link href="/getstarted" className="btn text-white bg-zinc-900 hover:bg-zinc-800 w-full sm:w-auto sm:ml-4">
                  Start Risk Free
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}