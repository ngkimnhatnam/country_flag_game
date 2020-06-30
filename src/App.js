import React, {Component} from 'react';
import Navbar from './Navbar';
import Form from './Form';
import Replay from './Replay';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      correctOne: '',
      chosenAnswer: '',
      isMatch: 0
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchAll = this.fetchAll.bind(this);
  }
	componentDidMount(){
    this.fetchAll();
  }
  
  fetchAll(){
    const countriesURL = 'https://restcountries.eu/rest/v2/all';
    let countryArray = [];
    
    fetch(countriesURL)
      .then(data => data.json())
      .then(data => {
       for(let i = 0;i<4;i++){
         countryArray.push(data[Math.floor(Math.random()*data.length)])
       }
        return countryArray;
      })
      .then(countries => this.setState({
        countries, 
        correctOne: countries[Math.floor(Math.random()*countries.length)],
        chosenAnswer: '',
        isMatch: 0}))
  }
  
  handleClick(e){
    this.setState({chosenAnswer: e.target.value});
    console.log('id..'+e.target.value);
  }
  handleSubmit(e){
    e.preventDefault();
    this.state.chosenAnswer === this.state.correctOne.name ? this.setState({isMatch: 1}):this.setState({isMatch: 2})
  }
  
  render() {
    const {correctOne} = this.state;
    let displayFlag = <div className='countryPic'><img src={correctOne.flag} alt={correctOne.name} /></div>     
     
    return (
      <div className='App'>
        <Navbar />
        <div className='mainDisplay'>
          {displayFlag}
          {this.state.isMatch===1 || this.state.isMatch===2 ? <Replay onHandleFetchAll={this.fetchAll} correctOne={this.state.correctOne} guessStatus={this.state.isMatch}/>:
            <Form countries={this.state.countries} correctOne={this.state.correctOne}
            onHandleClick={this.handleClick} onHandleSubmit={this.handleSubmit} />}
        </div>
      </div>
    )
  }
}
export default App;
