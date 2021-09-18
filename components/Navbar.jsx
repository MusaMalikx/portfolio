//import { useSelector } from 'react-redux';
//import { selectAbout, selectContact, selectPortfolio, selectResume } from '../../redux/navbar/navbarSlice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { change, selectHamburger } from '../redux/slices/hamburger';
import Logo from './Logo';

const Navbar = () => {

    // const about = useSelector(selectAbout);
    // const resume = useSelector(selectResume);
    // const portfolio = useSelector(selectPortfolio);
    // const contact = useSelector(selectContact);
    const click = useSelector(selectHamburger);
    const dispatch = useDispatch();

    return (
        <>
            <div className="text-white bg-gray-800 flex content-center fixed top-0 left-0 right-0 z-10">
                <div className='navbar flex flex-col w-full'>
                    <div className='flex justify-between content-center my-8 px-10'>
                        <div className="flex flex-row my-0 mx-1">
                            <Logo />
                            <h3 className=" text-2xl font-bold">Musa Malik</h3>
                        </div>
                        <div className="flex justify-evenly md:justify-end items-center my-auto mx-0">
                            <p className='hidden md:inline-flex ml-4 text-sm text-gray-400 hover:text-red-400 cursor-pointer' >About Me</p>
                            <p className='hidden md:inline-flex ml-4 text-sm text-gray-400 hover:text-red-400 cursor-pointer'>Resume</p>
                            <p className='hidden md:inline-flex ml-4 text-sm text-gray-400 hover:text-red-400 cursor-pointer'>Portfolio</p>
                            <p className='hidden md:inline-flex ml-4 text-sm text-gray-400 hover:text-red-400 cursor-pointer'>Contact</p>
                            <div onClick={() => dispatch(change())}
                                className='flex md:hidden flex-col justify-between space-y-2 cursor-pointer hover:text-gray-300 '>
                                <div className={`h-0.5 w-8 transition duration-500 ease-in-out ${click ? 'rotate-45 transition duration-500 ease-in-out translate-y-2.5 bg-gray-400' : 'bg-white'}`} />
                                <div className={`h-0.5 w-8 transition duration-500 ease-in-out ${click ? '-rotate-45 transition duration-500 ease-in-out bg-gray-400' : 'bg-white'}`} />
                            </div>
                        </div>
                    </div>
                    <hr className='bg-[#00C1D4] h-0.5 rounded-full border-none outline-none' />
                    {
                        click && (
                            <>
                                < div className='fixed top-24 p-10 overscroll-y-scroll right-0 left-0 bg-black h-screen z-20 justify-between text-center'
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="500"
                                >
                                    <div className='flex flex-col text-5xl md:text-7xl lg:text-9xl'>
                                        <a className='py-6 hover:scale-150 transition ease-in-out duration-300' href="#home" onClick={() => dispatch(change())}>HOME</a>
                                        <a className='py-6 hover:scale-150 transition ease-in-out duration-300' href="#reile" onClick={() => dispatch(change())}>REILE</a>
                                        <a className='py-6 hover:scale-150 transition ease-in-out duration-300' href="#about" onClick={() => dispatch(change())}>ABOUT</a>
                                        <a className='py-6 hover:scale-150 transition ease-in-out duration-300' href="#contact" onClick={() => dispatch(change())}>CONTACT</a>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )

    // < div className='fixed top-0 p-20 right-0 left-0 bg-red-400 h-screen z-20'
    //                         // data-aos="fade-down"
    //                         // data-aos-easing="linear"
    //                         // data-aos-duration="500"
    //                     >
    //                         <li>something</li>
    //                         <li>something</li>
    //                         <li>something</li>
    //                         <li>something</li>
    //                         <li>something</li>
    //                     </div>
}

export default Navbar;
