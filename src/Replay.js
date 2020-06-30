import React, {Component} from 'react';
import './Replay.css';

class Replay extends Component {
  render(){
    const {onHandleFetchAll, correctOne, guessStatus} = this.props;
    return(
      <div className='replay'>
        {guessStatus===1 ? 
          <p className='congrats'>You got it</p>:
          <p className='wrong'>Oh oh! Correct answer:</p>
        }
        <p className='correct'>{correctOne.name}</p>
        <button onClick={onHandleFetchAll}>Again?</button>
      </div>
    )
  }
}
export default Replay;