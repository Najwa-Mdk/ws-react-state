import React, {Component} from 'react'

export default class Profile extends Component {
    state = {
        Person: {
            fullName: "Najwa Madhkour",
            bio: "I like football",
            profession: "Developer Full-Stack",
            img: "myImage"
        },
        show: true
    };

    handleShowPerson = () => {
        this.setState({
            ...this.state,
            show: !this.state.show
        });
    };

    render() {
        return (
            <> {
                this.state.show && (
                    <>
                        <h1>{
                            this.state.Person.fullName
                        }</h1>
                        <h1> {
                            this.state.Person.bio
                        } </h1>
                        <h1>{
                            this.state.Person.profession
                        }</h1>
                        <br></br>
                    </>
                )
            }
    <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}







