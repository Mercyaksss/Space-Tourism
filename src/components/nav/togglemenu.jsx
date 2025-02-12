import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './togglemenu.scss';
import close from '/assets/shared/close.svg';
import { useEffect } from 'react'; 

function Togglemenu({navlinks, ismenuactive, setIsmenuactive}) {
    const location = useLocation();
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 700) {
                setIsmenuactive(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    function handleclosemenu() {
        setIsmenuactive(false);
    }

    return (
        <div className={`screen ${!ismenuactive ? 'hidden' : ''}`}>
            <img src={close} onClick={handleclosemenu} className='close'/>
            <ul className='content'>
                {navlinks.map((link) => (
                    <Link 
                        to={link.to} 
                        key={link.link} 
                        onClick={handleclosemenu}
                    >
                        <li className={`toggle-nav-li preset-8 ${location.pathname === link.to ? 'active' : ''}`}>
                            <span>{link.sn}</span>{link.link}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
}

Togglemenu.propTypes = {
    navlinks: PropTypes.arrayOf(
        PropTypes.shape({
            sn: PropTypes.string.isRequired,
            link: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired 
        })
    ).isRequired,
    setIsmenuactive: PropTypes.func.isRequired,
    ismenuactive: PropTypes.bool.isRequired
};

export default Togglemenu;