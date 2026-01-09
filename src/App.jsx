import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contact from './components/Contact'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import blueWaterImage from '../img/blue-water.jpg'

function App() {
  return (
    <Parallax pages={4.5} style={{ top: '0', left: '0' }}>

      {/* Layer 1: Blue Water (TOPMOST) */}
      <ParallaxLayer
        offset={0}
        speed={0.2}
        style={{
          zIndex: 3, // ✅ always above everything else
          width: '100%',
          height: '400vh',
          backgroundImage: `url(${blueWaterImage})`,
          backgroundSize: '100% auto',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          maskImage:
            'linear-gradient(to bottom, black 0%, black 40%, transparent 70%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 0%, black 40%, transparent 70%, transparent 100%)',
        }}
      />

      {/* Layer 2: Gradient Bridge (HIDES OVERLAP) */}
      <ParallaxLayer
        offset={0}
        speed={0}
        style={{
          zIndex: 2,
          width: '100%',
          height: '500vh',
          background: `
            linear-gradient(to bottom, 
              transparent 0%,
              rgba(135, 206, 250, 0.1) 30%,
              rgba(70, 130, 180, 0.2) 50%,
              rgba(25, 25, 112, 0.4) 65%,
              rgba(0, 0, 80, 0.7) 80%,
              rgba(0, 0, 50, 0.9) 90%,
              rgba(0, 0, 30, 0.85) 100%
            )
          `,
        }}
      />

      {/* CONTENT LAYERS (ABOVE BACKGROUNDS) */}
      <ParallaxLayer offset={0} speed={0.8} style={{ zIndex: 4 }}>
        <Hero />
      </ParallaxLayer>

      <ParallaxLayer offset={1} speed={0.8} style={{ zIndex: 4 }}>
        <Projects />
      </ParallaxLayer>

      <ParallaxLayer offset={2} speed={0.8} style={{ zIndex: 4 }}>
        <Resume />
      </ParallaxLayer>

      <ParallaxLayer offset={3} speed={0.8} style={{ zIndex: 4 }}>
        <Contact />
      </ParallaxLayer>

    </Parallax>
  )
}

export default App
