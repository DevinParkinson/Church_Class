import React, { Component } from 'react'
import { Header, Divider, List, Container, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

class Week4 extends React.Component {
  render() {
    return(
      <div>
        <Header as="h1" textAlign="center">
          January 21-27, John 1
        </Header>
        <Container>
          <Header as="h2" style={{marginTop: '10vh'}}>Who is John?</Header>
            <p style={{marginLeft: '6vw'}}>John was a disciple of John the Baptist and later became one of the first followers of Jesus Christ and one of His Twelve Apostles. He wrote the Gospel of John, several epistles, and the book of Revelation.</p>
        </Container>
        <Divider hidden />
        <Container>
          <Header as="h2">Who is <a href="https://www.lds.org/study/scriptures/bd/elias?lang=eng" target="_blank" rel="noopener noreferrer">Elias</a>, and who is “that prophet”?</Header>
        </Container>
        <Divider hidden/>
        <Container>
        <Divider hidden/>
          <Header><a href="https://www.lds.org/study/scriptures/nt/john/1.39,46?lang=eng#p39" target="_blank" rel="noopener noreferrer">"Come and See"</a></Header>
          <p>Elder Neil L. Andersen taught:

          “The Savior taught us how to share the gospel. I like the story of Andrew, who asked, ‘Master, where dwellest thou?’ <a href="https://www.lds.org/study/scriptures/nt/john/1.38?lang=eng#p38" target="_blank" rel="noopener noreferrer">[John 1:38]</a>. Jesus could have responded with the location of where He lived. But instead He said to Andrew, ‘Come and see’ <a href="https://www.lds.org/study/scriptures/nt/john/1.39?lang=eng#p39" target="_blank" rel="noopener noreferrer">[John 1:39]</a>. I like to think that the Savior was saying, ‘Come and see not only where I live but how I live. Come and see who I am. Come and feel the Spirit.’ We don’t know everything about that day, but we do know that when Andrew found his brother Simon, he declared, ‘We have found … the Christ’ <a href="https://www.lds.org/study/scriptures/nt/john/1.41?lang=eng#p41" target="_blank" rel="noopener noreferrer">[John 1:41]</a>.

          “To those who show an interest in our conversations, we can follow the Savior’s example by inviting them to ‘come and see.’ Some will accept our invitation, and others will not. We all know someone who has been invited several times before accepting an invitation to ‘come and see.’ Let’s also think about those who once were with us but who now we rarely see, inviting them to come back and see once more. …

          “For those using the Internet and mobile phones, there are new ways to invite others to ‘come and see.’ Let’s make sharing our faith online more a part of our daily life” (<a href="https://www.lds.org/study/general-conference/2013/04/its-a-miracle?lang=eng&para=p29,p30,p32#p29" target="_blank" rel="noopener noreferrer">“It’s a Miracle,”</a> Ensign or Liahona, May 2013, 79).</p>
          <iframe src='//players.brightcove.net/710874264001/default_default/index.html?videoId=4604552958001' allowFullScreen></iframe>
          <Divider hidden />
        </Container>
        <div style={{marginTop: "10vh"}}><Link style={{marginLeft: "4vw"}} to="/"><Icon name="home" /></Link><a style={{marginLeft: "2vw"}} href="https://www.lds.org/study/manual/come-follow-me-for-individuals-and-families-new-testament-2019/04?lang=eng" target="_blank" rel="noopener noreferrer"><Icon name="book" /></a><Divider vertical hidden /><Link style={{marginLeft: "2vw"}} to="/week3"><Icon name="arrow left" /></Link><Link style={{marginLeft: "2vw"}} to="/week5"><Icon name="arrow right"/></Link></div>
      </div>
    )
  }
}

export default Week4
