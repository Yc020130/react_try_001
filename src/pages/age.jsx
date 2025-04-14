import React from 'react';

const MyAge = (props) => {
    return <h1>hello,my age is {props.age}!</h1>;
}

const AgeApp = () => {
    return <MyAge age={23} />;
}

export default AgeApp;