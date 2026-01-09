import { motion } from 'framer-motion'

function Hero() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div
        className="glass-strong"
        style={{
          borderRadius: '2rem',
          padding: '3rem',
          maxWidth: '900px',
          width: '100%',
          textAlign: 'center',
        }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          style={{
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '1.5rem',
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Thasmia Showmir
        </motion.h1>
        <motion.p
          style={{
            fontSize: 'clamp(1.25rem, 2vw, 1.75rem)',
            color: 'rgba(255, 255, 255, 0.9)',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Data Analytics • Machine Learning • Visualization
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Hero
