import React from 'react'
import { Container } from 'react-bootstrap'
import { Providings } from './Providings'
import '../App.css'

export const FrameThree = () => {
    return (
        <Container id='container__frame__three'>
            <div id='frame__three'>
                <div id='frame__three__heading'>Product and Service</div>
                <div id='frame__three__providings'>
                    <Providings
                        index={0}
                        title="Our Product"
                        content="Our product is made on the base of our team’s careful research and analyses, ranging from internet based application."
                    />
                    <Providings
                        index={1}
                        title="Our Service"
                        content="DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors."
                    />
                    <Providings
                        index={2}
                        title="Our Technology"
                        content="First JAVA, runs on more than 850 million personal computers worldwide, and on billions of devices worldwide, including mobile and TV devices."
                    />
                </div>
                <div>

                </div>
            </div>
        </Container>
    )
}
