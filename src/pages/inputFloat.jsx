import React, { useState } from 'react';

const InputColor2 = () => {
  const [color, setColor] = useState('black');
  const [value, setValue] = useState('');

  const onChange = (e) => {
    const input = e.target.value;
    setValue(input);

    const number = parseFloat(input);
    if (isNaN(number)) {
      setColor('gray');
    } else if (number > 0) {
      setColor('green');
    } else if (number < 0) {
      setColor('red');
    } else {
      setColor('black');
    }
  };

  const parsedNumber = parseFloat(value);
  const isValid = !isNaN(parsedNumber);

  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
      <p style={{ color }}>
        输入的内容是：{value}
        <br />
        解析后的数字是：{isValid ? parsedNumber : '无效'}
      </p>
    </div>
  );
};

export default InputColor2;
