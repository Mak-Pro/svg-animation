import Image from 'next/image'
import FeatureImage01 from '@/public/images/feature-summaries.jpeg'
import FeatureImage02 from '@/public/images/feature-search.jpeg'
import FeatureImage03 from '@/public/images/feature-passages.png'
import FeatureImage04 from '@/public/images/feature-rank.png'
import FeatureImage05 from '@/public/images/feature-login.jpeg'
import { MagnifyingGlassIcon} from '@heroicons/react/20/solid'
import { PencilSquareIcon} from '@heroicons/react/20/solid'
import { UserCircleIcon} from '@heroicons/react/20/solid'
import { DocumentTextIcon} from '@heroicons/react/20/solid'
import { RectangleStackIcon} from '@heroicons/react/20/solid'

export default function Screenshots() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-6 py-12 md:py-20">
        <div className="relative max-w-2xl mx-auto text-center pb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 mb-4" data-aos="fade-down" data-aos-delay="200">Other <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 via-emerald-900 to-black">CarefulAI</span> <span className="text-zinc-800">features</span></h2>
          <p className="text-md sm:text-xl text-zinc-500" data-aos="fade-down" data-aos-delay="250">CarefulAI supports a handful of more advanced features that can help you improve your productivity.</p>
        </div>

        <div className="mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          <article className="sm:col-span-2 flex flex-col border border-zinc-300 bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-right" data-aos-delay="250">
            <div className="grow flex flex-col p-5 pt-6">
              <div className="flex items-center space-x-3 mb-1">
                <PencilSquareIcon className="w-6" />
                <h3 className="font-medium text-zinc-900 text-lg">Automated patent summarization and tagging</h3>
              </div>
              <p className="grow max-w-md text-sm text-zinc-500">CarefulAI automatically summarizes your patents and tags them with relevant topics to save you time.</p>
            </div>
            <figure>
              <Image className="h-[280px] object-cover object-center mx-auto sm:object-contain sm:h-auto pb-6" src={FeatureImage01} width={721} height={280} alt="Feature Post 01" />
            </figure>
          </article>

          <article className="flex flex-col border border-zinc-300 bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-left" data-aos-delay="250">
            <div className="grow flex flex-col p-5 pt-6">
              <div className="flex items-center space-x-3 mb-1">
                <MagnifyingGlassIcon className="w-6" />
                <h3 className="font-medium text-zinc-900 text-lg">Semantic prior art search</h3>
              </div>
              <p className="grow max-w-md text-sm text-zinc-500">Describe the invention you're looking in your own words, and get spot on results in return.</p>
            </div>
            <figure>
              <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage02} width={342} height={280} alt="Feature Post 02" />
            </figure>
          </article>

          <article className="flex flex-col border border-zinc-300 bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up-right" data-aos-delay="250">
            <div className="grow flex flex-col p-5 pt-6">
              <div className="flex items-center space-x-3 mb-1">
                <DocumentTextIcon className="w-6" />
                <h3 className="font-medium text-zinc-900 text-lg">View passages in context</h3>
              </div>
              <p className="grow max-w-md text-sm text-zinc-500">View the passages CarefulAI generates verbatim in their original full context.</p>
            </div>
            <figure>
              <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto pb-6 px-4" src={FeatureImage03} width={342} height={280} alt="Feature Post 03" />
            </figure>
          </article>

          <article className="flex flex-col border border-zinc-300 bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="250">
            <div className="grow flex flex-col p-5 pt-6">
              <div className="flex items-center space-x-3 mb-1">
                <RectangleStackIcon className="w-6" />
                <h3 className="font-medium text-zinc-900 text-lg">Custom passage ranking</h3>
              </div>
              <p className="grow max-w-md text-sm text-zinc-500">Re-rank and re-order the passages CarefulAI finds to match your perosnal preferences.</p>
            </div>
            <figure>
              <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage04} width={342} height={280} alt="Feature Post 04" />
            </figure>
          </article>

          <article className="flex flex-col border border-zinc-300 bg-white rounded-lg shadow-md overflow-hidden" data-aos="fade-up-left" data-aos-delay="250">
            <div className="grow flex flex-col p-5 pt-6">
              <div className="flex items-center space-x-3 mb-1">
                <UserCircleIcon className="w-6" />
                <h3 className="font-medium text-zinc-900 text-lg">Login with Google or Microsoft</h3>
              </div>
              <p className="grow max-w-md text-sm text-zinc-500">Manage your CarefulAI account with Google or Microsoft - whatever makes your life easier.</p>
            </div>
            <figure>
              <Image className="h-[280px] object-cover object-left mx-auto sm:object-contain sm:h-auto" src={FeatureImage05} width={342} height={280} alt="Feature Post 05" />
            </figure>
          </article>
        </div>
      </div>
    </section>
  )
}
