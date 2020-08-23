import React from 'react';
import './App.css';
//import BeforeAfterSlider from 'react-before-after-slider';
import { defineCustomElements as defineImgComparisonSlider } from 'img-comparison-slider/loader';
import before from './FM2015GE2.JPG';
import after from './FM2016GE2.JPG';
import { Button, Grid, Input, Typography } from '@material-ui/core';

defineImgComparisonSlider(window);

class App extends React.Component {
 // const before = './before.JPG';
  //const after= './after.JPG';
  constructor(props) {
    super(props);
    this.state = { upload: false, calculate: false }
  }

  render() {
    return (
      <div className="App">
        <Grid container direction = "column">
          <Grid item container direction = "row" style={{ borderBottom: "2px solid #713BDB" }}>
            <Grid item>
              <Typography variant="h2" style={{ color: "#713BDB"}}>
                F I F
              </Typography>
            </Grid>
          </Grid>
          <Grid container item direction = "row">
            <Grid item xs={7}>
              { this.state.upload &&
              <img-comparison-slider>
                <img slot="after" src={after} width="700" />
                <img slot="before" src={before} width="700"/>
              </img-comparison-slider>
              }
            </Grid>
            
            <Grid item container direction = "column" xs={5} style={{ borderLeft: "2px solid #713BDB" }}>
              <Grid item><Typography variant="h5" style={{color: "#713BDB"}}>Image Upload</Typography></Grid>
              <Grid item><label style={{fontSize: "25px"}}>Before Fire<Input type="file" style={{display: "none"}}/></label></Grid>
              <Grid item><label style={{fontSize: "25px"}}>After Fire<Input type="file" name="after" style={{display: "none"}}/></label></Grid>
              <Grid item style={{margin: "10px"}}>
                <Button style={{backgroundColor: "#713BDB"}} className="TButton" onClick={()=>this.setState({ upload: true})}>
                  Upload
                </Button>
              </Grid>
              <Grid item><Typography variant="h4" style={{color: "#713BDB", borderTop: "2px solid #713BDB"}}>Statistics</Typography></Grid>
                <Grid container item direction="column" spacing={3} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                <Grid item style={{marginLeft: 25}}>Total Damaged Buildings:{this.state.calculate && 1}</Grid>
                <Grid item style={{marginLeft: 25}}>Total Safe Buildings:{this.state.calculate && 1}</Grid>
                <Grid item style={{marginLeft: 25}}>Loss per m<sup>2</sup>: {this.state.calculate && 1}</Grid>
                <Grid item style={{marginLeft: 25}}>Loss: {this.state.calculate && 1}</Grid>
                </Grid>
              <Grid item>
                <Button style={{backgroundColor: "#713BDB"}} onClick={()=>this.setState({calculate: true})}>
                  Calculate
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
