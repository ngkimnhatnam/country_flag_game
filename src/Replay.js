import React, {Component} from 'react';
import './Replay.css';

class Replay extends Component {
  render(){
    const {onHandleFetchAll, correctOne} = this.props;
    return(
      <div className='replay'>
        <p className='congrats'>You got it</p>
        <p className='correct'>{correctOne.name}</p>
        <button onClick={onHandleFetchAll}>Again?</button>
      </div>
    )
  }
}
export default Replay;