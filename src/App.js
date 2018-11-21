import React, { Component } from 'react';
import './components/loginfacebook/Loginfacebook.css';
import FacebookLogin from 'react-facebook-login';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            picture : "",
            email : ""
        }
    }

    responseFacebook = (response) => {
        console.log(response)
        let picture = response.picture.url;
        this.setState({picture: response.picture.data.url})
        let email = response.email;
        this.setState({email: response.email})
    }
    componentClicked = () => {
    }



    render() {
        return (
                <div className="general">
                {
                    this.state.email == "" &&
                        <img src="https://cdn.discordapp.com/attachments/368420011380834305/514795334480822293/adopte_une_rh_blanc.png"/>
                }
                <img src={this.state.picture}/>
                <p>{this.state.email}</p>

                {
                    this.state.email == "" &&

                        <div className="">
                            <FacebookLogin
                                appId="309196956570599"
                                autoLoad={true}
                                fields="name,email,picture"
                                onClick={this.componentClicked}
                                callback={this.responseFacebook}/>
                        </div>

                }
                </div>

        )
    }

}
export default App;