import React from 'react';
import PlusIcon from '../../assets/icons/svg/icon-upload.svg';

function UploadBtn() {
    return (
        <button className='btn-upload'>
            <img src={PlusIcon} alt=' + ' className='btn'></img> UPLOAD
        </button>
    )
}


export default UploadBtn;
