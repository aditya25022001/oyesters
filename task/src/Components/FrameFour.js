import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { Brand } from '../svgs/Brand'

export const FrameFour = () => {
    return (
        <div>
            <Container>
                <div id='frame__four'>
                    <div id='frame__four__block__one'>
                        <Brand/>
                        <div>PT Dwidasa Samsara Indonesia</div>
                        <div className='font-weight-light'>Ruko Jalur Sutera 29A No. 53</div>
                        <div className='font-weight-light'>Alam Sutera Serpong, Tangerang 15323</div>
                    </div>
                    <div id='frame__four__block__two'>
                        <div style={{ fontWeight:600 }} id='frame__four__contact'>Contact</div>
                        <div className='font-weight-light'>Phone : +62.21.5314.1135</div>
                        <div className='font-weight-light'>Fax : +62.21.5314.1135</div>
                        <div className='font-weight-light'>Email : community@dwidasa.com</div>
                    </div>
                    <div id='frame__four__block__three'>
                        <div>
                            <Image id='silverlight' src='../images/silverlight.png'/>
                            <Image id='dotnet' src='../images/dotnet.png'/>
                            <Image id='java' src='../images/java.png'/>
                        </div>
                        <div>
                            <Image id='ios' src='../images/ios.png'/>
                            <Image id='android' src='../images/android.png'/>
                            <Image id='blackberry' src='../images/blackberry.png'/>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
