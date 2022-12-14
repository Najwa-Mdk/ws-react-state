import React, {Component} from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.person = {
            FullName: 'Najwa',
            Profession: 'Developer Full-Stack',
            Bio: 'I like football',
            img: "https://www.garance-et-moi.com/hs-fs/hubfs/Fiche%20m%C3%A9tier%20-%20D%C3%A9veloppeuse/devenir-developpeuse.jpg?width=600&height=400&name=devenir-developpeuse.jpg"

        }
        this.state = {count : 0 }
    }
    componentDidMount () {
        setInterval (() => {
this.setState (prevState => ({
count : prevState.count +1 
}))
} , 1000)
    }
    render() {
        return (
            <div>
                <h2>{this.person.FullName}</h2>
                <h2>{this.person.Profession}</h2>
                <h2>{this.person.Bio}</h2>
                <h1>{this.state.count}</h1>
                <img src ={this.person.img}  alt =" img"/>
            </div>
        )
    }
}
