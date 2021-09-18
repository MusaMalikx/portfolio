import { Apps, Brush, ImportantDevices, Storefront } from '@material-ui/icons';

const Do = () => {
    return (
        <div className="what grid md:grid-cols-2 justify-evenly my-5 mx-0">
            <div className="show flex py-5">
                <div className="icon text-[#00C1D4]">
                    <Brush />
                </div>
                <div className="do pl-4">
                    <h4 className='mb-3 text-gray-200 font-bold tracking-wide'>Design</h4>
                    <p className='text-sm text-gray-400'>Designing a product is my favourite activity. I like to explore and get inspired,
                        but the final result of my work is a connection between inspiration and my ideas
                        and imagination.
                    </p>
                </div>
            </div>
            <div className="show flex py-5">
                <div className="icon text-[#00C1D4]">
                    <ImportantDevices />
                </div>
                <div className="do pl-4">
                    <h4 className='mb-3 text-gray-200 font-bold tracking-wide'>Development</h4>
                    <p className='text-sm text-gray-400'>
                        When developing a product, it is especially important to create a reusable components which
                        results in clarity and easier understanding of the code. The source that I use for this purpose is REACT.
                    </p>
                </div>
            </div>
            <div className="show flex py-5">
                <div className="icon  text-[#00C1D4]">
                    <Storefront />
                </div>
                <div className="do pl-4">
                    <h4 className='mb-3 text-gray-200 font-bold tracking-wide'>E-commerce</h4>
                    <p className='text-sm text-gray-400'>
                        For me, creating ecommerce applications is a kind of an extension of the presentation.
                         However, not a presentation of a person in the form of a website, but a product where I combine
                          design , functionality and the ability to interact with the content of the application.

                    </p>
                </div>
            </div>
            <div className="show flex py-5">
                <div className="icon text-[#00C1D4]">
                    <Apps />
                </div>
                <div className="do pl-4">
                    <h4 className='mb-3 text-gray-200 font-bold tracking-wide'>App / Portfolio</h4>
                    <p className='text-sm text-gray-400'>
                        My development beginnings lie in the creation of web portfolios. A portfolio website is the quickest and easiest way of showcasing your work
                        as a designer or freelancer. Building on apps has become both challenge and joy. The diversity of application 
                        development mainly helps me to build up on my functional skills. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Do;
