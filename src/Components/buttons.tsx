import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './styles.css'
import React from 'react'



function Buttons() {

    const [optionSelected, setOptionSelected] = useState(0);

    console.log(optionSelected);

    return (
        <div>
            <section className='bottom'>
                <footer>
                    <div className='nav_boxes'>
                        <button onClick={() => setOptionSelected(1)}  className={`svg ${1 == optionSelected ? "active" : ""}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                                <g clip-path="url(#clip0_3_26)">
                                    <path d="M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18ZM12 3L1 9L12 15L21 10.09V17H23V9L12 3Z" fill="#7900D9" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_26">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button onClick={() => setOptionSelected(2)}  className={`svg ${2 == optionSelected ? "active" : ""}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_29)">
                                    <path d="M11 11.6875C12.4942 11.6875 13.8142 12.045 14.8867 12.5125C15.8767 12.9525 16.5 13.9425 16.5 15.015V16.5H5.5V15.0242C5.5 13.9425 6.12333 12.9525 7.11333 12.5217C8.18583 12.045 9.50583 11.6875 11 11.6875ZM3.66667 11.9167C4.675 11.9167 5.5 11.0917 5.5 10.0833C5.5 9.075 4.675 8.25 3.66667 8.25C2.65833 8.25 1.83333 9.075 1.83333 10.0833C1.83333 11.0917 2.65833 11.9167 3.66667 11.9167ZM4.7025 12.925C4.36333 12.87 4.02417 12.8333 3.66667 12.8333C2.75917 12.8333 1.8975 13.0258 1.11833 13.365C0.44 13.6583 0 14.3183 0 15.0608V16.5H4.125V15.0242C4.125 14.2633 4.33583 13.5483 4.7025 12.925ZM18.3333 11.9167C19.3417 11.9167 20.1667 11.0917 20.1667 10.0833C20.1667 9.075 19.3417 8.25 18.3333 8.25C17.325 8.25 16.5 9.075 16.5 10.0833C16.5 11.0917 17.325 11.9167 18.3333 11.9167ZM22 15.0608C22 14.3183 21.56 13.6583 20.8817 13.365C20.1025 13.0258 19.2408 12.8333 18.3333 12.8333C17.9758 12.8333 17.6367 12.87 17.2975 12.925C17.6642 13.5483 17.875 14.2633 17.875 15.0242V16.5H22V15.0608ZM11 5.5C12.5217 5.5 13.75 6.72833 13.75 8.25C13.75 9.77167 12.5217 11 11 11C9.47833 11 8.25 9.77167 8.25 8.25C8.25 6.72833 9.47833 5.5 11 5.5Z" fill="#7900D9" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_29">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                        <button onClick={() => setOptionSelected(3)}  className={`svg ${3 == optionSelected ? "active" : ""}`}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_3_33)">
                                    <path d="M16.5 1.83337H5.5C4.49166 1.83337 3.66666 2.65837 3.66666 3.66671V18.3334C3.66666 19.3417 4.49166 20.1667 5.5 20.1667H16.5C17.5083 20.1667 18.3333 19.3417 18.3333 18.3334V3.66671C18.3333 2.65837 17.5083 1.83337 16.5 1.83337ZM5.5 3.66671H10.0833V11L7.79166 9.62504L5.5 11V3.66671Z" fill="#7900D9" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3_33">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </div>
                </footer>
            </section>
        </div>
    )
}

export default Buttons