import React from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {name: "Mateusz"};
    }
    render() {
        const title = "yoyo"
        return (
            <div>
                <Header title={title}/>
                <Footer/>
            </div>);
    }
}