
import { useState } from 'react';
import Form from './components/Form/Form';
import Header from './components/Header/Header';
import Result from './components/Result/Result';

function App() {
  const [dataOfYears, setDataOfYears] = useState([]);


  console.log(dataOfYears);
  const calculateHandler = (userInput) => {
    
    
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // const yearlyData = []; // per-year results
    const yearlyData = [...dataOfYears]; // []

    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setDataOfYears(yearlyData);
    console.log((dataOfYears.length !== 0),yearlyData)
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header></Header>
      <Form
       OnCalculate = {calculateHandler}
      ></Form>
      {dataOfYears.length === 0 && <p>No investment calculated yet</p>}
      {dataOfYears.length !== 0 && <Result
      data = {dataOfYears}
      initialInvest = {100000}
      ></Result>}
    </div>
  );
}

export default App;
