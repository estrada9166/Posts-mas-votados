import React, { Component } from 'react';
import './App.css';
import { PageHeader, Row, Col } from 'react-bootstrap';
import Filter from './components/SortPosts';
import PostList from './components/Posts'

const styles = {
  title: {
    'textAlign': 'center'
  }
}

class App extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col md={8} mdOffset={2}>
            <PageHeader style={styles.title}>
                Blog posts populares
            </PageHeader>
          </Col>
        </Row>    
        <Row>
          <Col md={8} mdOffset={2}>
            <Filter />
          </Col>
        </Row>
        <Row>
          <Col md={8} mdOffset={2}>
            <PostList />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
