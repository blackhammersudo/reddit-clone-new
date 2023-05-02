import React from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../Images/logo-removebg-preview.png';
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
        <>

            <div className='navbar bg-dark'>
                {/* logo */}
                <div className='logo '>
                    <img src={logo} alt="logo" className='' />
                </div>
                {/* createpost */}
                <div>
                    <Button variant="primary m-2" size="lg" active>
                        Create post
                    </Button>
                    <Button variant="primary m-2" size="lg" active>
                        Login
                    </Button>
                </div>
            </div>


        </>

    )
}

export default Navbar
