import { motion } from 'framer-motion'

function Resume() {
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
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{
          fontSize: 'clamp(2.5rem, 5vw, 4rem)',
          fontWeight: 'bold',
          color: 'white',
          marginBottom: '2rem',
          textAlign: 'center',
        }}>
          Resume
        </h2>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          color: 'rgba(255, 255, 255, 0.9)',
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: 'white',
            }}>
              Experience
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
              Your professional experience will be displayed here.
            </p>
          </div>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: 'white',
            }}>
              Education
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
              Your educational background will be displayed here.
            </p>
          </div>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '0.5rem',
              color: 'white',
            }}>
              Skills
            </h3>
            <p style={{ fontSize: '1.125rem', lineHeight: '1.6' }}>
              Your technical skills will be displayed here.
            </p>
          </div>
        </div>
        <motion.a
          href="#"
          style={{
            display: 'inline-block',
            marginTop: '2rem',
            padding: '0.75rem 2rem',
            background: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '0.5rem',
            color: 'white',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.3s ease',
          }}
          whileHover={{ 
            scale: 1.05,
            background: 'rgba(255, 255, 255, 0.3)',
          }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Resume
