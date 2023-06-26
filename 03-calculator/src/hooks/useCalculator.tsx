import {useRef, useState} from 'react';

enum Operators {
  sum,
  rest,
  multiply,
  divide,
}
export const UseCalculator = () => {
  const [num, setNum] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const refOperation = useRef<Operators>();
  const handleClear = () => {
    setNum('0');
    setPreviousNumber('0');
  };
  const handleNumber = (textNumber: string) => {
    if (num.includes('.') && textNumber === '.') {
      return;
    }
    if (num.startsWith('0') || num.startsWith('-0')) {
      if (textNumber === '.') {
        setNum(num + textNumber);
      } else if (textNumber === '0' && num.includes('.')) {
        setNum(num + textNumber);
      } else if (textNumber !== '0' && !num.includes('.')) {
        setNum(textNumber);
      } else if (textNumber === '0' && !num.includes('.')) {
        setNum(num);
      } else {
        setNum(num + textNumber);
      }
    } else {
      setNum(num + textNumber);
    }
  };
  const handleSumRest = () => {
    if (num.includes('-')) {
      setNum(num.replace('-', ''));
    } else {
      setNum('-' + num);
    }
  };

  const deleteANumber = () => {
    if (num.length === 1 || (num.includes('-') && num.length === 2)) {
      setNum('0');
    } else {
      setNum(num.slice(0, -1));
    }
  };

  const changeNumberToPrevious = () => {
    if (num.endsWith('.')) {
      setPreviousNumber(num.slice(0, -1));
    } else {
      setPreviousNumber(num);
    }
    setNum('0');
  };
  const handleOperation = (operation: Operators) => {
    changeNumberToPrevious();
    refOperation.current = operation;
  };

  const calculate = () => {
    const numberUser = Number(num);
    const previousNumberUser = Number(previousNumber);
    if (numberUser === 0 && previousNumberUser === 0) {
      return setNum('0');
    }
    switch (refOperation.current) {
      case Operators.sum:
        setNum(`${numberUser + previousNumberUser}`);
        break;
      case Operators.rest:
        setNum(`${previousNumberUser - numberUser}`);
        break;
      case Operators.multiply:
        setNum(`${numberUser * previousNumberUser}`);
        break;
      case Operators.divide:
        if (numberUser !== 0) {
          setNum(`${previousNumberUser / numberUser}`);
        }
        break;
    }
    setPreviousNumber('0');
  };
  return {
    num,
    previousNumber,
    handleClear,
    handleNumber,
    handleSumRest,
    deleteANumber,
    handleOperation,
    calculate,
  };
};
