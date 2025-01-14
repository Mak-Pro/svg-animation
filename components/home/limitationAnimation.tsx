'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

function TetrahedronAnimation({ highlightIndex }: { highlightIndex: number }) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    renderer?: THREE.WebGLRenderer;
    frameId?: number;
  }>({})

  useEffect(() => {
    if (!mountRef.current) return

    // Clear any existing canvas first
    while (mountRef.current.firstChild) {
      mountRef.current.removeChild(mountRef.current.firstChild)
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    })
    
    renderer.setSize(192, 192)
    renderer.setClearColor(0x000000, 0)
    mountRef.current.appendChild(renderer.domElement)
    
    sceneRef.current.renderer = renderer

    // Create geometry
    const vertices = [
      new THREE.Vector3(0, 2, 0),      // Top
      new THREE.Vector3(-1.7, 0, -1),  // Middle triangle
      new THREE.Vector3(1.7, 0, -1),
      new THREE.Vector3(0, 0, 2),
      new THREE.Vector3(0, -2, 0),     // Bottom
    ]

    // Define which edges should be visible for each highlight index
    const edgeVisibility = [
      [[0, 1]], // 0: first edge and two vertices
      [[0, 1], [0, 2], [1, 2]], // 1: second edge + connecting edge
      [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1]], // 2: third vertex + all middle edges
      [[0, 1], [0, 2], [0, 3], [1, 2], [2, 3], [3, 1], [4, 1], [4, 2], [4, 3]], // 3: all edges
    ]

    // Create spheres with transparent materials
    const sphereGeometry = new THREE.SphereGeometry(0.15)
    const sphereMaterials = vertices.map(() => 
      new THREE.MeshBasicMaterial({ 
        color: 0x3b82f6, 
        transparent: true, 
        opacity: 0 
      })
    )
    
    const spheres = vertices.map((pos, index) => {
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterials[index])
      sphere.position.copy(pos)
      return sphere
    })

    // Create edges with transparent material
    const edgeMaterial = new THREE.LineBasicMaterial({ 
      color: 0x3b82f6,
      transparent: true,
      opacity: 0
    })

    // Create line segments for each possible edge
    const allEdges = edgeVisibility[3] // Get all possible edges
    const edgeObjects = allEdges.map(([start, end]) => {
      const geometry = new THREE.BufferGeometry().setFromPoints([
        vertices[start],
        vertices[end]
      ])
      const line = new THREE.LineSegments(geometry, edgeMaterial.clone())
      line.visible = false
      return { line, start, end }
    })

    // Add everything to scene
    const group = new THREE.Group()
    edgeObjects.forEach(({ line }) => group.add(line))
    spheres.forEach(sphere => group.add(sphere))
    scene.add(group)

    // Position camera
    camera.position.z = 6

    // Animation variables
    const fadeInDuration = 0.5 // seconds
    let currentTime = 0
    let previousHighlightIndex = -1

    // Animation loop
    const animate = (time: number) => {
      const deltaTime = time - currentTime
      currentTime = time

      // Handle transitions when highlight index changes
      if (previousHighlightIndex !== highlightIndex) {
        // Update sphere visibilities and start fade-ins
        spheres.forEach((sphere, index) => {
          if ((highlightIndex === 0 && index <= 1) || // Show first two spheres initially
              (highlightIndex > 0 && index <= highlightIndex + 1)) { // Then follow normal progression
            sphere.visible = true
            const material = sphere.material as THREE.MeshBasicMaterial
            material.opacity = Math.min(material.opacity + (deltaTime / 1000) / fadeInDuration, 1)
          }
        })

        // Update edge visibilities and start fade-ins
        const visibleEdges = edgeVisibility[highlightIndex] || []
        edgeObjects.forEach(({ line, start, end }) => {
          const isVisible = visibleEdges.some(([s, e]) => 
            (s === start && e === end) || (s === end && e === start)
          )
          if (isVisible) {
            line.visible = true
            const material = line.material as THREE.LineBasicMaterial
            material.opacity = Math.min(material.opacity + (deltaTime / 1000) / fadeInDuration, 1)
          }
        })

        previousHighlightIndex = highlightIndex
      }

      group.rotation.y += 0.01
      renderer.render(scene, camera)
      sceneRef.current.frameId = requestAnimationFrame(animate)
    }

    sceneRef.current.frameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      if (sceneRef.current.frameId) {
        cancelAnimationFrame(sceneRef.current.frameId)
      }
      if (sceneRef.current.renderer) {
        if (mountRef.current?.contains(sceneRef.current.renderer.domElement)) {
          mountRef.current.removeChild(sceneRef.current.renderer.domElement)
        }
        sceneRef.current.renderer.dispose()
      }
    }
  }, [highlightIndex])

  return (
    <div 
      ref={mountRef} 
      className="ml-8 w-48 h-48 -mt-8 bg-transparent"
    />
  )
}

function DocumentStack({ highlightIndex }: { highlightIndex: number }) {
  return (
    <div className="ml-16 relative">
      {/* Background documents in stack */}
      <div className="absolute -bottom-2 left-2 w-[140px] h-[160px] bg-white border-2 border-gray-800 rotate-2" />
      <div className="absolute -bottom-1 left-1 w-[140px] h-[160px] bg-white border-2 border-gray-800 rotate-1" />
      
      {/* Main document with lines */}
      <div className="relative w-[140px] h-[160px] bg-white border-2 border-gray-800">
        <svg className="w-full h-full" viewBox="0 0 140 160">
          {/* Document lines */}
          {[
            { x1: 20, y: 30, width: 100, indent: false, delay: 0 },
            { x1: 30, y: 50, width: 90, indent: true, delay: 0 }, // Changed delay to 0
            { x1: 30, y: 70, width: 80, indent: true, delay: 2 },
            { x1: 20, y: 90, width: 100, indent: false, delay: 4 },
            { x1: 30, y: 110, width: 90, indent: true, delay: 6 }
          ].map((line, index) => (
            <g key={index}>
              {/* Static gray line */}
              <line
                x1={line.x1}
                y1={line.y}
                x2={line.x1 + line.width}
                y2={line.y}
                className="stroke-gray-300 stroke-2"
              />
              
              {/* Blue highlight overlay */}
              <rect
                x={line.x1}
                y={line.y - 2}
                width={line.width}
                height="4"
                className={`${
                  (highlightIndex === 0 && index <= 1) || // Highlight first two lines initially
                  (highlightIndex > 0 && index <= highlightIndex + 1)
                    ? 'fill-blue-500 opacity-30'
                    : 'fill-transparent'
                } transition-all duration-300`}
              />
            </g>
          ))}
        </svg>
      </div>
    </div>
  )
}

export default function Features01() {
  const [highlightIndex, setHighlightIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex(prev => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-[#ebebeb]">
      <div className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 gap-12">
            {/* Left Half */}
            <div className="flex flex-col gap-12">
              {/* First row */}
              <div className="flex justify-start items-start">
                <p className="font-bold text-2xl sm:text-4xl md:text-5xl">
                  Every Patent.
                </p>
                <DocumentStack highlightIndex={highlightIndex} />
              </div>

              {/* Second row */}
              <div className="flex justify-start items-center">
                <p className="font-bold text-2xl sm:text-4xl md:text-5xl">
                  Every Limitation.
                </p>
                <TetrahedronAnimation highlightIndex={highlightIndex} />
              </div>
            </div>

            {/* Right Half */}
            <div className="flex flex-col justify-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-medium leading-tight">
                Introducing the first
                <br />
                <span className="font-bold">
                  generative AI native
                  <br />
                  patents platform
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}