import Image from 'next/image'

export default function BenchmarksPage() {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
        <main className="flex-grow">
          <section className="relative">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
              <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
                  <h2 className="h1 font-bold text-4xl md:text-5xl mb-3 text-gray-100" data-aos="fade-up">
                    Claim-based search
                  </h2>
                  
                  {/* TLDR Section */}
                  <div className="mt-8" data-aos="fade-up" data-aos-delay="300">
                    <div className="bg-gray-800 border-l-4 border-gray-100 p-6 rounded-lg text-left">
                      <p className="text-gray-300">
                        Our first and second stage search system (comprising 2/3 of our production system) achieves 77% recall at K=1300 on a document set of 11M US patents using an eval sample built from 100 IPRs. 
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
                            Using the <a href="https://developer.uspto.gov/api-catalog/ptab-api-v2" 
                            className="text-blue-400 hover:text-blue-300">USPTO PTAB API</a>, 
                            we collected 3,707 IPRs with final written decisions from 2012 through 2023.
                          </p>
                        </div>

                        {/* Preprocessing Overview */}
                        <div className="border-l-4 border-gray-100 pl-4">
                          <h3 className="font-semibold mb-2 text-gray-100">Preprocessing Steps</h3>
                          <div className="space-y-6">
                            {/* Step 1: Instituted Asserted Grounds */}
                            <div>
                              <h4 className="font-medium mb-2 text-gray-100">1. Extracting Instituted Asserted Grounds</h4>
                              <div className="bg-gray-800 p-4 rounded-lg">
                                <h5 className="font-medium text-sm mb-2 text-gray-100">Example from IPR2022-00034:</h5>
                                
                                <div className="grid grid-cols-1 gap-4 mb-4">
                                  <Image
                                    src="/images/IPR2022-00034_instituted_asserted_grounds_page.png"
                                    alt="Example of instituted grounds from IPR2022-00034"
                                    width={800}
                                    height={600}
                                    className="rounded-lg shadow-md"
                                  />
                                  <Image
                                    src="/images/IPR2022-00034_instituted_asserted_grounds_page_2.png"
                                    alt="Additional example of instituted grounds from IPR2022-00034"
                                    width={800}
                                    height={600}
                                    className="rounded-lg shadow-md"
                                  />
                                </div>

                                <h5 className="font-medium text-sm mb-2 text-gray-100">Extracted grounds:</h5>
                                <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm">
                                  <code>{`InstitutedAssertedGrounds(
  patent_number=PatentNumber(country_code='US', number='10966846'),
  grounds=[
    Ground(
      claims=[6],
      us_code_section='103',
      references=[
        Reference(name='Cribier'),
        Reference(name='Walther')
      ]
    ),
    Ground(
      claims=[6],
      us_code_section='103',
      references=[
        Reference(name='Spenser', publication_number='US7510575'),
        Reference(name='Walther')
      ]
    ),
    Ground(
      claims=[6],
      us_code_section='103',
      references=[
        Reference(name='Spenser', publication_number='US7510575'),
        Reference(name='Spenser II', publication_number='WO2006005015')
      ]
    ),
    Ground(
      claims=[6],
      us_code_section='102(e)',
      references=[
        Reference(name='Levi', publication_number='US9393110')
      ]
    ),
    Ground(
      claims=[6],
      us_code_section='103',
      references=[
        Reference(name='Levi', publication_number='US9393110')
      ]
    ),
    Ground(
      claims=[6],
      us_code_section='103',
      references=[
        Reference(name='Levi', publication_number='US9393110'),
        Reference(name='Walther')
      ]
    ),
    Ground(
      claims=[6],
      us_code_section='103',
      references=[
        Reference(name='Levi', publication_number='US9393110'),
        Reference(name='Spenser II', publication_number='WO2006005015')
      ]
    )
  ]
)`}</code>
                                </pre>
                              </div>
                            </div>

                            {/* Step 2: Primary References */}
                            <div>
                              <h4 className="font-medium mb-2 text-gray-100">2. Extracting Primary References</h4>
                              <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="mb-4">
                                  <h5 className="font-medium text-sm mb-2 text-gray-100">Extraction Criteria:</h5>
                                  <ul className="list-disc pl-6 text-gray-300 space-y-1">
                                    <li>Reference is relied on more heavily than average</li>
                                    <li>Appears in multiple grounds</li>
                                    <li>Higher citation frequency</li>
                                    <li>Critical to petitioner's case</li>
                                  </ul>
                                </div>

                                <div>
                                  <h5 className="font-medium text-sm mb-2 text-gray-100">Sample Results:</h5>
                                  <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-700">
                                      <thead className="bg-gray-800">
                                        <tr>
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                            Proceeding Number
                                          </th>
                                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
                                            Primary Reference
                                          </th>
                                        </tr>
                                      </thead>
                                      <tbody className="bg-gray-900 divide-y divide-gray-800">
                                        {[
                                          { proceeding: 'IPR2020-00644', reference: '(DeVries, US4058644)' },
                                          { proceeding: 'IPR2017-00787', reference: '(Jones, US6952645)' },
                                          { proceeding: 'IPR2017-00116', reference: '(Lee, US6898726)' },
                                          { proceeding: 'IPR2016-00847', reference: '(Lambrecht, US5682484)' },
                                          { proceeding: 'IPR2015-01291', reference: '(Sharrah, US5871272)' }
                                        ].map((row, idx) => (
                                          <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-900'}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                              {row.proceeding}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                              {row.reference}
                                            </td>
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Algorithmic Approach Section */}
                  <div className="mb-12" data-aos="fade-up" data-aos-delay="150">
                    <h2 className="text-3xl font-bold mb-6 text-gray-100">
                      Algorithmic Approach
                    </h2>
                    
                    {/* Algorithm Description */}
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="space-y-6">
                        {/* Overview */}
                        <div className="border-l-4 border-gray-100 pl-4">
                          <h3 className="font-semibold mb-3 text-gray-100">Algorithm</h3>
                          <div className="space-y-4 text-gray-300">
                            <p>
                              We evaluate our "one-shot" search system, which takes a patent number and returns ranked references without iteration.
                              <span className="text-sm italic block mt-1">
                                Note: Our production system is iterative, so this evaluation represents a performance floor.
                              </span>
                            </p>

                            <div>
                              <p className="font-semibold mb-2 text-gray-100">Three-Stage Search Process:</p>
                              <ol className="space-y-3 pl-6">
                                <li>
                                  <span className="font-medium text-gray-100">I. Coarse Grain Search</span>
                                  <p className="ml-4 text-gray-300">
                                    Uses custom models to generate boolean queries for searching our custom index
                                  </p>
                                  <p className="ml-4 text-gray-300">
                                    In this experiment, searches the 11,152,246 US grants
                                  </p>
                                </li>
                                
                                <li>
                                  <span className="font-medium text-gray-100">II. Quick Read Re-ranking</span>
                                  <p className="ml-4 text-gray-300">
                                    Selects 10⁴-10⁵ results from coarse search for initial re-ranking
                                  </p>
                                </li>
                                
                                <li>
                                  <span className="font-medium text-gray-100">III. Deep Dive Analysis</span>
                                  <p className="ml-4 text-gray-300">
                                    Iteratively searches results from the quick read stage until full coverage of the claim is found
                                  </p>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>

                        {/* Experimental Setup */}
                        <div className="border-l-4 border-gray-100 pl-4">
                          <h3 className="font-semibold mb-3 text-gray-100">Experimental Setup</h3>
                          <div className="space-y-4 text-gray-300">
                            <div>
                              <p className="font-semibold mb-2 text-gray-100">Scope:</p>
                              <ul className="list-disc pl-6">
                                <li>Goal: Surface relevant references within human-reviewable result set</li>
                                <li>Dataset: 11,152,246 US grants
                                  <span className="text-sm block ml-4 mt-1">
                                  </span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-semibold mb-2 text-gray-100">Evaluation Parameters:</p>
                              <ul className="list-disc pl-6">
                                <li>Sampling methodology:
                                  <ul className="list-circle pl-6 mt-1">
                                    <li>No patent type restrictions</li>
                                    <li>Random sampling of single-claim grounds</li>
                                    <li>One claim per search due to computational costs</li>
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Metrics Section */}
                  <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
                    <h2 className="text-3xl font-bold mb-6 text-gray-100">
                      Metrics
                    </h2>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="space-y-8">
                        <div className="border-l-4 border-gray-100 pl-4">
                          <h3 className="font-semibold mb-3 text-gray-100">Recall Metrics</h3>
                          <p className="text-gray-300">
                            We measure recall at K using two different approaches:
                          </p>
                          <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-300">
                            <li>
                              <span className="font-semibold text-gray-100">Mean Average Recall at K:</span>
                              <ul className="list-circle pl-6 mt-1">
                                <li>Calculates what percentage of all references for a ground appear in our top K results</li>
                                <li>Averages this percentage across the entire sample</li>
                              </ul>
                            </li>
                            <li>
                              <span className="font-semibold text-gray-100">"At Least One" Recall at K:</span>
                              <ul className="list-circle pl-6 mt-1">
                                <li>Binary measure: did we find at least one reference from the ground in our top K results?</li>
                                <li>Averages this yes/no outcome across the entire sample</li>
                              </ul>
                            </li>
                          </ul>
                        </div>

                        <div className="border-l-4 border-gray-100 pl-4">
                          <h3 className="font-semibold mb-3 text-gray-100">Dataset Filtering Methodology</h3>
                          <div className="space-y-4 text-gray-300">
                            <div>
                              <p className="font-semibold mb-2 text-gray-100">Initial Challenge:</p>
                              <ul className="list-disc pl-6">
                                <li>Raw measurement of mean average recall proved imperfect</li>
                                <li>Some references were significantly more relevant to claims than others</li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-semibold mb-2 text-gray-100">Example Problem:</p>
                              <ul className="list-disc pl-6">
                                <li>For dependent claims, references citing parent claims are always included in the ground</li>
                                <li>These parent claim references are less relevant but count equally as ground truth in the dataset</li>
                                <li>Our production system will surface the reference for the parent claim, but when evaluating for the dependent claim, we want to filter it out</li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-semibold mb-2 text-gray-100">Solution - Filtering to Isolate References:</p>
                              <ol className="list-decimal pl-6 space-y-2">
                                <li>
                                  <span className="font-semibold text-gray-100">First Filter Set (102 Only):</span>
                                  <ul className="list-disc pl-6 mt-1">
                                    <li>Single claim grounds</li>
                                    <li>Single reference grounds</li>
                                    <li>102 grounds only</li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="font-semibold text-gray-100">Second Filter Set (Primary References):</span>
                                  <ul className="list-disc pl-6 mt-1">
                                    <li>Grounds including primary reference</li>
                                    <li>Independent claim 1 only</li>
                                  </ul>
                                </li>
                                <li>
                                  <span className="font-semibold text-gray-100">Metric Equivalence:</span>
                                  <ul className="list-disc pl-6 mt-1">
                                    <li>"At Least One" = Mean Average Recall because the dataset is filtered for single-reference grounds</li>
                                  </ul>
                                </li>
                              </ol>
                            </div>

                            <div>
                              <p className="font-semibold mb-2 text-gray-100">Other Considered Approaches:</p>
                              <ul className="list-disc pl-6">
                                <li>Modal reference across all grounds</li>
                                <li>Single claim with multiple references</li>
                                <li>Single reference with multiple claims</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div className="mb-12" data-aos="fade-up" data-aos-delay="250">
                    <h2 className="text-3xl font-bold mb-6 text-gray-100">
                      Results
                    </h2>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="space-y-8">
                        <div className="border-l-4 border-gray-100 pl-4">
                          <h3 className="font-semibold mb-3 text-gray-100">102 Only Dataset</h3>
                          <div className="mt-8">
                            <iframe 
                              src="/benchmarks/102_first_stage_search.html"
                              className="w-full h-[500px] border-0"
                              title="102/SingleClaim/SingleReference Search Results"
                            />
                          </div>
                          
                          <div className="mt-8">
                            <iframe 
                              src="/benchmarks/102_second_stage_search.html"
                              className="w-full h-[500px] border-0"
                              title="102/SingleClaim/SingleReference Second Stage Results"
                            />
                          </div>
                        </div>

                        <div className="border-l-4 border-gray-100 pl-4">
                          <h3 className="font-semibold mb-3 text-gray-100">Primary References Dataset</h3>
                          <div className="mt-8">
                            <iframe 
                              src="/benchmarks/primary_ref_first_stage_search.html"
                              className="w-full h-[500px] border-0"
                              title="Primary Reference First Stage Results"
                            />
                          </div>
                          
                          <div className="mt-8">
                            <iframe 
                              src="/benchmarks/rank_fusion_second_stage_search_primary_refs_6500.html"
                              className="w-full h-[500px] border-0"
                              title="Primary Reference Second Stage Results"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Conclusion Section */}
                  <div className="mb-12" data-aos="fade-up" data-aos-delay="300">
                    <h2 className="text-3xl font-bold mb-6 text-gray-100">
                      Conclusion
                    </h2>
                    <div className="bg-gray-800 rounded-lg p-6">
                      <div className="border-l-4 border-gray-100 pl-4">
                        <div className="space-y-4 text-gray-300">
                          <div>
                            <h3 className="font-semibold mb-3 text-gray-100">Key Findings</h3>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>77% recall at K=1300 for primary references</li>
                              <li>77% recall at K=1400 for 102 only</li>
                              <li>Difficult evaluation set means this is a floor on real-world performance
                                <ul className="list-circle pl-6 mt-1">
                                  <li>Only testing against references that were instituted </li>
                                  <li>Real searches include many more obvious matches. We don't consider extended family as matches</li>
                                </ul>
                              </li>
                              <li>
                                High precision in the final stage allows us to be confident without incurring the high cost of conducting a final stage experiment
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold mb-3 text-gray-100">Future Work</h3>
                            <ul className="list-disc pl-6 space-y-2">
                              <li>Split evaluations by CPC code. Our system performs better on software patents than semiconductor patents, for example</li>
                              <li>Evaluate against non-US patents</li>
                              <li>Establish final stage guarantees</li>
                            </ul>
                          </div>
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