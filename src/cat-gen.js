import React, {Component} from 'react';

export default class CatGen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            id:0,
            path:"",
            description:"",
            info: []
        }
        this.reset = this.reset.bind(this);
    }

    reset() {
        const data = this.state.info;
                const index = Math.floor(Math.random()*data.length);
                this.setState({
                    name: data[index].name,
                    id: data[index].id,
                    path: data[index].path,
                    description: data[index].description
                }, () => console.log(this.state));
    }

    componentDidMount() {
        fetch('http://3.22.89.173:5000')
            .then(res => res.json())
            .then (data => {
                this.setState({
                    info: data
                }, () => this.reset())
            })
    }

    render () {
        return (
                <figure>
                    <img onClick={this.reset} src={this.state.path}/>
                    <figcaption>{this.state.description}</figcaption>
                </figure>
        )
    }
}
