import React from "react";

const MODAL_STYLES = {
    position : 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(140, 96, 156, 0.62)',
    zIndex:100
}

const OVERLAY_STYLES = {
    position : 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    zIndex:100
}

export default function Modal({open, children, onClose}){
    if(!open) return null
    return (
        <>
            <div style={OVERLAY_STYLES}>
            <div style={MODAL_STYLES}>
                {children}
                <button onClick={onClose}> submit </button>
            </div>
            </div>
        </>
        
    )
}