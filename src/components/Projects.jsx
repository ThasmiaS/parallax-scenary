import { motion } from 'framer-motion'

const projects = [
  {
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard showcasing real-time analytics with advanced visualization techniques.',
    tech: ['Python', 'React', 'D3.js', 'PostgreSQL'],
  },
  {
    title: 'Machine Learning Predictions',
    description: 'Predictive analytics model for forecasting trends using deep learning algorithms.',
    tech: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
  },
  {
    title: 'Business Intelligence Platform',
    description: 'Comprehensive BI solution for data-driven decision making and reporting.',
    tech: ['React', 'Node.js', 'MongoDB', 'Chart.js'],
  },
]

function Projects() {
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
      <div style={{ maxWidth: '1200px', width: '100%' }}>
        <motion.h2
          style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '3rem',
            textAlign: 'center',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Projects
        </motion.h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass"
              style={{
                borderRadius: '1.5rem',
                padding: '2rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 12px 40px 0 rgba(31, 38, 135, 0.5)',
              }}
            >
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: 'white',
                marginBottom: '1rem',
              }}>
                {project.title}
              </h3>
              <p style={{
                color: 'rgba(255, 255, 255, 0.8)',
                marginBottom: '1.5rem',
                lineHeight: '1.6',
              }}>
                {project.description}
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
              }}>
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    style={{
                      padding: '0.5rem 1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '9999px',
                      fontSize: '0.875rem',
                      color: 'rgba(255, 255, 255, 0.9)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
