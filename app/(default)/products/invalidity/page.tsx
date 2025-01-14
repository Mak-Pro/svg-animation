import Head from 'next/head'
import Image from 'next/image'
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import { Card, CardContent } from "@/components/ui/card"
import { ArrowPathIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function InvalidityPage() {
  const testimonials = [
    {
      quote: "CarefulAI's invalidity search platform reduced our search time by 60% while improving accuracy.",
      author: "John Smith",
      role: "IP Counsel",
      company: "Tech Industries"
    },
    // Add more testimonials...
  ]

  return (
    <>
      <Head>
        <title>Invalidity Search | CarefulAI</title>
        <meta name="description" content="AI-powered patent invalidity search solutions" />
      </Head>

      <main className="flex-grow">
        {/* Section 1: Process Overview */}
        <section className="relative bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Three-Step Invalidity Process</h2>
            <div className="flex justify-center items-center space-x-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-emerald-800">1</span>
                </div>
                <h3 className="font-semibold">Search</h3>
              </div>
              <ArrowRightIcon className="w-8 h-8 text-emerald-600" />
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-emerald-800">2</span>
                </div>
                <h3 className="font-semibold">Heatmap</h3>
              </div>
              <ArrowRightIcon className="w-8 h-8 text-emerald-600" />
              <div className="text-center">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl font-bold text-emerald-800">3</span>
                </div>
                <h3 className="font-semibold">Chart</h3>
              </div>
              <ArrowPathIcon className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
        </section>

        {/* Section 2: Workflow Comparison */}
        <section className="relative bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Workflow Comparison</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Traditional Process Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-8">Traditional Process</h3>
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow">Patent Number Input</div>
                  <ArrowRightIcon className="w-6 h-6" />
                  <div className="p-4 bg-white rounded-lg shadow">Manual Search (2hrs/claim)</div>
                  <ArrowRightIcon className="w-6 h-6" />
                  <div className="p-4 bg-white rounded-lg shadow">Excel Heatmap</div>
                  <ArrowRightIcon className="w-6 h-6" />
                  <div className="p-4 bg-white rounded-lg shadow">Human Review</div>
                </div>
              </div>

              {/* CarefulAI Process Column */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-center mb-8">CarefulAI Process</h3>
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-4 bg-white rounded-lg shadow">
                    <Image src="/images/claim-suggestions.png" alt="Claim Suggestions" width={300} height={200} />
                  </div>
                  <ArrowRightIcon className="w-6 h-6" />
                  <div className="p-4 bg-white rounded-lg shadow">
                    <Image src="/images/claim-tree.png" alt="Claim Tree" width={300} height={200} />
                  </div>
                  <ArrowRightIcon className="w-6 h-6" />
                  <div className="p-4 bg-white rounded-lg shadow">AI-Assisted Search</div>
                  <ArrowRightIcon className="w-6 h-6" />
                  <div className="p-4 bg-white rounded-lg shadow">
                    <Image src="/images/heatmap.png" alt="Interactive Heatmap" width={300} height={200} />
                  </div>
                </div>
              </div>
            </div>
            {/* Combined Output */}
            <div className="mt-12 text-center">
              <ArrowRightIcon className="w-6 h-6 mx-auto mb-4" />
              <div className="p-4 bg-white rounded-lg shadow max-w-2xl mx-auto">
                <h4 className="font-semibold mb-2">Final Claim Chart</h4>
                {/* Add embedded document preview here */}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Try Risk Free */}
        <section className="relative bg-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Try Risk Free</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-emerald-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Free Trial</h3>
                <p className="mb-4">Test our platform with your own patents for 14 days.</p>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
                  Start Trial
                </button>
              </div>
              <div className="bg-emerald-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">Demo</h3>
                <p className="mb-4">Schedule a personalized demo with our team.</p>
                <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
                  Book Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Testimonials */}
        <section className="relative bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
            {/* <Carousel className="max-w-4xl mx-auto">
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <Card>
                      <CardContent className="p-8">
                        <blockquote className="text-xl italic text-gray-900 mb-4">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="text-gray-600">
                          <p className="font-semibold">{testimonial.author}</p>
                          <p>{testimonial.role}, {testimonial.company}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
          </div>
        </section>
      </main>
    </>
  )
}