const Total = (props) => {
    return(
        <p>
            {/* sum of exercise values - array element */}
            Total Number of Exercises: {''}
            {props.count[0].exercises + props.count[1].exercises + props.count[2].exercises}
        </p>
    );
};

export default Total;