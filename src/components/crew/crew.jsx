import { useState } from 'react';
import './crew.scss';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

function Crew({ crew }) {
  const [selectedMember, setSelectedMember] = useState(0);
  const { name, images, role, bio } = crew[selectedMember];

  return (
    <div className='crew main'>
      <div className='crew-main'>
        <p className='preset-5 header'><span className='span'>02</span>Meet your crew</p>
        <div className='crew-content'>
          <div className='crew-content-left'>
            <div className='left-text'>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.p className='preset-4 role'>{role}</motion.p>
                  <motion.p className='name preset-3'>{name}</motion.p>
                  <motion.p className='bio preset-9'>{bio}</motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='bullet-container'>
              {[0, 1, 2, 3].map((index) => (
                <div
                  key={index}
                  className={`bullet ${selectedMember === index ? 'active' : ''}`}
                  onClick={() => setSelectedMember(index)}
                ></div>
              ))}
            </div>
          </div>
          
          <div className='crew-content-right'>
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedMember}
                src={images.webp}
                alt={name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

Crew.propTypes = {
  crew: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.shape({
        png: PropTypes.string.isRequired,
        webp: PropTypes.string.isRequired,
      }).isRequired,
      role: PropTypes.string.isRequired,
      bio: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};

export default Crew;