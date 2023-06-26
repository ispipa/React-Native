import {Text, View} from 'react-native';
import {styles} from '../theme/appTheme';
import {ButtonCalculator} from '../components/ButtonCalculator';
import {UseCalculator} from '../hooks/useCalculator';

export const CalculatorScreen = () => {
  const {
    num,
    previousNumber,
    handleClear,
    handleSumRest,
    deleteANumber,
    handleOperation,
    handleNumber,
    calculate,
  } = UseCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {num !== '0' && previousNumber !== '0' && (
        <Text style={styles.smallResult}>{previousNumber}</Text>
      )}
      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {num}
      </Text>
      <View style={styles.row}>
        {/*Row Buttons*/}
        <ButtonCalculator text="C" color="#9B9B9B" action={handleClear} />
        <ButtonCalculator text="+/-" color="#9B9B9B" action={handleSumRest} />
        <ButtonCalculator text="del" color="#9B9B9B" action={deleteANumber} />
        <ButtonCalculator
          text="/"
          color="#FF9427"
          action={() => handleOperation(3)}
        />
      </View>
      <View style={styles.row}>
        {/*Row Buttons*/}
        <ButtonCalculator text="7" action={handleNumber} />
        <ButtonCalculator text="8" action={handleNumber} />
        <ButtonCalculator text="9" action={handleNumber} />
        <ButtonCalculator
          text="X"
          color="#FF9427"
          action={() => handleOperation(2)}
        />
      </View>
      <View style={styles.row}>
        {/*Row Buttons*/}
        <ButtonCalculator text="4" action={handleNumber} />
        <ButtonCalculator text="5" action={handleNumber} />
        <ButtonCalculator text="6" action={handleNumber} />
        <ButtonCalculator
          text="-"
          color="#FF9427"
          action={() => handleOperation(1)}
        />
      </View>
      <View style={styles.row}>
        {/*Row Buttons*/}
        <ButtonCalculator text="1" action={handleNumber} />
        <ButtonCalculator text="2" action={handleNumber} />
        <ButtonCalculator text="3" action={handleNumber} />
        <ButtonCalculator
          text="+"
          color="#FF9427"
          action={() => handleOperation(0)}
        />
      </View>
      <View style={styles.row}>
        {/*Row Buttons*/}
        <ButtonCalculator text="0" width action={handleNumber} />
        <ButtonCalculator text="." action={handleNumber} />
        <ButtonCalculator text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};
