//import part as it is the "inside" of content component
import Part from './part';


const Content = (parts) => {
    return (
        <div>
        {/* returns name of parts of course; array elements */}
        <Part content={parts[0]}/>  
        <Part content={parts[1]}/>
        <Part content={parts[2]}/>
        </div>
    );
};

export default Content;