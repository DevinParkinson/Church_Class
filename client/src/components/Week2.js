import React, { Component } from 'react';
import { Header, List, Modal, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
        <Header as="h1" textAlign="center">
          January 7-13
        </Header>
        <Header as="h2" textAlign="center">
          Luke 2; Matthew 2
        </Header>
        <Header as="h2">
          Who are these people?
        </Header>
        <List bulleted animated verticalAlign="middle">
          <Modal trigger={<List.Item>Elisabeth and Zacharias</List.Item>} closeIcon>
            <Modal.Header>
              Who are Elisabeth and Zacharias?
            </Modal.Header>
            <Modal.Description>
              Parents of John the Baptist. Uncle and Aunt to Jesus and Cousins to Mary and Joseph.
            </Modal.Description>
            <Modal.Description>
              Zacharias was a very righteous man, who worked in the temple. One day he actually was chosen to light the incense in the temple. While there he saw an angel which told him that his wife, Elisabeth, would have a baby. Elisabeth was barren previously so this would be a big miracle. He questioned the angel.
            </Modal.Description>
            <Divider hidden />
            <a href="https://www.lds.org/study/scriptures/nt/luke/1.5-23,59-64?lang=eng#p5" target="_blank" rel="noopener noreferrer">Luke 1: 18-20</a>
            <Divider hidden />
            <iframe width="380" height="315" src="https://www.youtube.com/embed/YUVvTYLgoBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Modal.Description>Thoughts?</Modal.Description>
            <Divider hidden />
            <a href="https://www.lds.org/study/scriptures/nt/luke/1.5-23,59-64?lang=eng#p5" target="_blank" rel="noopener noreferrer">Luke 1: 5-23, 59-64</a>
          </Modal>
          <Modal trigger={<List.Item>Mary and Joseph</List.Item>} closeIcon>
            <Modal.Header>
              Who are Mary and Joseph?
            </Modal.Header>
            <Modal.Description>
              Mary and Joseph were the parents of Jesus Christ. What an amazing responsibility.
            </Modal.Description>
            <List bulleted animated verticalAlign="middle">
              <List.Item>How would you feel to be the parent of the Son of God?</List.Item>
              <List.Item>How would you change how you act imagining your future children?</List.Item>
            </List>
            <Divider hidden />
            <Modal.Description><a href="https://www.lds.org/study/scriptures/nt/luke/1.26-56?lang=eng#p26" target="_blank" rel="noopener noreferrer">Luke 1:26-56</a></Modal.Description>
            <Divider hidden />
            <iframe width="380" height="315" src="https://www.youtube.com/embed/Qq7NFiZL6ak" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <Divider hidden />
            <Modal.Description>Notice that Mary questioned the angel as well, but was not punished like Zacharias. Why not?</Modal.Description>
            <Divider hidden />
          </Modal>
        </List>
        <br/><br/><br/><br/>
        <Header as='h2'>"With God nothing shall be impossible"</Header>
        <List animated verticalAlign="middle">
          <List.Item>What does this mean to you?</List.Item>
        </List>
      </div>
    );
  }
}

export default Home;
