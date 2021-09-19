//import { useSelector } from 'react-redux';
//import { selectAbout, selectContact, selectPortfolio, selectResume } from '../../redux/navbar/navbarSlice';
import { Album, AlternateEmail, Home, MovieCreation } from '@material-ui/icons';
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
            <div className={`text-white ${click ? 'bg-black' : 'bg-gray-800'}  flex content-center fixed top-0 left-0 right-0 z-10`}>
                <div className='navbar flex flex-col w-full'>
                    <div className='flex justify-between content-center my-8 px-10'>
                        <div className="flex flex-row my-0 mx-1">
                            <Logo />
                            <h3 className=" text-2xl font-bold tracking-widest">Musa Malik</h3>
                        </div>
                        <div className="flex justify-evenly md:justify-end items-center my-auto mx-0">
                            <div className='hidden md:inline-flex items-center hover:text-[#00C1D4] text-gray-400 cursor-pointer hover:animate-bounce mr-4'>
                                <Home />
                                <p className=' ml-1 text-sm ' >About Me</p>
                            </div>
                            <div className='hidden md:inline-flex items-center hover:text-[#00C1D4] text-gray-400 cursor-pointer hover:animate-bounce mr-4'>
                                <Album />
                                <p className='ml-1 text-sm ' >Resume</p>
                            </div>
                            <div className='hidden md:inline-flex items-center hover:text-[#00C1D4] text-gray-400 cursor-pointer hover:animate-bounce mr-4'>
                                <MovieCreation />
                                <p className='ml-1 text-sm ' >Portfolio</p>
                            </div>
                            <div className='hidden md:inline-flex items-center hover:text-[#00C1D4] text-gray-400 cursor-pointer hover:animate-bounce mr-4'>
                                <AlternateEmail />
                                <p className='ml-1 text-sm ' >Contact</p>
                            </div>
                            {/* <p className='hidden md:inline-flex ml-4 hover:animate-bounce text-sm text-gray-400 hover:text-[#00C1D4] cursor-pointer'>Resume</p>
                            <p className='hidden md:inline-flex ml-4 hover:animate-bounce text-sm text-gray-400 hover:text-[#00C1D4] cursor-pointer'>Portfolio</p>
                            <p className='hidden md:inline-flex ml-4 hover:animate-bounce text-sm text-gray-400 hover:text-[#00C1D4] cursor-pointer'>Contact</p> */}
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
                                < div className='fixed top-24 p-10 overscroll-y-scroll right-0 bg-black h-screen z-20 justify-between text-center border-l-2 border-[#00C1D4]'
                                    data-aos="fade-down"
                                    data-aos-easing="linear"
                                    data-aos-duration="500"
                                >
                                    <div className='flex flex-col items-center text-xl'>
                                        <div className='py-6 flex content-center hover:scale-125 transition ease-in-out duration-300 ' onClick={() => dispatch(change())}>
                                            <Home />
                                            <a className='ml-2' href="#home" >ABOUT ME</a>
                                        </div>
                                        <div className='py-6 flex content-center hover:scale-125 transition ease-in-out duration-300 ' onClick={() => dispatch(change())}>
                                            <Album />
                                            <a className='ml-2' href="#home" >RESUME</a>
                                        </div>
                                        <div className='py-6 flex content-center hover:scale-125 transition ease-in-out duration-300 ' onClick={() => dispatch(change())}>
                                            <MovieCreation />
                                            <a className='ml-2' href="#home" >PORTFOLIO</a>
                                        </div>
                                        <div className='py-6 flex content-center hover:scale-125 transition ease-in-out duration-300 ' onClick={() => dispatch(change())}>
                                            <AlternateEmail />
                                            <a className='ml-2' href="#home" >CONTACT</a>
                                        </div>
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
