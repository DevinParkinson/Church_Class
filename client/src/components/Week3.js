import React, { Component } from 'react';
import { Header, List, Divider, Icon } from 'semantic-ui-react';
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
          <Divider hidden />
          <div style={{marginLeft: '2vw'}}>
            <Header as="h2">
              Jesus developed “in wisdom and stature, and in favour with God and man”?
            </Header>
            <a href="https://www.lds.org/study/scriptures/nt/luke/2.52?lang=eng#p52" target="_blank" rel="noopener noreferrer">Luke 2:52</a>
            <a href="https://www.lds.org/study/scriptures/dc-testament/dc/93.13?context=12-14?lang=eng&context=12-14#p13" target="_blank" rel="noopener noreferrer">D&C 93:12-14</a>
            <p>How does it make a difference to us that Christ went from grace to grace?</p>
          </div>
          <div style={{marginTop: "18vh"}}><Link style={{marginLeft: "4vw"}} to="/"><Icon name="home" /></Link><a style={{marginLeft: "2vw"}} href="https://www.lds.org/study/manual/come-follow-me-for-individuals-and-families-new-testament-2019/03?lang=eng" target="_blank" rel="noopener noreferrer"><Icon name="book" /></a><Divider vertical hidden /><Link style={{marginLeft: "2vw"}} to="/week2"><Icon name="arrow left" /></Link></div>
      </div>
    )
  }
}

export default Week3
