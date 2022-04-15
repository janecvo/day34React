//import part as it is the "inside" of content component
import Part from './part';


const Content = (props) => {
    return (
        <div>
        {/* returns name of parts of course; array elements */}
        <Part content={props.parts[0]}/>  
        <Part content={props.parts[1]}/>
        <Part content={props.parts[2]}/>
        </div>
    );
};

export default Content;