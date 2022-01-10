import Image from 'next/image';
import { useEffect } from 'react';
import { useState } from 'react';

const Progress = ({ source, alte }) => {

    const [check, setCheck] = useState(false);

    useEffect(() => {
        if (alte === "SQL logo" || alte === "Sass logo" || alte === "HTML logo" || alte === "CSS logo") {
            setCheck(true);
        }
    }, [alte])

    return (
        <div className={`my-2 mx-2 border-2 border-black rounded-md ${check && 'px-3 pt-2'}`}
            data-aos="zoom-in-up">
            <Image src={source} alt={alte} width="1920" height="720" />
        </div>
    )
}

export default Progress;
