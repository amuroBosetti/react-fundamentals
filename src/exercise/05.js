// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

const Box = ({size, style, ...otherProps}) => {
    const sizeClasses = {
        small: "box--small",
        medium: "box--medium",
        large: "box--large",
    };
    const className = size ? sizeClasses[size] : '';
    return <div style={{fontStyle: "italic", ...style}} className={`box ${className}`} {...otherProps}/>;
}
const smallBox = <Box size="small" style={{backgroundColor: "lightblue"}}>small lightblue box</Box>
const mediumBox = <Box size="medium" style={{backgroundColor: "pink"}}>medium pink box</Box>
const largeBox = <Box style={{backgroundColor: "orange"}}>large orange box</Box>

function App() {
    return (
        <div>
            {smallBox}
            {mediumBox}
            {largeBox}
        </div>
    )
}

export default App
