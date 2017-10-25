import React from 'react';
import Title from './Header/Title.jsx'

export default class Header extends React.Component {
    render() {
        return (
            <header>
                <Title title={this.props.title}/>
                This is header
            </header>
        );
    }
}