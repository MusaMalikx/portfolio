import Progress from "./Progress";


const Coding = () => {
    return (
        <div className='c-s py-0 px-8 grid grid-cols-1 md:grid-cols-2 justify-start'>
            <Progress name="REACT JS" value="80" />
            <Progress name="NODE JS" value="73" />
            <Progress name="EXPRESS JS" value="70" />
            <Progress name="MONGO DB" value="90" />
            <Progress name="JAVASCRIPT" value="80" />
            <Progress name="SQL" value="95" />
            <Progress name="SASS" value="80" />
            <Progress name="HTML/CSS" value="96" />
            <Progress name="ASP.NET" value="50" />
            <Progress name="C#" value="50" />
        </div>
    )
}

export default Coding;
