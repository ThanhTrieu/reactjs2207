import React from 'react';

export default class Result extends React.Component {

    render(){
        return(
            <>
                <h1>{this.props.result}</h1>
            </>
        )
    }
}