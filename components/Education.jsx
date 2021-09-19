import React from 'react'

const Education = () => {
    return (
        <div className='education'>
            <div data-aos="zoom-in-up">
                <div className='date flex items-center' >
                    <h6 className='date-h6 text-sm py-1 px-2 rounded-2xl border-2 border-solid border-[#00C1D4] m-0'>2019 - 2023</h6>
                    <p className='date-p text-xs my-0 mx-4'>FAST NUCES Lahore</p>
                </div>
                <div className="info ml-4 py-0 px-4 pt-3 border-l-2 border-gray-600 my-0 mx-4" style={{
                    paddingBottom: "10px",
                }}>
                    <h5 className='info-h5 mt-0 mb-2'>Bachelor in Computer Science</h5>
                    <p className='info-p text-sm text-gray-500'>
                        Main focus areas like computer programming, software engineering, computer hardware, and artificial intelligence engineering. Students may examine topics such as computability, information, automata, and algorithm design.
                    </p>
                    <div className='end bg-gray-500 h-0.5 mt-4 mb-3' />
                </div>
            </div>
            <div data-aos="zoom-in-up">
                <div className='date flex items-center' >
                    <h6 className='date-h6 text-sm py-1 px-2 rounded-2xl border-2 border-solid border-[#00C1D4] m-0'>2017 - 2019</h6>
                    <p className='date-p text-xs my-0 mx-4'>FORMAN CHRISTIAN COLLEGE</p>
                </div>
                <div className="info ml-4 py-0 px-4 pt-3 border-l-2 border-gray-600 my-0 mx-4">
                    <h5 className='info-h5 mt-0 mb-2'>Intermediate</h5>
                    <p className='info-p text-sm text-gray-500'>
                        Main focus on subjects Mathematics, Chemistry, Physics
                    </p>
                    <div className='end bg-gray-500 h-0.5 mt-4' />
                </div>
            </div>
        </div>
    )
}

export default Education
