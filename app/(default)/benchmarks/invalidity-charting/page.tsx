export default function InvalidityChartingBenchmarksPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
      <main className="flex-grow">
        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                <h2 className="h1 font-bold text-4xl md:text-5xl mb-3 text-gray-100" data-aos="fade-up">
                  Claim charting
                </h2>
                
                {/* TLDR Section */}
                <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                  <div className="bg-gray-800 border-l-4 border-gray-100 p-6 rounded-lg text-left">
                    <p className="text-gray-300">
                      We achieve 29.2% recall on a hand-curated dataset of cited passages from 15 different patent-reference pairs taken from IPR final written decisions.
                    </p>
                  </div>
                </div>
              </div>

              {/* Technical Report Sections */}
              <div className="max-w-4xl mx-auto">
                {/* Dataset Construction */}
                <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
                  <h2 className="text-3xl font-bold mb-6 text-gray-100">
                    Dataset Construction
                  </h2>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="space-y-6">
                      {/* Data Collection */}
                      <div className="border-l-4 border-gray-100 pl-4">
                        <h3 className="font-semibold mb-2 text-gray-100">Data Collection</h3>
                        <p className="text-gray-300">
                          We human-generate passages from IPR proceedings where the PTAB ruled in favor of the petitioner.
                        </p>
                      </div>

                      {/* Dataset Overview */}
                      <div className="border-l-4 border-gray-100 pl-4">
                        <h3 className="font-semibold mb-2 text-gray-100">Dataset Overview</h3>
                        <div className="mt-4">
                          <iframe 
                            src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSqDqmMdchK64po7h8tTC_YxljR7NbJtHS-JL8as938DSajr77IwQR8tQcs_RzQLIIfCNmqBPa7AR-e/pubhtml?widget=true&amp;headers=false" 
                            className="w-full h-[400px] border-0 rounded-lg bg-gray-900" 
                            title="Dataset Statistics"
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                <div className="mb-12" data-aos="fade-up" data-aos-delay="150">
                  <h2 className="text-3xl font-bold mb-6 text-gray-100">
                    Results
                  </h2>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <div className="space-y-8">
                      {/* Performance Metrics */}
                      <div className="border-l-4 border-gray-100 pl-4">
                        <h3 className="font-semibold mb-6 text-gray-100">Performance Metrics</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          {/* True Positives Card */}
                          <div className="bg-gray-900 rounded-lg p-6 text-center border border-green-500">
                            <div className="text-4xl font-bold text-green-400 mb-2">75</div>
                            <div className="text-sm font-medium text-green-400">True Positives</div>
                            <div className="text-xs text-gray-400 mt-2">Successfully selected passages/figures</div>
                          </div>

                          {/* False Negatives Card */}
                          <div className="bg-gray-900 rounded-lg p-6 text-center border border-red-500">
                            <div className="text-4xl font-bold text-red-400 mb-2">182</div>
                            <div className="text-sm font-medium text-red-400">False Negatives</div>
                            <div className="text-xs text-gray-400 mt-2">Missed passages/figures</div>
                          </div>
                        </div>
                      </div>

                      {/* Key Findings */}
                      <div className="border-l-4 border-gray-100 pl-4">
                        <h3 className="font-semibold mb-3 text-gray-100">Key Findings</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>29.2% recall rate in identifying passages cited by the PTAB</li>
                          <li>High precision determined by human review suggests system may be relied on as an orientation tool, but recall is insufficient for "litigation-ready" charting TODO: link to blog post introducing the system</li>
                        </ul>
                      </div>

                      {/* Future Work */}
                      <div className="border-l-4 border-gray-100 pl-4 mt-8">
                        <h3 className="font-semibold mb-3 text-gray-100">Future Work</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-300">
                          <li>Increase size of dataset</li>
                          <li>Split evaluation by CPC code</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
} 