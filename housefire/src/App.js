import React from 'react';
import './App.css';
//import BeforeAfterSlider from 'react-before-after-slider';
import { defineCustomElements as defineImgComparisonSlider } from 'img-comparison-slider/loader';
import before from './FM2015GE2.JPG';
import after from './FM2016GE2.JPG';

defineImgComparisonSlider(window);

function App() {
 // const before = './before.JPG';
  //const after= './after.JPG';

  return (
    <div className="App">
      <img-comparison-slider>
        <img slot="before" src={before}/>
        <img slot="after" src={after} />
      </img-comparison-slider>

      <iframe width="400" height="400" 
        src="https://www.google.org/crisismap/2016-fort-mcmurray-fire?hl=en&llbox=56.727974%2C56.719473%2C-111.448438%2C-111.481397&t=ROADMAP&layers=5%2C14%2C44%2C41%2C35%2C34%2C11%2C24%2C3%2C2%2C6%3A100&embedded=true"
        ></iframe>

    </div>
  );
}

export default App;
