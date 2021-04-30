// Code CoordinatesButton Component Here
import React from 'react' 

class CoordinatesButton extends React.Component {

    handleClick = (event) => {
       
        const xValue = event.clientX
        const yValue = event.clientY

        this.props.onReceiveCoordinates([xValue, yValue])
    }

    render(){
        return <button onClick = {this.handleClick}> </button>
    }
}

export default CoordinatesButton 