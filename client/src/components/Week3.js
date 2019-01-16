import React, { Component } from 'react';
import { Header, List, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Week3 extends Component {
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">Week 3, January 14-20</Header>
        <Header as="h2" textAlign="center"><a href="https://www.lds.org/study/scriptures/nt/luke/2?lang=eng" target="_blank" rel="noopener noreferrer">Luke 2</a>; <a href="https://www.lds.org/study/scriptures/nt/matt/2?lang=eng" target="_blank" rel="noopener noreferrer">Matthew 2</a></Header>
        <Header as="h2" style={{ marginLeft: '2vw'}}>Four witnesses of the Christ Child</Header>
          <List bulleted animated style={{marginLeft: '4vw'}}>
            <List.Item>
              Shephards
            </List.Item>
            <List.Item>
              Wise Men
            </List.Item>
            <List.Item>
              Anna
            </List.Item>
            <List.Item>
              Simeon
            </List.Item>
          </List>
          <div style={{marginTop: "18vh"}}><Link style={{marginLeft: "4vw"}} to="/">Home</Link><a style={{marginLeft: "2vw"}} href="https://www.lds.org/study/manual/come-follow-me-for-sunday-school-new-testament-2019/03?lang=eng" target="_blank" rel="noopener noreferrer">Full Lesson Plan</a><Link style={{marginLeft: "2vw"}} to="/week1">Week 1</Link><Divider vertical hidden /><Link style={{marginLeft: "2vw"}} to="/week2">Week 2</Link></div>
      </div>
    )
  }
}

export default Week3
