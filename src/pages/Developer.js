import React from 'react';
import { FaTimes } from 'react-icons/fa';

const Developer = ({ close }) => {
    return (
        <section className='modal dev'>
            <div className='modal-con dev-con' style={{paddingTop:'5rem'}}>
                <i className='close-icon'>
                    <FaTimes onClick={close} />
                </i>

                <div className='about-content'>
                <iframe src="https://samojeyinka.vercel.app/" height="1000vh" width="100%" title="Iframe Example"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Developer