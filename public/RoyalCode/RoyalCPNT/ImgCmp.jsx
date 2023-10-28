import React from 'react';
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactModal from 'react-modal';
import Modal from 'react-modal';
import { useFetcher } from 'react-router-dom';
import AuthUser from '../../auth/Authuser';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AliceCarousel from 'react-alice-carousel';
import { useState } from 'react';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const ImgCmp = ({ imageUrl }) => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }



    function closeModal() {
        setIsOpen(false);
    }



    return (
        <div>
            <img style={{ height: "180px",width:"200px" }} onClick={openModal} src={imageUrl} alt='' ></img>
           
            <ReactModal
                isOpen={modalIsOpen}
                contentLabel="Example Modal"
                onRequestClose={closeModal}

                style={{
                    content: {
                        width: "700px", // Set the desired width
                        height: "500px", // Set the desired height
                        top: "50%", // Center vertically
                        left: "50%", // Center horizontally
                        transform: "translate(-50%, -50%)", // Center the modal
                    },
                }}
            >
                <div className='text-center'>
                <button className='btn btn-danger fw-bold' onClick={closeModal}>X</button>
                <br/>
                    <img src={imageUrl} alt='' style={{height:"450px",width:"400px"}}></img>
                </div>
                
            </ReactModal>

        </div>
    );

}

export default ImgCmp;
