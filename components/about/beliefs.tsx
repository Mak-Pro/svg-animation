import React from 'react'

const Beliefs = () => {

  const beliefs = [{title:'Preparation', main: 'If I had eight hours to chop down a tree, I’d spend six hours sharpening my axe.', image: 'images/Designer.jpeg'},
    {title: 'Planning', main: 'Plans are usless, but planning is indispensable.', image: 'images/Designer (1).jpeg'},
    {title: "Clarity", main: "If you can't write it down, you haven't thought it through.", image: '/images/Designer (3).jpeg'}
  ]
  return (
    <div data-aos="fade-up" data-aos-delay="200">
      <ul className="flex gap-x-2">
        {beliefs.map((belief) => (
        <><li key={belief.title}> </li>
          <div className="bg-emerald-600 w-96 shadow-xl hover:scale-105 rounded-xl overflow-hidden flex flex-col">
            <div className="text-white p-4">
              <h2 className="font-medium text-2xl pb-2">{belief.title}</h2>
              <h3 className="text-lg font-normal">{belief.main}</h3>
            </div>
            <div className='flex-grow'></div>
            <div>
              <img 
                src={belief.image}
              />
            </div>
          </div>
          </>
           ))}
        </ul>
      </div>
  )
}

export default Beliefs