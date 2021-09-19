import React from 'react'

const Header = ({ right, left }) => {
    return (
        <div>
            <div className="top flex justify-between pt-6"
                data-aos="fade-down"
            >
                <h2 className='top-h2 text-xl md:text-2xl tracking-widest my-8 mx-0'>{right}</h2>
                <p className='top-p mt-1 text-xs tracking-wider text-gray-400'>{left}</p>
            </div>
            <hr style={{
                borderColor: "grey"
            }} />
        </div>
    )
}

export default Header
