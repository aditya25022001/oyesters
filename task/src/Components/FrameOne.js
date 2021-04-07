import React from 'react'
import { Responsive } from '../svgs/Responsive' 
import { Button, Container } from 'react-bootstrap'

export const FrameOne = () => {
    return (
        <Container id='container__frame__one'>
            <div id='frame__one'>
                <div id='frame__one__content'>
                    <div id='frame__one__line__one'>Making the most of the ever-growing</div>
                    <div id='frame__one__line__two'>Information Technology</div>
                    <div  id='frame__one__line__three'>Managed by a team of professional experts with extensive experience and impressive track records</div>
                    <Button id='frame__one__button' className='border-0 px-4 py-2'>Read More</Button>
                </div>
                <div id='frame__one__image'>
                    <Responsive/>
                </div>
            </div>
        </Container>
    )
}
