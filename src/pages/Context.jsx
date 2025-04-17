import React, { useContext } from 'react';

const ThemeContext = React.createContext();

function Parent(){
    return(
        <ThemeContext.Provider value="dark">
        <Child />
        </ThemeContext.Provider>
    );
}

function Child() {
    const theme = useContext(ThemeContext)
    return<div>当前主题为：{theme}</div>;
}

export default Parent;