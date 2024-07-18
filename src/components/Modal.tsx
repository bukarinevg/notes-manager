'use client'

import { useState } from "react";

export default function Modal({modalStatus = false, children, title, setModal}: {
    modalStatus: boolean,
    children: React.ReactNode,
    title?: string,
    setModal: (status: boolean) => void
}) {


    return (
    <div 
        id="#contact-modal" 
        className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center ${modalStatus ? 'block' : 'hidden'}`}
        onClick={() => setModal(false)}
        
    >
        <div onClick={(e) => e.stopPropagation()}  className="modal-content bg-lightSecondary p-4 opacity-90 rounded text-darkPrimary">
            <div className="flex justify-between">
                <h2>{title ?? 'Modal'}</h2>
                <button onClick={() => setModal(false)} className="text-red-500  cursor-pointer">X</button>
            </div>

            <div className="border-b-2 text-darkSecondary mt-2"></div>
            <div className="mt-2">
                {children}
            </div>

        </div>
    </div>
    );
}