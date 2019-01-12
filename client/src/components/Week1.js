import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Week1 extends Component {

  render() {
    return(
      <div>
      Since this is the first week but there really is not a lesson. I will just leave this...
      <a href="https://www.lds.org/study/manual/come-follow-me-for-individuals-and-families-new-testament-2019/02?lang=eng" target="_blank" rel="noopener noreferrer"> Actual week lesson</a>
      <div>
        <Link to="/">Back</Link>
      </div>
      </div>
    )
  }
}

export default Week1
