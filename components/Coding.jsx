import Progress from "./Progress";
import reactjs from "../assets/react.png";
import nodejs from "../assets/nodejs.png";
import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import javascript from "../assets/javascript.png";
import sql from "../assets/sql.png";
import sass from "../assets/sass.png";
import html from "../assets/html.jpg";
import css from "../assets/css.jpg";
import asp from "../assets/aspnet.png";
import csharp from "../assets/csharp.png";
import redux from "../assets/redux.png";
import Image from 'next/image';

const Coding = () => {
    return (
        <div className='c-s py-0 px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center'>
            <Progress source={reactjs} alte={`ReactJS logo`} />
            <Progress source={redux} alte={`Redux logo`} />
            <Progress source={nodejs} alte={`NodeJS logo`} />
            <Progress source={expressjs} alte={`ExpressJS logo`} />
            <Progress source={mongodb} alte={`MongoDB logo`} />
            <Progress source={javascript} alte={`Javascript logo`} />
            <Progress source={sql} alte={`SQL logo`} />
            <Progress source={sass} alte={`Sass logo`} />
            <Progress source={asp} alte={`ASP.Net logo`} />
            <Progress source={html} alte={`HTML logo`} />
            <Progress source={css} alte={`CSS logo`} />
            <Progress source={csharp} alte={`C# logo`} />
            {/* <Progress name="REACT JS" value="80" />
            <Progress name="NODE JS" value="73" />
            <Progress name="EXPRESS JS" value="70" />
            <Progress name="MONGO DB" value="90" />
            <Progress name="JAVASCRIPT" value="80" />
            <Progress name="SQL" value="95" />
            <Progress name="SASS" value="80" />
            <Progress name="HTML/CSS" value="96" />
            <Progress name="ASP.NET" value="50" />
            <Progress name="C#" value="50" /> */}
        </div>
    )
}

export default Coding;
