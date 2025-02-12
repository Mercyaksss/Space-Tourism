import { useState, useEffect } from 'react';
import './technology.scss';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function Technology({ technology }) {
  const [selectedtech, setSelectedtech] = useState(0);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const { name, images, description } = technology[selectedtech];

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const imageSrc =
    screenWidth > 1115 || screenWidth < 700 ? images.portrait : images.landscape;

  return (
    <div className='technology main'>
      <div className='technology-main'>
        <p className='preset-5 header'><span className='span'>03</span>SPACE LAUNCH 101</p>
        <div className='technology-content'>
          <div className='technology-content-left'>
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className={`number preset-4 ${selectedtech === index ? 'active' : ''}`}
                onClick={() => setSelectedtech(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {index + 1}
              </motion.div>
            ))}
          </div>

          <div className='technology-content-middle'>
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedtech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.p className='preset-4'>THE TERMINOLOGY...</motion.p>
                <motion.p className='preset-3'>{name}</motion.p>
                <motion.p className='preset-9'>{description}</motion.p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className='technology-content-right'>
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedtech}
                src={imageSrc}
                alt={name}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

Technology.propTypes = {
  technology: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.shape({
        portrait: PropTypes.string.isRequired,
        landscape: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default Technology;
