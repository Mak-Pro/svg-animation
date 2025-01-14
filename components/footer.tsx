import { PopupButton } from '@typeform/embed-react'
import Image from 'next/image'
import Logo from '@/public/images/logo.png'
import Cta from '@/components/cta'
import Triangles from '@/public/images/rivers2.png'
import LinkedInLogo from '@/public/svg/linkedin.svg'
import GitHubLogo from '@/public/svg/github.svg'

export default function Footer() {
  return (
    <footer className="bg-zinc-900" style={{ backgroundImage: `url(${Triangles.src})` }}>
      <div className="bg-zinc-900 bg-opacity-90">
        <div className="bg-gradient-to-t from-zinc-900 border-t border-zinc-800" data-aos="fade-up" data-aos-delay="250">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12">
              <div className="sm:col-span-6 md:col-span-3 lg:col-span-8 max-sm:order-1 flex flex-col">
                <div className="mb-4 flex flex-col gap-4">
                  <div className="flex gap-4">
                    <a className="flex items-center justify-center bg-white w-8 h-8 p-1.5 rounded shadow shadow-zinc-950/20" href="/">
                      <Image src={Logo} width={24} height={24} alt="Logo" />
                    </a>
                    <a className="flex items-center justify-center bg-white w-8 h-8 rounded shadow shadow-zinc-950/20" href={process.env.NEXT_LINKEDIN_URL} target="blank_">
                      <Image src={LinkedInLogo} width={48} height={48} alt="LinkedIn" />
                    </a>
                  </div>
                  <div className="text-2xl text-white flex flex-col">
                    <span>Trusted by partners, of counsel, and senior associates</span>
                    <span>at 3 of the AmLaw 10.</span>
                  </div>
                  <div className="grow text-sm text-white">&copy; 2024 Careful AI, Inc.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
