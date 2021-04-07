import React from 'react'
import { Office } from '../svgs/Office'
import { Container } from 'react-bootstrap'

export const FrameTwo = () => {
    return (
        <div style={{ backgroundColor:'rgba(246,246,246,1)' }}>
            <Container id='container__frame__two'>
                <div id='frame__two'>
                    <div id='frame__two__image'>
                        <Office/>
                    </div>
                    <div id='frame__two__content'>
                        <div id='frame__two__content__heading'>
                            Welcome to <b>Dwidasa Samsara Indonesia (DSI)</b>
                        </div>
                        <div id='frame__two__content__para__one'>
                            Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span style={{ color:'rgba(238,66,72,1)' }}>DSI</span>’s distinct front-end based application concept.
                        </div>
                        <div id='frame__two__content__para__two'>
                            Managed by a team of professional experts with extensive experience and impressive track records, <span style={{ color:'rgba(238,66,72,1)' }}>DSI</span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
