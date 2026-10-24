import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { 
  Sparkles, 
  RotateCw, 
  RotateCcw, 
  Info, 
  CheckCircle2, 
  Layers,
  Maximize2
} from 'lucide-react';

export default function TechOrbitAnimation({ onSelectSkill }) {
  const mountRef = useRef(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [speedMultiplier, setSpeedMultiplier] = useState(1);

  // Inner ring: Clockwise (6 core skills)
  const innerSkills = [
    { name: "Python", category: "Backend", color: "#38bdf8", status: "Comfortable using", symbol: "Py" },
    { name: "Django", category: "Backend", color: "#34d399", status: "Comfortable using", symbol: "Dj" },
    { name: "React", category: "Frontend", color: "#60a5fa", status: "Comfortable using", symbol: "Re" },
    { name: "JavaScript", category: "Frontend", color: "#facc15", status: "Comfortable using", symbol: "JS" },
    { name: "PostgreSQL", category: "Database", color: "#818cf8", status: "Comfortable using", symbol: "PG" },
    { name: "Git", category: "Tools", color: "#fb923c", status: "Comfortable using", symbol: "Git" },
  ];

  // Outer ring: Anticlockwise (8 complementary skills)
  const outerSkills = [
    { name: "HTML5", category: "Frontend", color: "#f97316", status: "Comfortable using", symbol: "H5" },
    { name: "CSS3", category: "Frontend", color: "#38bdf8", status: "Comfortable using", symbol: "C3" },
    { name: "Tailwind CSS", category: "Frontend", color: "#2dd4bf", status: "Currently learning", symbol: "TW" },
    { name: "C", category: "CS", color: "#60a5fa", status: "Comfortable using", symbol: "C" },
    { name: "C++", category: "CS", color: "#818cf8", status: "Comfortable using", symbol: "C++" },
    { name: "SQL", category: "Database", color: "#c084fc", status: "Comfortable using", symbol: "SQL" },
    { name: "MongoDB", category: "Database", color: "#4ade80", status: "Currently learning", symbol: "MDB" },
    { name: "Swagger", category: "Tools", color: "#34d399", status: "Currently learning", symbol: "API" },
  ];

  // State to store calculated 2D screen positions for DOM-rendered crisp badges
  const [innerNodes, setInnerNodes] = useState([]);
  const [outerNodes, setOuterNodes] = useState([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let width = container.clientWidth || 480;
    let height = container.clientHeight || 480;

    // Three.js Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.pointerEvents = 'none';
    container.appendChild(renderer.domElement);

    // Radii in 3D units
    const rInner = 135;
    const rOuter = 210;

    // 1. Create Glowing Inner Orbit Ring
    const innerRingGeo = new THREE.BufferGeometry();
    const innerPoints = [];
    for (let i = 0; i <= 100; i++) {
      const theta = (i / 100) * Math.PI * 2;
      innerPoints.push(new THREE.Vector3(Math.cos(theta) * rInner, Math.sin(theta) * rInner, 0));
    }
    innerRingGeo.setFromPoints(innerPoints);
    const innerRingMat = new THREE.LineBasicMaterial({ 
      color: 0x6366f1, 
      transparent: true, 
      opacity: 0.35, 
      blending: THREE.AdditiveBlending 
    });
    const innerRingLine = new THREE.Line(innerRingGeo, innerRingMat);
    scene.add(innerRingLine);

    // 2. Create Glowing Outer Orbit Ring
    const outerRingGeo = new THREE.BufferGeometry();
    const outerPoints = [];
    for (let i = 0; i <= 100; i++) {
      const theta = (i / 100) * Math.PI * 2;
      outerPoints.push(new THREE.Vector3(Math.cos(theta) * rOuter, Math.sin(theta) * rOuter, 0));
    }
    outerRingGeo.setFromPoints(outerPoints);
    const outerRingMat = new THREE.LineBasicMaterial({ 
      color: 0x38bdf8, 
      transparent: true, 
      opacity: 0.25, 
      blending: THREE.AdditiveBlending 
    });
    const outerRingLine = new THREE.Line(outerRingGeo, outerRingMat);
    scene.add(outerRingLine);

    // 3. Three.js Ambient Particle Dust
    const particleCount = 120;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x818cf8);
    const c2 = new THREE.Color(0x38bdf8);

    for (let i = 0; i < particleCount; i++) {
      const radius = 60 + Math.random() * 200;
      const angle = Math.random() * Math.PI * 2;
      const z = (Math.random() - 0.5) * 80;

      positions[i * 3] = Math.cos(angle) * radius;
      positions[i * 3 + 1] = Math.sin(angle) * radius;
      positions[i * 3 + 2] = z;

      const mixedColor = Math.random() > 0.5 ? c1 : c2;
      colors[i * 3] = mixedColor.r;
      colors[i * 3 + 1] = mixedColor.g;
      colors[i * 3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 3,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Mouse tracking for subtle tilt
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = x * 30;
      mouseY = -y * 30;
    };
    container.addEventListener('mousemove', handleMouseMove);

    // Animation Loop
    let animationFrameId;
    let clock = new THREE.Clock();
    let currentAngleInner = 0;
    let currentAngleOuter = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      
      if (!isPaused) {
        // Inner rotates CLOCKWISE (negative angle decrement)
        currentAngleInner -= delta * 0.45 * speedMultiplier;
        // Outer rotates ANTICLOCKWISE (positive angle increment)
        currentAngleOuter += delta * 0.35 * speedMultiplier;
      }

      // Parallax camera lerp
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (mouseY - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);

      // Rotate particle dust
      particleSystem.rotation.z += 0.001;

      // Project 3D positions to 2D container space
      const halfW = width / 2;
      const halfH = height / 2;

      // Calculate Inner Ring Nodes
      const calculatedInner = innerSkills.map((skill, index) => {
        const offset = (index / innerSkills.length) * Math.PI * 2;
        const totalTheta = currentAngleInner + offset;
        const x3d = Math.cos(totalTheta) * rInner;
        const y3d = Math.sin(totalTheta) * rInner;
        const z3d = 0;

        // Project
        const vector = new THREE.Vector3(x3d, y3d, z3d);
        vector.project(camera);

        const x2d = (vector.x * halfW) + halfW;
        const y2d = -(vector.y * halfH) + halfH;

        return {
          ...skill,
          x: x2d,
          y: y2d,
          depth: vector.z
        };
      });

      // Calculate Outer Ring Nodes
      const calculatedOuter = outerSkills.map((skill, index) => {
        const offset = (index / outerSkills.length) * Math.PI * 2;
        const totalTheta = currentAngleOuter + offset;
        const x3d = Math.cos(totalTheta) * rOuter;
        const y3d = Math.sin(totalTheta) * rOuter;
        const z3d = 0;

        // Project
        const vector = new THREE.Vector3(x3d, y3d, z3d);
        vector.project(camera);

        const x2d = (vector.x * halfW) + halfW;
        const y2d = -(vector.y * halfH) + halfH;

        return {
          ...skill,
          x: x2d,
          y: y2d,
          depth: vector.z
        };
      });

      setInnerNodes(calculatedInner);
      setOuterNodes(calculatedOuter);

      renderer.render(scene, camera);
    };

    animate();

    // Resize observer
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || 480;
      height = container.clientHeight || 480;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousemove', handleMouseMove);
      resizeObserver.disconnect();
      if (renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      innerRingGeo.dispose();
      innerRingMat.dispose();
      outerRingGeo.dispose();
      outerRingMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, [isPaused, speedMultiplier]);

  return (
    <div className="relative w-full max-w-[520px] aspect-square mx-auto flex items-center justify-center select-none">
      
      {/* Three.js Canvas Container */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 w-full h-full overflow-hidden"
      />

      {/* Orbit Direction Indicators Header (Desktop & Mobile) */}
      <div className="absolute top-2 left-0 right-0 flex items-center justify-between px-3 text-[11px] font-mono z-30 pointer-events-none">
        <span className="inline-flex items-center gap-1 text-indigo-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-indigo-500/20 backdrop-blur-sm">
          <RotateCw className="w-3 h-3 text-indigo-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Inner Orbit: Clockwise</span>
        </span>
        <span className="inline-flex items-center gap-1 text-cyan-400 bg-slate-900/80 px-2.5 py-1 rounded-full border border-cyan-500/20 backdrop-blur-sm">
          <RotateCcw className="w-3 h-3 text-cyan-400 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }} />
          <span>Outer Orbit: Anticlockwise</span>
        </span>
      </div>

      {/* CENTER POINT: Shamima Shammi's Portrait Avatar */}
      <div className="relative z-20 flex flex-col items-center justify-center pointer-events-auto group">
        <div className="relative p-1.5 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-400 shadow-[0_0_50px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_70px_rgba(56,189,248,0.6)] transition-all duration-300">
          <img 
            src="/assets/avatar.jpg" 
            alt="Shamima Shammi - Center of Technology Orbit" 
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-[#090d16]"
            loading="eager"
          />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded-full bg-indigo-950 border border-indigo-500 text-[10px] font-mono text-indigo-200 whitespace-nowrap shadow-md">
            Shamima Shammi
          </div>
        </div>
      </div>

      {/* INNER ORBIT NODES (Clockwise, 6 core skills) */}
      {innerNodes.map((node, idx) => (
        <button
          key={`inner-${node.name}-${idx}`}
          style={{
            position: 'absolute',
            left: `${node.x}px`,
            top: `${node.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 25
          }}
          onMouseEnter={() => setHoveredSkill(node)}
          onMouseLeave={() => setHoveredSkill(null)}
          onClick={() => onSelectSkill?.(node.name)}
          className="group relative flex items-center justify-center p-2 rounded-xl bg-slate-900/95 border border-indigo-500/40 hover:border-indigo-400 shadow-lg shadow-indigo-950 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
          title={`${node.name} (${node.category}) - Clockwise`}
          aria-label={`${node.name} skill node`}
        >
          <span 
            className="font-mono font-bold text-xs" 
            style={{ color: node.color }}
          >
            {node.symbol}
          </span>
          <span className="sr-only">{node.name}</span>
          
          {/* Subtle pulse ring on node */}
          <span className="absolute -inset-1 rounded-xl bg-indigo-500/10 -z-10 group-hover:bg-indigo-500/30 transition-colors" />
        </button>
      ))}

      {/* OUTER ORBIT NODES (Anticlockwise, 8 skills) */}
      {outerNodes.map((node, idx) => (
        <button
          key={`outer-${node.name}-${idx}`}
          style={{
            position: 'absolute',
            left: `${node.x}px`,
            top: `${node.y}px`,
            transform: 'translate(-50%, -50%)',
            zIndex: 24
          }}
          onMouseEnter={() => setHoveredSkill(node)}
          onMouseLeave={() => setHoveredSkill(null)}
          onClick={() => onSelectSkill?.(node.name)}
          className="group relative flex items-center justify-center px-2 py-1.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 hover:border-cyan-400 shadow-md shadow-cyan-950 hover:scale-125 transition-transform cursor-pointer focus:outline-none"
          title={`${node.name} (${node.category}) - Anticlockwise`}
          aria-label={`${node.name} skill node`}
        >
          <span 
            className="font-mono font-semibold text-[11px]" 
            style={{ color: node.color }}
          >
            {node.symbol}
          </span>
          <span className="sr-only">{node.name}</span>
          
          {/* Subtle glow */}
          <span className="absolute -inset-0.5 rounded-lg bg-cyan-500/10 -z-10 group-hover:bg-cyan-500/30 transition-colors" />
        </button>
      ))}

      {/* Interactive Tooltip Card for Hovered Skill */}
      {hoveredSkill && (
        <div 
          className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 px-4 py-2 rounded-xl bg-slate-900/95 border border-indigo-500/60 shadow-2xl backdrop-blur-md flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2 duration-150"
          role="tooltip"
        >
          <span 
            className="w-3 h-3 rounded-full" 
            style={{ backgroundColor: hoveredSkill.color }} 
          />
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white">{hoveredSkill.name}</span>
              <span className="text-[10px] font-mono text-slate-400">[{hoveredSkill.category}]</span>
            </div>
            <span className="text-[10px] text-emerald-400 block font-medium">
              {hoveredSkill.status}
            </span>
          </div>
        </div>
      )}

      {/* Orbit Play / Pause & Speed Controls (Bottom Left / Right) */}
      <div className="absolute bottom-2 left-2 z-30 flex items-center gap-1.5 bg-slate-900/80 px-2 py-1 rounded-lg border border-slate-800 backdrop-blur-sm text-[11px]">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-slate-300 hover:text-white px-1.5 py-0.5 rounded bg-slate-800 text-[10px] font-mono cursor-pointer"
        >
          {isPaused ? "▶ Resume" : "⏸ Pause"}
        </button>
        <button
          onClick={() => setSpeedMultiplier(s => s === 1 ? 1.75 : s === 1.75 ? 0.5 : 1)}
          className="text-indigo-400 hover:text-indigo-300 px-1 py-0.5 text-[10px] font-mono cursor-pointer"
        >
          {speedMultiplier}x Speed
        </button>
      </div>

    </div>
  );
}
