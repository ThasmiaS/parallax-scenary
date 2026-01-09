import { motion } from 'framer-motion'

function Contact() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      padding: '3rem 2rem',
      position: 'relative',
      zIndex: 10
    }}>
      <motion.div
        className="glass-strong"
        style={{
          borderRadius: '2rem',
          padding: '3rem',
          maxWidth: '600px',
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
          Get In Touch
        </h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '0.5rem',
              fontSize: '1rem',
            }}>
              Name
            </label>
            <input
              type="text"
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              placeholder="Your name"
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                e.target.style.background = 'rgba(255, 255, 255, 0.15)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
            />
          </div>
          <div>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '0.5rem',
              fontSize: '1rem',
            }}>
              Email
            </label>
            <input
              type="email"
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              placeholder="your.email@example.com"
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                e.target.style.background = 'rgba(255, 255, 255, 0.15)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
            />
          </div>
          <div>
            <label style={{
              display: 'block',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '0.5rem',
              fontSize: '1rem',
            }}>
              Message
            </label>
            <textarea
              rows={5}
              style={{
                width: '100%',
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                color: 'white',
                fontSize: '1rem',
                outline: 'none',
                resize: 'none',
                transition: 'all 0.3s ease',
                fontFamily: 'inherit',
              }}
              placeholder="Your message"
              onFocus={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)'
                e.target.style.background = 'rgba(255, 255, 255, 0.15)'
              }}
              onBlur={(e) => {
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)'
                e.target.style.background = 'rgba(255, 255, 255, 0.1)'
              }}
            />
          </div>
          <motion.button
            type="submit"
            style={{
              width: '100%',
              padding: '0.75rem 2rem',
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '0.5rem',
              color: 'white',
              fontWeight: '600',
              fontSize: '1rem',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
            whileHover={{ 
              scale: 1.02,
              background: 'rgba(255, 255, 255, 0.3)',
            }}
            whileTap={{ scale: 0.98 }}
          >
            Send Message
          </motion.button>
        </form>
        <div style={{
          marginTop: '2rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
        }}>
          <a href="#" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = 'white'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
          >
            LinkedIn
          </a>
          <a href="#" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = 'white'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
          >
            GitHub
          </a>
          <a href="#" style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.color = 'white'}
          onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.8)'}
          >
            Email
          </a>
        </div>
      </motion.div>
    </div>
  )
}

export default Contact
