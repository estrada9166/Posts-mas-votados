import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

const style = {
    imageContainer: {
        'paddingLeft': '0'
    },
    image: {
        'height': '100px',
        'width': '160px',
        'marginTop': '20px'
    }
}

const PostList = ({posts}) => {
    return (
        <div>
            {posts.map(post => 
                <Row key={post.id}>
                    <Col md={3} style={style.imageContainer}>
                        <img src={post.post_image_url} alt={post.title} style={style.image}/>
                    </Col>
                    <Col md={1}>
                        <p>{post.votes}</p>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <h3><a href={post.url} target="blank">{post.title}</a></h3>
                        </Row>
                        <Row>
                            <p>{post.description}</p>
                        </Row>
                    </Col>
                </Row>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostList);