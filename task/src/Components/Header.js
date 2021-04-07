import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Brand } from '../svgs/Brand'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import ShuffleRoundedIcon from '@material-ui/icons/ShuffleRounded';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

export const Header = () => {
    return (
        <Navbar expand='lg' variant='light' bg='white' id='navbar' className='px-5 border-bottom'>
            <Container>
                <Navbar.Brand href='/' className='mr-5'>
                    <Brand/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-0'>
                    <span>
                        <FormatAlignRightIcon/>
                    </span>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-5">
                        <Nav.Link href="#home" className='mr-4 d-flex flex-direction-row align-items-center ml-3'>Services</Nav.Link>
                        <Nav.Link href="#home" className='mr-4 d-flex flex-direction-row align-items-center ml-3'>Product</Nav.Link>
                        <Nav.Link href="#home" className='mr-4 d-flex flex-direction-row align-items-center ml-3'>Technology</Nav.Link>
                        <Nav.Link href="#home" className='mr-4 d-flex flex-direction-row align-items-center ml-3'>
                            <div>About</div>
                            <ExpandMoreIcon/>
                        </Nav.Link>
                        <Nav.Link href="#home" className='mr-4 ml-3 d-flex flex-direction-row align-items-center'>
                            <div>Client</div>
                            <ExpandMoreIcon/>
                        </Nav.Link>
                        <Nav.Link href="#home" className=' ml-3 d-flex flex-direction-row align-items-center'>Partner</Nav.Link>
                    </Nav>
                    <Nav className='ml-auto'>
                        <Nav.Link href="#home" className=' ml-3 d-flex flex-direction-row align-items-center'>
                            <HomeOutlinedIcon/>
                        </Nav.Link>
                        <Nav.Link href="#home" className='ml-3 d-flex flex-direction-row align-items-center'>
                            <MailOutlineRoundedIcon/>
                        </Nav.Link>
                        <Nav.Link href="#home" className='ml-3 d-flex flex-direction-row align-items-center'>
                            <ShuffleRoundedIcon/>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
