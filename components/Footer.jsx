import { Facebook, Instagram, YouTube } from "@material-ui/icons";

const Footer = () => {
    return (
        <div className="nav-bot bg-[#F7F6F2]">
            <hr className='bg-[#00C1D4] h-0.5 rounded-full border-none outline-none' />
            <div className='flex flex-col md:flex-row md:justify-between content-center py-8 px-10'>
                <div className="flex flex-row justify-evenly md:justify-between my-0 mx-1">
                    <div className='hover:text-[#00C1D4] text-gray-400 cursor-pointer hover:animate-bounce mr-4'>
                        <Facebook />
                        <p className='inline-flex ml-1 text-sm ' >Facebook</p>
                    </div>
                    <div className='hover:text-[#00C1D4] text-gray-400 cursor-pointer hover:animate-bounce mr-4'>
                        <Instagram />
                        <p className='inline-flex ml-1 text-sm ' >Instagram</p>
                    </div>
                    <div className='hover:text-[#00C1D4] text-gray-400 cursor-pointer hover:animate-bounce mr-4'>
                        <YouTube />
                        <p className='inline-flex ml-1 text-sm ' >Youtube</p>
                    </div>
                    {/* <p className='text-sm text-gray-400 hover:text-red-400 mr-2 cursor-pointer'>Facebook</p>
                    <p className='text-sm text-gray-400 hover:text-red-400 mx-2 cursor-pointer'>Instagram</p>
                    <p className='text-sm text-gray-400 hover:text-red-400 mx-2 cursor-pointer'>Linkedin</p>
                    <p className='text-sm text-gray-400 hover:text-red-400 mx-2 cursor-pointer'>Youtube</p> */}
                </div>
                <div className="flex justify-evenly md:justify-end items-center my-auto mt-4 md:mt-0">
                    <p className='text-xs text-gray-400 mx-auto'>
                        © 2021 All rights reserved. Ing. Musa Malik
                    </p>

                </div>
            </div>
        </div>
    )
}

export default Footer;