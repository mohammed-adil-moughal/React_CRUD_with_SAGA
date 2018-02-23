import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class Postindex extends Component {
    componentDidMount() {
        this.props.fetchPosts();
    }
    renderPosts() {
       return(
        _.map(this.props.posts, post => {
            return (
                    <li 
                        className="list-group-item"
                        key={ post.id }>
                             <Link to={`/posts/${post.id}`}>
                                {post.title}
                             </Link>
                    </li>
            )
        }))
    }
    render() {
        console.log('yale', this.props.posts);
        return (
            <div>
                <div className="text-xs-right">
                <Link className="btn btn-primary" to="/posts/new">
                Add A Post
                </Link>
                    </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    { this.renderPosts() }
                </ul>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPosts: () => dispatch({type: 'fetch_posts_saga'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Postindex);