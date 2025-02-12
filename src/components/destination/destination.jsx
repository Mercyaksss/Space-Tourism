import { motion } from 'framer-motion'
import { useState } from 'react'
import './destination.scss'
import line from '/assets/shared/Line.png'
import PropTypes from 'prop-types'

function Destination({destinations}) {
 const[planets] = useState(destinations);
 const [selectedDestination, setSelectedDestination] = useState(0);
 const {name, images, description, distance, travel} = planets[selectedDestination];

 return (
   <motion.div 
     className='destination main'
     initial={{ opacity: 0.9 }} 
     animate={{ opacity: 1 }}
     transition={{ duration: 0.5 }}
   >
     <div className='destination-main'>
       <motion.p 
         className='preset-5 header'
         initial={{ y: -20, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ delay: 0.2 }}
       >
         <span>01</span> Pick your destination
       </motion.p>
       <div className='destination-content'>
         <motion.div className='destination-content-left'>
           <motion.img 
             src={images.webp}
             animate={{ rotate: 360 }}
             transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
           />
         </motion.div>
         
         <motion.div 
           className='destination-content-right'
           initial={{ x: 100, opacity: 0 }}
           animate={{ x: 0, opacity: 1 }}
           transition={{ delay: 0.3 }}
         >
           <div className='destination-nav'>
             <ul className='preset-8'>
               <li className={selectedDestination === 0 ? 'active' : ''}  onClick={() => setSelectedDestination(0)}>MOON</li>
               <li className={selectedDestination === 1 ? 'active' : ''}  onClick={() => setSelectedDestination(1)}>MARS</li>
               <li className={selectedDestination === 2 ? 'active' : ''}  onClick={() => setSelectedDestination(2)}>EUROPA</li>
               <li className={selectedDestination === 3 ? 'active' : ''}  onClick={() => setSelectedDestination(3)}>TITAN</li>
             </ul>
           </div>

           <motion.div 
             className='destination-info'
             key={name}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.3 }}
           >
             <p className='preset-2 destination_'>{name}</p>
             <p className='preset-9'>{description}</p>
             <img src={line}/>
             
             <div className='destination-meta'>
               <div>
                 <p className='preset-7'>AVG. DISTANCE</p>
                 <p className='preset-6'>{distance}</p>
               </div>
               <div>
                 <p className='preset-7'>EST. TRAVEL TIME</p>
                 <p className='preset-6'>{travel}</p>
               </div>
             </div>
           </motion.div>
         </motion.div>
       </div>
     </div>
   </motion.div>
 )
}

Destination.propTypes = {
  destinations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      images: PropTypes.shape({
        png: PropTypes.string.isRequired,
        webp: PropTypes.string.isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      distance: PropTypes.string.isRequired,
      travel: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  setActiveLink: PropTypes.func.isRequired
};

export default Destination