import Hook from '@/components/home/hook'
import Hero from '@/components/home/hero'
import CTA from '@/components/home/cta'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Hook />
      <Hero />
      <CTA />
    </div>
  )
}
