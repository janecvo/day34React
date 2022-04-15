const Part = (props) => {
    return (
        <p>
            Section Title: {props.content.title} 
            <br></br>
            Number of exercises: {props.content.exercises}
        </p>
    );
};

export default Part;