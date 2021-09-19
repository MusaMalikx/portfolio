import React from 'react'

const Experience = () => {
    return (
        <div className='experience'>
            <div data-aos="zoom-in-up">
                <div className='date flex items-center'>
                    <h6 className='date-h6 text-sm py-1 px-2 rounded-2xl border-2 border-solid border-[#00C1D4] m-0'>2020 - current</h6>
                    <p className='date-p text-xs my-0 mx-4'>Freelancer</p>
                </div>
                <div className="info ml-4 py-0 px-4 pt-3 border-l-2 border-gray-600 my-0 mx-4">
                    <h5 className='info-h5 mt-0 mb-2'>Web Developer</h5>
                    <p className='info-p text-sm text-gray-500'>
                        Main focus on React js along with Node, Mongo DB and Express to create applications and websites
                        for e-commerce or manangement purposes.
                    </p>
                    <div className='end bg-gray-500 h-0.5 mt-4 mb-3' />
                </div>
            </div>
        </div>
    )
}

export default Experience
