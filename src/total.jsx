const Total = (parts ) => {
    return(
        <p>
            {/* sum of exercise values - array element */}
            Total Number of Exercises: {''}
            {parts[0].exercises + parts[1].exercises + parts[2].exercises}
        </p>
    );
};

export default Total;