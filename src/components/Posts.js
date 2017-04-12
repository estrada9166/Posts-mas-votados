import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Image } from 'react-bootstrap';
import { sumVote, restVote } from '../actionCreators';

const style = {
    imageContainer: {
        'paddingLeft': '0',
        'paddingRight': '0'
    },
    image: {
        'height': '100px',
        'width': '160px',
        'marginTop': '20px'
    },
    votesContainer: {
        'paddingLeft': '35px',
        'marginTop': '35px'
    },
    colorText: {
        'color': 'gray'
    },
    avatarImage: {
        'height': '35px'
    }
}

const PostList = ({ posts, sumVote, restVote }) => {
    return (
        <div>
            {posts.map(post => 
                <Row key={post.id}>
                    <Col md={2} style={style.imageContainer}>
                        <img src={post.post_image_url} alt={post.title} style={style.image}/>
                    </Col>
                    <Col md={1} style={style.votesContainer}>
                        <a role="button" onClick={() => sumVote(post)}><span className="glyphicon glyphicon-chevron-up" /></a>
                        <p>{post.votes}</p>
                        <a role="button" onClick={() => restVote(post)}><span className="glyphicon glyphicon-chevron-down" /></a>
                    </Col>
                    <Col md={8}>
                        <Row>
                            <h3><a href={post.url} target="blank">{post.title}</a></h3>
                        </Row>
                        <Row>
                            <p>{post.description}</p>
                        </Row>
                        <Row>
                            <p style={style.colorText}>Escrito por: <Image style={style.avatarImage} src={post.writer_avatar_url} circle/></p>
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

const mapDispatchToProps = dispatch => {
    return {
        sumVote(post){
            dispatch(sumVote(post));
        },
        restVote(post){
            dispatch(restVote(post));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);