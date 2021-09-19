import { LinearProgress, withStyles } from '@material-ui/core';

const Progress = ({ name, value }) => {

    const BorderLinearProgress = withStyles(() => ({
        root: {
            height: 5,
            borderRadius: 5,
            border: "1px solid grey",
            //width: "500px"
        },
        colorPrimary: {
            backgroundColor: 'rgba(255,255,255,0.1)',
        },
        bar: {
            borderRadius: 5,
            backgroundColor: '#00C1D4',
        },
    }))(LinearProgress);

    return (
        <div className='progress mb-4 pr-5' data-aos="zoom-in-up">
            <div className="value flex justify-between mb-2">
                <h6 className='v-h6 m-0 text-xs'>{name}</h6>
                <p className='v-p m-0 text-xs'>{value + '%'}</p>
            </div>
            <BorderLinearProgress variant="determinate" value={value} />
        </div>
    )
}

export default Progress;
