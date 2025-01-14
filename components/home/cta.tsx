"use client"

import { useState } from 'react'
import { get } from '@/app/utils/network'
import { isValidPatentNumber } from '@/app/utils/patentNumber'


export default function CTA() {
  const [claimNumber, setClaimNumber] = useState('')
  const [patentNumber, setPatentNumber] = useState('')
  const [email, setEmail] = useState('')
  const [claims, setClaims] = useState<any[]>([])
  const [isLoadingClaims, setIsLoadingClaims] = useState(false)  // For fetching claims
  const [isSending, setIsSending] = useState(false)  // For sending email

  const fetchPatentClaims = async (patentNum: string) => {
    try {
      setIsLoadingClaims(true)  // Changed from setIsLoading
      const response = await get('get-patent', { patent_number: patentNum })
      const patent = response.data
      if (patent?.structured_claims) {
        setClaims(patent.structured_claims)
      }
    } catch (error) {
      console.error('Error fetching patent claims:', error)
      setClaims([])
    } finally {
      setIsLoadingClaims(false)  // Changed from setIsLoading
    }
  }

  // Update patent input handler with validation
  const handlePatentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setPatentNumber(newValue)
    
    // Only fetch if it's a valid patent number
    if (newValue.length > 0 && isValidPatentNumber(newValue)) {
      fetchPatentClaims(newValue)
    } else {
      setClaims([])
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!patentNumber || !claimNumber || !email) {
      return
    }

    try {
      setIsSending(true)  // Changed from setIsLoading
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'josh@trycareful.ai',
          from: email,
          subject: `Patent ${patentNumber} - Claim ${claimNumber}`,
          patentNumber,
          claimNumber,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to send email')
      }

      setPatentNumber('')
      setClaimNumber('')
      setEmail('')
      setClaims([])
    } catch (error) {
      console.error('Error sending email:', error)
    } finally {
      setIsSending(false)  // Changed from setIsLoading
    }
  }

  return (
    <section id="cta" className="relative flex-1 before:absolute before:inset-0 before:h-80 before:pointer-events-none bg-zinc-900 bg-gradient-to-t from-zinc-900 before:-z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* First section */}
        <div className="text-center py-12" data-aos="fade-up">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 flex flex-col items-center">
            <span className="animate-[fadeIn_0.5s_ease-in]">
              Search-firm quality results,
            </span>
            <span className="animate-[fadeIn_0.5s_ease-in_0.5s] opacity-0 [animation-fill-mode:forwards]">
              associate quality charts,
            </span>
            <span className="animate-[fadeIn_0.5s_ease-in_1s] opacity-0 [animation-fill-mode:forwards] text-emerald-400 font-extrabold">
              in less than 24 hours
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/70">
            Your first search is on us
          </p>
        </div>

        {/* Second section - Form */}
        <div className="max-w-xl mx-auto pb-12" data-aos="fade-up" data-aos-delay="200">
          <form className="space-y-4 max-w-sm mx-auto" onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <input
                type="text"
                value={patentNumber}
                onChange={handlePatentChange}
                placeholder="Enter patent number"
                className={`w-64 px-4 py-3 rounded-lg bg-zinc-800 border ${
                  patentNumber && !isValidPatentNumber(patentNumber)
                    ? 'border-red-500'
                    : 'border-zinc-700'
                } text-white placeholder-zinc-400 focus:outline-none focus:border-white/40`}
                required
              />
            </div>
            <div className="flex justify-center">
              <select
                value={claimNumber}
                onChange={(e) => setClaimNumber(e.target.value)}
                className={`w-64 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 ${
                  !claimNumber ? 'text-zinc-400' : 'text-white'
                } focus:outline-none focus:border-white/40`}
              >
                <option value="">Select claim</option>
                {isLoadingClaims ? (
                  <option value="" disabled>Loading claims...</option>
                ) : claims.length > 0 ? (
                  claims.map((claim) => (
                    <option key={claim.claims_object.number} value={claim.claims_object.number}>
                      Claim {claim.claims_object.number}
                    </option>
                  ))
                ) : null}
              </select>
            </div>
            <div className="flex justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-64 px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white placeholder-zinc-400 focus:outline-none focus:border-white/40"
                required
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSending || !patentNumber || !claimNumber || !email}
                className="w-64 px-4 py-3 rounded-lg bg-white text-zinc-900 font-semibold hover:bg-white/90 transition-colors disabled:opacity-50"
              >
                {isSending ? 'Sending...' : 'Get Started'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
