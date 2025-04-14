import React from 'react';

const Color = (props) => {
    return <h1 style={{backgroundColor:props.color}}>hello,my color is{props.color}!</h1>;
}

const App = () => {
    return <Color color="red" />;
}

export default App;