import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';
import './Footers.css';


const Footers = () => {
    return (
        <MDBFooter className='bg-dark text-center text-white mb-0 footer' id='footer'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/daudi.ted/' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/daudi_ted/' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/ted-daudi-177831194/' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Teddaudi' role='button'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='daudited@gmail.com'>
                    daudited@gmail.com
                </a>
            </div>
        </MDBFooter>
    )
}

export default Footers