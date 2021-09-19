import { DoneAll } from '@material-ui/icons'

const Offer = () => {
    return (
        <div className='what-offer grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-evenly items-center content-center mt-6 mx-0 pb-12'>
            <div className='show flex flex-col bg-gray-600 text-center border-2 border-gray-400 h-24 w-56 m-3.5 p-5' data-aos="zoom-in-up">
                <div className="icon text-[#00C1D4]">
                    <DoneAll />
                </div>
                <div className="offer">
                    <p className='text-sm'>
                        Design
                    </p>
                </div>
            </div>
            <div className='show flex flex-col bg-gray-600 text-center border-2 border-gray-400 h-24 w-56 m-3.5 p-5' data-aos="zoom-in-up">
                <div className="icon text-[#00C1D4]">
                    <DoneAll />
                </div>
                <div className="offer">
                    <p className='text-sm'>
                        Portfolio Development
                    </p>
                </div>
            </div>
            <div className=' flex flex-col bg-gray-600 text-center border-2 border-gray-400 h-24 w-56 m-3.5 p-5' data-aos="zoom-in-up">
                <div className="icon text-[#00C1D4]">
                    <DoneAll />
                </div>
                <div className="offer">
                    <p className='text-sm'>
                        E-commerce Development
                    </p>
                </div>
            </div>
            <div className='show flex flex-col bg-gray-600 text-center border-2 border-gray-400 h-24 w-56 m-3.5 p-5' data-aos="zoom-in-up">
                <div className="icon text-[#00C1D4]">
                    <DoneAll />
                </div>
                <div className="offer">
                    <p className='text-sm'>
                        Application Development
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Offer;