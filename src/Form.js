import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  render(){
    const {countries, onHandleClick, onHandleSubmit} = this.props;
    let loading = <div>Loading...</div>;
    loading = countries.map(c => (
      <div className='choices'>
        <label htmlFor='names'>{c.name}</label>
        <input type='radio' id='names' name='answer' value={c.name} onClick={onHandleClick}/>
      </div>  
    )) 
    
    return(
      <div className='answerForm'>
        <form onSubmit={onHandleSubmit}>
          <div className='answers'>
            {loading}
          </div>  
          <div className='submitButton'>
            <button>Guess</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;

