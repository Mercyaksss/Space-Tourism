import './home.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Home({ setActiveLink }) {  
  return (
    <div className='home main'>
      <div className='home-main main-b'>
        <div className='home-content'>
          <div className='home-content-left'>
            <p className='preset-5 text-1'>SO YOU WANT TO TRAVEL TO <span className='preset-1 text-2'>SPACE</span></p>
            <p className='preset-9 text-3'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
            <div className='home-content-right' >
            <Link to='/destination'>
              <button className=' preset-4' onClick={() => setActiveLink('DESTINATION')}>
                EXPLORE
              </button>
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  setActiveLink: PropTypes.func.isRequired
};

export default Home;
