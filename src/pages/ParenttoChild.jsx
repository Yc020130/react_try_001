import React from 'react';

function Child({name}){
    return<p>Hi! {name}</p>
}

function Parent4(){
    return<Child name='小明' />
}

export default Parent4;