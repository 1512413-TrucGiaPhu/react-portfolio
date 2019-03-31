import React, { Component } from 'react';

const TITLES = [
    'a sofware engineer',
    'a music lover',
    'an enthusiastic learner'
];

class Title extends Component {
    state = { titleIndex: 0};

    componentDidMount() {
        console.log('Title component has mounted');

        this.animateTitles();
    }

    conponentWillUnmount(){
        console.log('Title component will unmount');

        clearInterval(this.titleInterval);
    }

    animateTitles = () => {
        this.titleInterval = setInterval(()=>{
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;

            this.setState({ titleIndex });
        }, 3000)

        console.log('this.titleInterval', this.titleInterval);
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return (
            <p>I am {title}</p>
        )
    }
}

export default Title;