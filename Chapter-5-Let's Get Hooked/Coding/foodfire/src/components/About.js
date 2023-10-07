import UserClass from "./UserClass";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <UserClass name={"Abhinav Maharana (class)"}/>
        </div>
    )
}

export default About;

/*
 - Parent Constructor
 - Parent render

    - First Constructor
    - First Render

    - Second Constructor
    - Second Render

    <DOM UPDATED - IN SINGLE BATCH>

    - First ComponentDidMount
    - Second ComponentDidMount

  - Parent ComponentDidMount 
 */