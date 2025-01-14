import Image from 'next/image'
import Step0 from '@/public/images/guide-step0.jpeg'
import Step1 from '@/public/images/guide-step1.png'
import Step2 from '@/public/images/guide-step2.png'
import Step3 from '@/public/images/guide-step3.png'
import Step4 from '@/public/images/guide-step4.png'
import Step5 from '@/public/images/step3.jpeg'

export default function Steps() {

  return (
    <section className="w-full max-w-6xl mx-auto px-6">
      <div className="sm:pt-4 mx-auto pb-12 sm:pb-24">
        <div className="relative max-w-2xl mx-auto text-center pb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4" data-aos="fade-down" data-aos-delay="200"><span className="text-transparent bg-clip-text bg-gradient-to-r from-black via-emerald-900 to-zinc-800">A step-by-step quickstart</span></h2>
          <p className="text-md sm:text-xl text-zinc-500 max-w-2xl mx-auto" data-aos="fade-down" data-aos-delay="250">Follow these steps to complete your first patent invalidity analysis with CarefulAI in 5 minutes or less.</p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 sm:p-10 bg-white rounded-lg border border-zinc-300 shadow-md" data-aos="fade-right" data-aos-delay="250">
            <div className="text-left sm:text-right">
              <h3 className="h3 text-2xl sm:text-3xl font-semibold" data-aos="fade-right" data-aos-delay="250">Login</h3>
              <p className="mt-4 text-md sm:text-lg text-zinc-400 mb-4" data-aos="fade-right" data-aos-delay="300">
                Head over to app.trycareful.ai.<br /> It'll prompt you to log in if you haven't. 
              </p>
              <p className="mt-4 text-md sm:text-lg text-zinc-400 mb-4" data-aos="fade-right" data-aos-delay="300">
                If you don't have an account yet, reach out to us at support@trycareful.ai to request an account.<br /> We'll get back to you asap.
              </p>
            </div>
            <Image className="mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg" src={Step0} alt="Install" />
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 sm:p-10 bg-white rounded-lg border border-zinc-300 shadow-md" data-aos="fade-left" data-aos-delay="250">
            <Image className="hidden sm:block z-10 mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg" src={Step3} alt="Pull request" />
            <div className="text-left">
              <h3 className="h3 text-2xl sm:text-3xl font-semibold" data-aos="fade-left" data-aos-delay="250">Create a new matter</h3>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-left" data-aos-delay="300">
                Create a new matter to manage this patent invalidation workflow.
              </p>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-left" data-aos-delay="300">
                In CarefulAI, matters organize the charting jobs your run over time.
              </p>
            </div>
            <Image className="block sm:hidden z-10 mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg" src={Step3} alt="Pull request" />
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 sm:p-10 bg-white rounded-lg border border-zinc-300 shadow-md" data-aos="fade-right" data-aos-delay="250">
            <div className="text-left sm:text-right">
              <h3 className="h3 text-2xl sm:text-3xl font-semibold" data-aos="fade-right" data-aos-delay="250">Add the asserted patent</h3>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-left" data-aos-delay="300">
                Add the asserted patent you'd like to invalidate.
              </p>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-left" data-aos-delay="300">
                You can add the patent by entering its unique id or by uploading its full PDF document.
              </p>
            </div>
            <Image className="z-10 mx-auto mb-4 w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg" src={Step1} alt="Install" />
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 sm:p-10 bg-white rounded-lg border border-zinc-300 shadow-md" data-aos="fade-left" data-aos-delay="250">
            <Image className="hidden sm:block z-10 mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg p-4 bg-white" src={Step2} alt="Pull request" />
            <div className="text-left">
              <h3 className="h3 text-2xl sm:text-3xl font-semibold" data-aos="fade-left" data-aos-delay="250">Add relevant prior art</h3>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-right" data-aos-delay="300">
                Add the relevant prior art you believe invalidates the patent. Again you can do this by entering unique patent ids or by uploading full PDF documents.
              </p>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-right" data-aos-delay="300">
                Today CarefulAI only supports patent prior art sources, but soon will support other types as well.
              </p>
            </div>
            <Image className="block sm:hidden z-10 mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg p-4 bg-white" src={Step2} alt="Pull request" />
          </div>

          <div className="mmx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 sm:p-10 bg-white rounded-lg border border-zinc-300 shadow-md" data-aos="fade-right" data-aos-delay="250">
            <div className="text-left sm:text-right">
              <h3 className="h3 text-2xl sm:text-3xl font-semibold" data-aos="fade-right" data-aos-delay="250">Run a charting job</h3>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-right" data-aos-delay="300">
                Run a charting job that that aligns the strongest passages in the prior art you uploaded to the most relevant claims in the patent you're invalidating.
              </p>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-right" data-aos-delay="300">
                You have the option to split claims until multiple smaller claims first if you believe that will improve your case.
              </p>
            </div>
            <Image className="z-10 mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg py-6 px-3 bg-white" src={Step4} alt="Feedback" />
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 p-6 sm:p-10 bg-white rounded-lg border border-zinc-300 shadow-md" data-aos="fade-left" data-aos-delay="250">
            <Image className="hidden sm:block z-10 mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg" src={Step5} alt="Pull request" />
            <div className="text-left">
              <h3 className="h3 text-2xl sm:text-3xl font-semibold" data-aos="fade-left" data-aos-delay="250">Rank passages</h3>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-right" data-aos-delay="300">
                Re-rank and order the identified passages to match your strategy and intuitions.
              </p>
              <p className="mt-4 text-md sm:text-lg text-zinc-400" data-aos="fade-right" data-aos-delay="300">
                Click the 'Full text' toggle to see the raw passages in their full context, with the passages highlighted in yellow.
              </p>
            </div>
            <Image className="block sm:hidden z-10 mx-auto w-100 h-100 hover:scale-[1.3] transition-all duration-300 rounded-sm border border-zinc-200 shadow rounded-lg" src={Step5} alt="Pull request" />
          </div>
        </div>
      </div>
    </section>
  );
}
