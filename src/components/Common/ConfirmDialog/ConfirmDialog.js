// import { useState } from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

export default function ConfirmDialog({
    showDialog,
    closeDialog,
    onSave,
    title
}){


    const test = (
        <SweetAlert
            custom
            showCancel
            showCloseButton
            confirmBtnText="Yes"
            cancelBtnText="No"
            confirmBtnBsStyle="primary"
            cancelBtnBsStyle="light"
            customIcon="https://raw.githubusercontent.com/djorg83/react-bootstrap-sweetalert/master/demo/assets/thumbs-up.jpg"
            title={title}
            onConfirm={onSave}
            onCancel={closeDialog}
        >
        
        </SweetAlert>
    );
    
    return (
        showDialog ? test : ''
    );
}