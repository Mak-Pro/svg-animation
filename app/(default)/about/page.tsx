import React from 'react'
import Beliefs from '@/components/about/beliefs'
import HorizontalRule from '@/components/hr'
import Background from '@/public/images/rivers3.jpg'

const people = [ 
    {name: 'Josh Hedtke', role: 'Cofounder / CEO', imageUrl:'images/Josh.jpg', linkedIn:'https://www.linkedin.com/in/josh-hedtke-74b9a748/'},
    {name: 'Ashkon Farhangi', role: 'Cofounder', imageUrl: 'images/Ashkon.jpg', linkedIn: 'https://www.linkedin.com/in/ashkon-farhangi/'},
    {name: 'Harshit Sharma', role: 'Software Engineer', imageUrl: 'images/Harshit.jpg', linkedIn: 'https://www.linkedin.com/in/hrshtsharma2017/'}
]

const advisors = [
    {name: 'Josh Glucoft', role: 'Partner @ Kirkland & Ellis', linkedIn: 'https://www.linkedin.com/in/joshuaglucoft/', image:'images/Glucoft.jpg'},
    {name: 'Pablo Arredondo', role: 'Cofounder @ Casetext', linkedIn:'https://www.linkedin.com/in/pablo-arredondo/', image: 'images/pablo.jpg'},
    {name: 'Anthony Scodary', role: 'Cofounder @ Gridspace', linkedIn: 'https://www.linkedin.com/in/scodary/', image: 'images/anthony.jpg'},
    {name: 'James Billmaier', role: 'Cofounder @ TurboPatent', linkedIn: 'https://www.linkedin.com/in/jimbillmaier/', image: 'images/James.jpg'}
]

const investors = [
    {name:'Ovo Fund', link: 'https://www.ovofund.com/', image: 'images/OVO fund.webp'},
    {name: 'AGI House Fund', link: 'https://agihouse.org/', image: 'images/AGI House.webp', title: 'AGI House Ventures'},
]

const angels = [
    {name: 'Unni Narayanan', role: 'Senior Director of Engineering @ Google', linkedIn: 'https://www.linkedin.com/in/unni-narayanan-20976/'},
    {name: 'Trevor Quist', role: 'Senior Associate @ Quinn Emanuel', linkedIn: 'https://www.linkedin.com/in/trevorquist/'},
    {name: 'Josh Glucoft', role: 'Partner @ Kirland & Ellis', linkedIn: 'https://www.linkedin.com/in/joshuaglucoft/'},
    {name: 'Patrick Park', role: 'On Counsel @ DLA Piper', linkedIn: 'https://www.linkedin.com/in/patrickswpark/'},
    {name: 'Raja Ayyagari', role: 'Group Product Manager @ Google', linkedIn: 'https://www.linkedin.com/in/rajaayyagari/'},
    {name: 'Johnny Halprin', role: 'CEO @ Fanimal', linkedIn: 'https://www.linkedin.com/in/jonny-halprin-0a043846/'},
    {name: 'Rohan Joshi', role: 'Director of Product Management @ Imply', linkedIn: 'https://www.linkedin.com/in/rohanjoshi1/'},
    {name: 'Tony Rowles', role: 'Partner @ Irell & Manella', linkedIn: 'https://www.linkedin.com/in/tony-rowles/'},
    {name: 'Andrew Han', role: 'Partner @ Foundation Capital', linkedIn: 'https://www.linkedin.com/in/andrewhhan/'},
    {name: 'Aman Khan', role: 'Group Product Manager @ Arize', linkedIn: 'https://www.linkedin.com/in/amanberkeley/'},
    {name: 'Dmitry Vagner', role: 'Member of the Technical Staff @ Foundry'}
]

