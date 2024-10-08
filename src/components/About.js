import User from "./User";
import UserClass from "./UserClass";
const About = ()=>{
    return(
        <div className="about">
        <h1>About US</h1>
        <h2>
            <User name="Priya Sharma" contact="7340838113"/>
        </h2>
        <h2>
            <UserClass email="ps3869253@gmail.com" location ="delhi India"/>

        </h2>

        </div>
    );
}

export default About;