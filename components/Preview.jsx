import Image from "next/image";
import { useState } from "react";
import { useRouter } from 'next/router';
import Router from 'next/router';

function Preview({ source, alta, para, link }) {

    const [enter, setEnter] = useState(false);
    const router = useRouter();

    return (
        <a className="mx-2 hover:cursor-pointer hover:scale-90 transition-transform ease-linear"
            href={link}
            data-aos="zoom-in-down"
            //onClick={()=> Router.push('/netflix-2-0.vercel.app')}
            onMouseOver={() => setEnter(true)}
            onMouseOut={() => setEnter(false)}
        // onMouseEnter={() => setEnter(true)}
        // onMouseLeave={() => setEnter(false)}
        >
            <div >
                <Image className={`rounded-md md:rounded-lg overflow-hidden m-0 p-0 ${enter && 'rounded-t-md md:rounded-t-lg rounded-b-md md:rounded-b-none'}`}
                    src={source} alt={alta} width={1920} height={1080} />
            </div>
            {
                enter && (

                    <div className="relative hidden md:flex">
                        <div className="absolute top-0 left-0 right-0 border-2 p-2 border-[#00C1D4] bg-[#EEEEEE] md:rounded-b-lg rounded-b-md">
                            <h1 className=" font-bold tracking-widest text-sm md:text-lg">
                                {alta}
                            </h1>
                            <p className=" font-mono whitespace-normal my-1 text-gray-700 z-auto">
                                {para}
                            </p>
                        </div>
                    </div>

                )
            }
        </a>
    )
}

export default Preview;
