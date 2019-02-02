import React, { Component } from 'react'
import { Header, Divider, Icon, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Week5 extends React.Component {
  render() {
    return(
      <div>
        <Header as="h1" textAlign="center">
          January 28-February 3
          </Header>
          <Header as="h1" textAlign="center">
          Matthew 3, Mark 1, Luke 3
          </Header>
          <Container style={{marginTop: '8vh'}}>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/9_dr9njVzKM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </Container>
          <Divider hidden/>
        <Container>
          <Header as="h2">How do we prepare for the visit of an important guest?</Header>
            <p>How do you prepare to receive the Savior in your own life?</p>
            <p>How do you prepare for others to receive the Savior</p>
        </Container>
        <Divider hidden/>
        <Container>
          <Header>Questions on Baptism</Header>
            <p>What do the scriptures teach about the necessity of baptism? <a href="https://www.lds.org/study/scriptures/bofm/3-ne/11.38?lang=eng#p38" target="_blank" rel="noopener noreferrer">(3 Nephi 11:38)</a></p>
            <p>What does baptism by immersion symbolize? (<a href="https://www.lds.org/study/scriptures/nt/rom/6.3-5?lang=eng#p3" target="_blank" rel="noopener noreferrer">Romans 6:3–5</a>)</p>
            <p>How should my baptismal covenants change the way I live? (<a href="https://www.lds.org/study/scriptures/bofm/mosiah/18.8-10?lang=eng#p8" target="_blank" rel="noopener noreferrer">Mosiah 18:8–10</a>)</p>
            <p>Why don’t we baptize infants? (<a href="https://www.lds.org/study/scriptures/bofm/moro/8.8-12?lang=eng#p8" target="_blank" rel="noopener noreferrer">Moroni 8:8–12</a>)</p>
            <p>Why is it important that baptism be performed by someone with authority, not just sincere intent? (<a href="https://www.lds.org/study/scriptures/nt/heb/5.4?lang=eng#p4" target="_blank" rel="noopener noreferrer">Hebrews 5:4</a>)</p>
            <p>If I am already baptized into another church, why do I need to be baptized again? (<a href="https://www.lds.org/study/scriptures/dc-testament/dc/22.1-4?lang=eng#p1" target="_blank" rel="noopener noreferrer">D&C 22:1–4</a>)</p>
            <p>Why must baptism be followed by receiving the gift of the Holy Ghost? (<a href="https://www.lds.org/study/scriptures/nt/john/3.5?lang=eng#p5" target="_blank" rel="noopener noreferrer">John 3:5</a>)</p>
        </Container>
        <Divider hidden />
        <Container>
          <p>Elder Robert D. Hales taught:

“When we understand our baptismal covenant and the gift of the Holy Ghost, it will change our lives and will establish our total allegiance to the kingdom of God. … Entering into the kingdom of God is so important that Jesus was baptized to show us ‘the straitness of the path’ [2 Nephi 31:9]. …

“As we follow the example of Jesus, we, too, demonstrate that we will repent and be obedient in keeping the commandments of our Father in Heaven. We humble ourselves with a broken heart and a contrite spirit as we recognize our sins and seek forgiveness of our trespasses [see 3 Nephi 9:20]. We covenant that we are willing to take upon ourselves the name of Jesus Christ and always remember Him. …

“By choosing to be in [God’s] kingdom, we separate﻿—not isolate﻿—ourselves from the world. Our dress will be modest, our thoughts pure, our language clean. The movies and television we watch, the music we listen to, the books, magazines, and newspapers we read will be uplifting. We will choose friends who encourage our eternal goals, and we will treat others with kindness. We will shun the vices of immorality, gambling, tobacco, liquor, and illicit drugs. Our Sunday activities will reflect the commandment of God to remember the Sabbath day and keep it holy. We will follow the example of Jesus Christ in the way we treat others. We will live to be worthy to enter the house of the Lord”</p>
        </Container>
        <Divider hidden />
        <div style={{marginBottom: "2vh"}}><Link style={{marginLeft: "4vw"}} to="/"><Icon name="home" /></Link><a style={{marginLeft: "2vw"}} href="https://www.lds.org/study/manual/come-follow-me-for-individuals-and-families-new-testament-2019/05?lang=eng" target="_blank" rel="noopener noreferrer"><Icon name="book" /></a><Divider vertical hidden /><Link style={{marginLeft: "2vw"}} to="/week4"><Icon name="arrow left" /></Link><Link style={{marginLeft: "2vw"}} to="/week6"><Icon name="arrow right"/></Link></div>
      </div>
    )
  }
}
export default Week5