export default function AboutUs() {
    
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url(${Background.src})` }}>
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20 px-16">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-8">
                <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-emerald-800 to-black pb-6" data-aos="fade-up">About CarefulAI</h1>
                </div>
                <h2 className="h3 text-3xl text-gray-600 pb-6" data-aos="fade-up" data-aos-delay="200" >
                    CarefulAI is building the first automated associate. 
                </h2>
                <h4 className="text-lg text-gray-500 pb-10" data-aos="fade-up" data-aos-delay="250">
                    Rather than conversing with a general purpose chatbot, attorneys use CarefulAI to execute complex task pipelines to deliver finished work product. <br></br><br></br>Under the hood, the Careful Associate has, or will have, semantically indexed domain-specific datasets, integrations with common touch points outside the firm, fine-tuned models to write practice-specific documents, and specialized prompt libraries and RAG systems for multi-step legal tasks. <br></br><br></br>Starting in the $50B patent law sub-sector because of our team’s relationships and the sub-sector's ripeness for automation, we’ve built an MVP that automates two key patent litigation workflows and are currently validating the reliability of its work product in trials at two top 5 Am Law 100 firms, as well as a handful of smaller firms, solo practitioners, and in-house counsel.
                </h4>

                <div className="flex flex-col gap-4 sm:gap-6 pb-12">
                    <h2 className="h3 text-3xl text-gray-600" data-aos="fade-up" data-aos-delay="200">We believe in</h2>
                </div>

                <Beliefs />
                
                <div data-aos="fade-up" data-aos-delay="200">
                    <div className="mx-auto max-w-7xl gap-y-12">
                        <div className="max-w-2xl">
                        <h2 className="h3 text-3xl text-gray-600 pb-12" data-aos="fade-up" data-aos-delay="200">Meet our team</h2>
                        </div>
                        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 pb-24">
                        {people.map((person) => (
                            <li key={person.name}>
                            <div className="flex items-center gap-x-6">
                                <img alt="" src={person.imageUrl} className="h-32 w-32 rounded-full" />
                                <div data-aos="fade-up" data-aos-delay="200">
                                <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                                <p className="text-sm font-semibold leading-6 text-emerald-700 pb-1">{person.role}</p>
                                <a href={person.linkedIn}>
                                    <img src="/images/linkedIn.png" className="h-5 w-5 rounded" /> 
                                </a>
                                </div>
                            </div>
                            </li>
                            ))}
                        </ul>
                        <div>
                            <h2 className="h4 text-gray-600 pb-12" data-aos="fade-up" data-aos-delay="200">Advisors</h2>
                            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2 sm:gap-y-8 xl:col-span-2 pb-24" data-aos="fade-up" data-aos-delay="200">
                            {advisors.map((advisor) => (
                                <li key={advisor.name}>
                                    <div className="flex items-center gap-x-6 pb-4">
                                        <img src={advisor.image} className="h-20 w-20 rounded-full" />
                                        <div>
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{advisor.name}</h3>
                                            <p className="text-sm font-semibold leading-6 text-emerald-700 pb-1">{advisor.role}</p>
                                            <a href={advisor.linkedIn}><img src="images/linkedIn.png" className="w-5 h-5 rounded"/></a>
                                        </div>
                                    </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="max-w-2xl">
                            <h2 className="h3 text-3xl text-gray-600 pb-14" data-aos="fade-up" data-aos-delay="200">Backed by</h2>
                        </div>
                        <div className="pb-2">
                            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-y-8 xl:col-span-2 pb-12">
                                {investors.map((investor) => (
                                <li key={investor.name} data-aos="fade-up" data-aos-delay="200">
                                    <div className="flex flex-wrap gap-4 items-center">
                                        <a href={investor.link} className="text-base font-semibold leading-7 tracking-tight text-gray-900 pb-1">
                                            <div className="flex items-center">
                                                <img
                                                    src={investor.image}
                                                    className="max-h-12 max-w-15 pr-4" 
                                                />
                                                <h5 className="text-2xl font-thin font-serif">{investor.title}</h5>
                                                </div>
                                        </a>
                                    </div>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <div className="pb-12">
                            <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-3 sm:gap-y-8 xl:col-span-2">
                                {angels.map((angel) => (
                                    <li key={angel.name} data-aos="fade-up" data-aos-delay="200">
                                        <div className="flex items-center">
                                            <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900 pb-1 pr-2">{angel.name}</h3>
                                            <a href={angel.linkedIn}>
                                            <img src="images/linkedIn.png" className="h-4 w-4 rounded"/>
                                            </a>
                                            </div>
                                        <p className="text-xs font-semibold leading-6 text-emerald-700">{angel.role}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </section>
        <HorizontalRule />
      </main>
    </div>
  );
}
