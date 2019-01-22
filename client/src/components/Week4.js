import React, { Component } from 'react'
import { Header, Divider, List } from 'semantic-ui-react'
import Link from 'react-router-dom'

class Week4 extends React.Component {
  render() {
    return(
      <div>
        <Header as="h1" textAlign="center">
          January 21-27, John 1
        </Header>
        <Header as="h2" style={{marginLeft: '4vw', marginTop: '10vh'}}>Who is John?</Header>
          <p style={{marginLeft: '6vw'}}>John was a disciple of John the Baptist and later became one of the first followers of Jesus Christ and one of His Twelve Apostles. He wrote the Gospel of John, several epistles, and the book of Revelation.</p>
      </div>
    )
  }
}

export default Week4
