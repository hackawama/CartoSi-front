import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { removeToken } from './utils/storage';
import AuthContext from './utils/context'
import { FaArrowAltCircleLeft, FaMap, FaNetworkWired, FaBuilding, FaChevronDown, FaLaptop, FaDesktop, FaChevronUp, FaPhoneSquareAlt, FaPhone, FaPhoneAlt, } from 'react-icons/fa';
import { CiRouter } from 'react-icons/ci'
import { AiFillDashboard } from 'react-icons/ai';
import { BsStack } from 'react-icons/bs';
import { SiBuildkite } from 'react-icons/si';
function Layout({ outlet }) {
    const Auth = useContext(AuthContext)
    const handlCick = () => {
        removeToken();
        window.location.reload();
    };
    const location = useLocation()
    const [submenu, setsubmenu] = useState(false)
    const [submenuviews, setsubmenuviews] = useState(false)
    return (
        <>
            <div className='sidebar-container'>

                <div className='sidebar-arrow'>
                    <span className='d-flex align-items-center justify-content-center'>{Auth.strucure}</span>
                    <FaArrowAltCircleLeft size={25} color="grey" />
                </div>
                <div className='sidebar-menu'>
                    {!submenu && <><div className={location.pathname != "/" ? 'sidebar-menu-item' : 'sidebar-menu-item-selected'}  >
                        <AiFillDashboard size={25} color={location.pathname != "/" ? 'grey' : 'white'} />
                        <Link to="/" id='a'>
                            Dashboard
                        </Link>
                    </div>
                        <div className='sidebar-menu-item'>
                            <FaMap size={25} color="grey" />
                            <div className='d-flex justify-content-between align-items-center'>
                                <span>
                                    Views
                                </span>
                                {!submenuviews ? <FaChevronDown onClick={() => setsubmenuviews(!submenuviews)} /> : <FaChevronUp onClick={() => setsubmenuviews(!submenuviews)} />}
                            </div>

                        </div>
                        {
                            submenuviews && <><div className={location.pathname != "/physical" ? 'sidebar-submenu-item' : 'sidebar-submenu-item-selected'} >
                                <FaLaptop size={15} color={location.pathname != "/physical" ? 'grey' : 'white'} />
                                <Link to="/physical" id='a'>
                                    Physical
                                </Link>
                            </div>


                            </>}
                        <div className={location.pathname != "/networks" ? 'sidebar-menu-item' : 'sidebar-menu-item-selected'}>
                            <FaNetworkWired size={25} color={location.pathname != "/networks" ? 'grey' : 'white'} />
                            <Link to="/networks" id='a'>
                                Networks
                            </Link>
                        </div>
                        <div className={location.pathname != "/buildings" ? 'sidebar-menu-item' : 'sidebar-menu-item-selected'}>
                            <FaBuilding size={25} color={location.pathname != "/buildings" ? 'grey' : 'white'} />
                            <Link to="/buildings" id='a'>
                                Buildings
                            </Link>
                        </div>
                        <div className={location.pathname != "/stages" ? 'sidebar-menu-item' : 'sidebar-menu-item-selected'} >
                            <BsStack size={25} color={location.pathname != "/stages" ? 'grey' : 'white'} />
                            <Link to="/stages" id='a'>
                                Stages
                            </Link>
                        </div>
                        <div className={location.pathname != "/rooms" ? 'sidebar-menu-item' : 'sidebar-menu-item-selected'} >
                            <SiBuildkite size={25} color={location.pathname != "/rooms" ? 'grey' : 'white'} />
                            <Link to="/rooms" id='a'>
                                Rooms
                            </Link>
                        </div></>}
                    <div className='sidebar-menu-item'>
                        <FaDesktop size={25} color={'grey'} />
                        <div className='d-flex justify-content-between align-items-center'>
                            <span>
                                Devices
                            </span>
                            {!submenu ? <FaChevronDown onClick={() => setsubmenu(!submenu)} /> : <FaChevronUp onClick={() => setsubmenu(!submenu)} />}
                        </div>
                    </div>
                    {
                        submenu && <><div className={location.pathname != "/computers" ? 'sidebar-submenu-item' : 'sidebar-submenu-item-selected'} >
                            <FaLaptop size={15} color={location.pathname != "/computers" ? 'grey' : 'white'} />
                            <Link to="/computers" id='a'>
                                Computers
                            </Link>
                        </div>
                            <div className={location.pathname != "/switches" ? 'sidebar-submenu-item' : 'sidebar-submenu-item-selected'} >
                                <CiRouter size={15} color={location.pathname != "/switches" ? 'grey' : 'white'} />
                                <Link to="/switches" id='a'>
                                    Switches
                                </Link>
                            </div>
                            <div className={location.pathname != "/phones" ? 'sidebar-submenu-item' : 'sidebar-submenu-item-selected'} >
                                <FaPhoneAlt size={15} color={location.pathname != "/phones" ? 'grey' : 'white'} />
                                <Link to="/phones" id='a'>
                                    Phones
                                </Link>
                            </div>
                        </>
                    }
                </div>
            </div>

            <div className='layout'>

                <div className='layout-container'>
                    {outlet}
                </div>
            </div>
        </>

    )
}

export default Layout