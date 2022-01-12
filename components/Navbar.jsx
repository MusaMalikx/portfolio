//import { useSelector } from 'react-redux';
//import { selectAbout, selectContact, selectPortfolio, selectResume } from '../../redux/navbar/navbarSlice';
import { Album, AlternateEmail, Home, MovieCreation } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { change, selectHamburger } from '../redux/slices/hamburger';
import Logo from './Logo';
import { useRouter } from 'next/router'
import { selectAbout, selectContact, selectPortfolio, selectResume } from '../redux/slices/navbar';
import Image from "next/image";

const Navbar = () => {

    // const about = useSelector(selectAbout);
    // const resume = useSelector(selectResume);
    // const portfolio = useSelector(selectPortfolio);
    // const contact = useSelector(selectContact);
    const click = useSelector(selectHamburger);
    const dispatch = useDispatch();
    const router = useRouter();
    const about = useSelector(selectAbout);
    const resume = useSelector(selectResume);
    const portfolio = useSelector(selectPortfolio);
    const contact = useSelector(selectContact);

    const handleMe = () => {
        router.push('/')
        dispatch(change())
    }

    const handleResume = () => {
        router.push('/resume')
        dispatch(change())
    }

    const handlePortfolio = () => {
        router.push('/portfolio')
        dispatch(change())
    }

    return (
        <>
            <div className={`text-white ${click ? 'bg-black' : 'bg-[#F7F6F2]'}  flex content-center fixed top-0 left-0 right-0 z-10`}>
                <div className='navbar flex flex-col w-full'>
                    <div className='flex justify-between content-center my-8 px-10'
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="400"
                    >
                        <div className="flex flex-row my-0 mx-1">
                            <Logo />
                            <h3 className={`text-2xl ${click ? 'text-white' : 'text-black'} md:text-3xl font-serif font-bold tracking-widest`}>Musa Malik</h3>
                            {/* <Image src={malik} alt='Musa Malik' height={50} width={240} /> */}
                        </div>
                        <div className="flex justify-evenly md:justify-end items-center my-auto mx-0">
                            <div className={`hidden md:inline-flex items-center hover:text-[#00C1D4] ${about ? 'text-black' : 'text-gray-500'}  cursor-pointer hover:animate-bounce mr-4`} onClick={() => router.push('/')}>
                                <Home />
                                <p className=' ml-1 text-sm ' >About Me</p>
                            </div>
                            <div className={`hidden md:inline-flex items-center hover:text-[#00C1D4] ${resume ? 'text-black' : 'text-gray-500'}  cursor-pointer hover:animate-bounce mr-4`} onClick={() => router.push('/resume')}>
                                <Album />
                                <p className='ml-1 text-sm ' >Resume</p>
                            </div>
                            <div className={`hidden md:inline-flex items-center hover:text-[#00C1D4] ${portfolio ? 'text-black' : 'text-gray-500'}  cursor-pointer hover:animate-bounce mr-4`} onClick={() => router.push('/portfolio')}>
                                <MovieCreation />
                                <p className='ml-1 text-sm ' >Portfolio</p>
                            </div>
                            {/* <div className='hidden md:inline-flex items-center hover:text-[#00C1D4] text-gray-500 cursor-pointer hover:animate-bounce mr-4'>
                                <AlternateEmail />
                                <p className='ml-1 text-sm ' >Contact</p>
                            </div> */}
                            {/* <p className='hidden md:inline-flex ml-4 hover:animate-bounce text-sm text-gray-400 hover:text-[#00C1D4] cursor-pointer'>Resume</p>
                            <p className='hidden md:inline-flex ml-4 hover:animate-bounce text-sm text-gray-400 hover:text-[#00C1D4] cursor-pointer'>Portfolio</p>
                            <p className='hidden md:inline-flex ml-4 hover:animate-bounce text-sm text-gray-400 hover:text-[#00C1D4] cursor-pointer'>Contact</p> */}
                            <div onClick={() => dispatch(change())}
                                className='flex md:hidden flex-col justify-between space-y-2 cursor-pointer hover:text-gray-300 '>
                                <div className={`h-0.5 w-8 transition duration-500 ease-in-out ${click ? 'rotate-45 transition duration-500 ease-in-out translate-y-2.5 bg-gray-400' : 'bg-black'}`} />
                                <div className={`h-0.5 w-8 transition duration-500 ease-in-out ${click ? '-rotate-45 transition duration-500 ease-in-out bg-gray-400' : 'bg-black'}`} />
                            </div>
                        </div>
                    </div>
                    <hr className='bg-[#00C1D4] h-0.5 rounded-full border-none outline-none' />
                    {
                        click && (
                            <>
                                < div className='fixed top-24 p-10 right-0 bg-black h-screen z-20 justify-between text-center border-l-2 border-[#00C1D4] transition-transform ease-linear'
                                    data-aos="fade-left"
                                    data-aos-duration="500"
                                >
                                    <div className='flex text-gray-500 flex-col items-center text-xl'>
                                        <div className={`py-6 flex content-center ${about && 'text-white'} hover:scale-125 transition ease-in-out duration-300`} onClick={handleMe}>
                                            <Home />
                                            <a className='ml-2' href="#home" >ABOUT ME</a>
                                        </div>
                                        <div className={`py-6 flex content-center ${resume && 'text-white'} hover:scale-125 transition ease-in-out duration-300`} onClick={handleResume}>
                                            <Album />
                                            <a className='ml-2' href="#home" >RESUME</a>
                                        </div>
                                        <div className={`py-6 flex content-center ${portfolio && 'text-white'} hover:scale-125 transition ease-in-out duration-300`} onClick={handlePortfolio}>
                                            <MovieCreation />
                                            <a className='ml-2' href="#home" >PORTFOLIO</a>
                                        </div>
                                        {/* <div className='py-6 flex content-center hover:scale-125 transition ease-in-out duration-300 ' onClick={() => dispatch(change())}>
                                            <AlternateEmail />
                                            <a className='ml-2' href="#home" >CONTACT</a>
                                        </div> */}
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
