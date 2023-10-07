import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
               name: "Dummy",
               location: "Default",
               bio: "",
            }
        }
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/abhinavmaharana");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })

        console.log(json);

    }

    render() {

        const {name, bio, avatar_url} = this.state.userInfo
        return (
            <div className="user-card">
                <img src={avatar_url} alt={name}/>
                <h1>Name: {name}</h1>
                <h2>Bio: {bio}</h2>
                <h3>Location: Noida</h3>
            </div>
        )
    }
}

export default UserClass;