import React from 'react';

const ScoreList = () => {
    const scores = [90, 85, 77, 100];

    return (
        <div>
            <ul>
                {scores.map((score, index) => (
                    <li key={index}>第{index + 1}名：{score}</li>
                ))}
            </ul>
        </div>
    );
};

export default ScoreList;

