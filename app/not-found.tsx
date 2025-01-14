'use client'

import Background from '@/public/images/rivers2.png'

export default function NotFound() {
  return (
    <div className="sm:border-8 sm:border-white">
      <div className="sm:border-8 sm:border-white">
        <div className="sm:border sm:border-zinc-300 h-[calc(100vh-2rem)] bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url(${Background.src})` }}>
          <div className="h-full w-full" style={{ backgroundColor: "rgba(250, 250, 250, 0.75)" }}>
            <main className="flex items-center grow h-full w-full mx-auto text-3xl">
              <span className="mx-auto text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-emerald-800 to-black">Page not found</span>
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}
