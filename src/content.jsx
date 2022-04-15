//import part as it is the "inside" of content component
import Part from './part';


const Content = ({parts}) => {
    return (
        <div>
        {/* returns name of parts of course; array elements */}
        <Part part={}={parts[0]}/>  
        <Part part={}={parts[1]}/>
        <Part part={}={parts[2]}/>
        </div>
    );
};

export default Content;