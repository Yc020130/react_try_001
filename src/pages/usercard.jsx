import React from 'react';

const Try = (props) => {
    return (
        <div>
            <h1>hello,my name is {props.name}!</h1>
            <h2>my age is {props.age}!</h2>
            <h2>my hobby is {props.hobby}!</h2>
        </div>
    )
}

const UserCard = () => {
    return<Try name="张三" age="25" hobby="篮球" /> 
}

export default UserCard;