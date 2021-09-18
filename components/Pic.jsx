import React from 'react';
import profile from "../assets/mr.jpg";
import Image from "next/image";

const Pic = () => {
    return (
        <div className='h-80 w-80 rounded-full border-2 overflow-hidden'>
            <div className='transition duration-500 ease-in-out hover:scale-125'>
                <Image src={profile} alt="Picture of Developer" width="1080" height="1080" />
            </div>
            {/* <div className="h-64 w-64 bg-hero" 
            // style={{
            //     backgroundImage: `url(${profile})`
            // }} 
            /> */}
        </div>
    )
}

export default Pic;
