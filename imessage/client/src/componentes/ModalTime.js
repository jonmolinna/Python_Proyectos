import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { Button } from '@material-ui/core';
import './ModalTime.css';
import { toast } from 'react-toastify';

import { useAuthDispatch } from '../context/auth';

const ModalTime = ({ openModal, handleCloseModal }) => {
    const [time, setTime] = useState(0);
    const dispatch = useAuthDispatch();

    const sendTime = () => {
        if(parseInt(time) <= 2) return toast.warning('Ingrese un numero mayor a 2');

        dispatch({
            type: 'SET_TIME',
            payload: parseInt(time)
        });
        handleCloseModal();
        setTime(0);
    };

    return (
        <Modal
            open={openModal}
            className="modalTime"
            onClose={handleCloseModal}
        >
            <div className="modalTime__card">
                <p>Ingrese un numero mayor de 2 segundos para autodestruir el mensaje.</p>
                <input 
                    type="number" 
                    min="2" 
                    value={time}
                    onChange={e => setTime(e.target.value)}
                />
                <div className="modalTime__button">
                    <Button onClick={handleCloseModal}>Cancel</Button>
                    <Button onClick={sendTime}>Ok</Button>
                </div>
            </div>
        </Modal>
    )
}

export default ModalTime;