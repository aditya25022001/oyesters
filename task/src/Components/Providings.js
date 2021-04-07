import React from 'react'
import { Button } from 'react-bootstrap'
import { Product } from '../svgs/Product'
import { Service } from '../svgs/Service'
import { Technology } from '../svgs/Technology'
import '../App.css'

export const Providings = ({index, title, content}) => {
    
    const cliparts = [<Product/>,<Service/>,<Technology/>]
    
    return (
        <div id='providing__main'>
            <div>
                {cliparts[index]}
            </div>
            <div id='providing__heading'>
                {title}
            </div>
            <div id='providing__content'>
                {content}
            </div>
            <div>
                <Button id='providings__button' className='border-0 px-4 py-2'>Read More</Button>
            </div>
        </div>
    )
}
