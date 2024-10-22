import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col gap-2 p-3 sm:flex-row sm:justify-between items-center px-10 bg-gray-200'>
            <div>
                <h2 className='font-bold  text-4xl sm:text-6xl opacity-90'>EIS'24</h2>
            </div>
            <div className='  hidden  sm:flex items-center text-xl '>
                <p>Privacy Policy |</p>
                <p>Terms & Condition</p>
            </div>
        </div>
    )
}

export default Footer
