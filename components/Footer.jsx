
const Footer = () => {
    return (
        <div className="nav-bot bg-gray-800">
            <hr className='bg-[#00C1D4] h-0.5 rounded-full border-none outline-none' />
            <div className="footer flex content-center my-0 mx-3">
                <div className="navbar-bottom my-8 mx-0 grid md:grid-cols-2 justify-evenly items-center content-center px-10">
                    <div className="links flex justify-between">
                        <p className='text-sm text-gray-400 hover:text-red-400 cursor-pointer'>Facebook</p>
                        <p className='text-sm text-gray-400 hover:text-red-400 cursor-pointer'>Instagram</p>
                        <p className='text-sm text-gray-400 hover:text-red-400 cursor-pointer'>Linkedin</p>
                        <p className='text-sm text-gray-400 hover:text-red-400 cursor-pointer'>Youtube</p>
                    </div>
                    <div className='flex justify-end content-end items-end'>
                    <p className='text-sm text-gray-300 mx-auto'>
                        © 2021 All rights reserved. Ing. Musa Malik
                    </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;