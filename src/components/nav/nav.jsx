import './nav.scss';
import logo from '/assets/shared/logo.svg';
import menu from '/assets/shared/menu.svg';
import Togglemenu from './togglemenu';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

function Nav() {
  const navlinks = [
    { sn: '00', link: 'HOME', to: '/' },
    { sn: '01', link: 'DESTINATION', to: '/destination' },
    { sn: '02', link: 'CREW', to: '/crew' },
    { sn: '03', link: 'TECHNOLOGY', to: '/technology' }
  ];

  const location = useLocation(); 
  const [ismenuactive, setIsmenuactive] = useState(false);
  const [activeLink, setActiveLink] = useState('HOME'); 

  useEffect(() => {
    const currentPath = location.pathname;
    const activeNav = navlinks.find(link => link.to === currentPath);
    setActiveLink(activeNav ? activeNav.link : 'HOME');
  }, [location.pathname]); 

  function handletogglemenu() {
    setIsmenuactive(true);
  }

  return (
    <nav>
      <img src={logo} className='logo' />
      <div className='line background'></div>
      <ul className='background preset-8 nav-links'>
        {navlinks.map((link) => (
          <Link to={link.to} key={link.link} onClick={() => setActiveLink(link.link)}>
            <li className={`nav-li ${activeLink === link.link ? 'active' : ''}`}>
              <span>{link.sn}</span>{link.link}
            </li>
          </Link>
        ))}
        <img src={menu} className={`menu ${ismenuactive ? 'hidden' : ''}`} onClick={handletogglemenu} />
      </ul>

      {ismenuactive && <Togglemenu navlinks={navlinks} ismenuactive={ismenuactive} setIsmenuactive={setIsmenuactive} />}
    </nav>
  );
}

Nav.propTypes = {
  activeLink: PropTypes.string,
  setActiveLink: PropTypes.func
};

export default Nav;
