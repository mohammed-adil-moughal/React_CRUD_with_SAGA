import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost,deletePost } from '../actions';
import { Link } from 'react-router-dom';
class PostsShow extends Component {

    componentDidMount()
    {   
        const {id} = this.props.match.params;
        this.props.fetchPost(id);
    }
    onDeleteClick()
    {
        const {id}= this.props.match.params;

        this.props.deletePost(id);
        console.log('ondelete click',this.props);
       this.props.history.push('/');

    }
    render() {
        const post =this.props.post;
        
        if(!post){
            return<div>Loading...</div>
        }
        return (
            <div>
                <Link to="/">Back</Link>
                <button
                    className="btn  pull-right"
                    onClick={this.onDeleteClick.bind(this)}>
                Delete
                </button>
           <h1>{post.title}</h1>
           <h1>{post.categories}</h1>
           <h1>{post.content}</h1>
           
     </div>
        )
    }
}

function mapStateToProps({ posts },ownProps){
    return { post: posts[ownProps.match.params.id]};
}

const mapDispatchToProps = dispatch => {
    return {
        fetchPost: (id) => dispatch({type: 'fetch_post_saga', payload:{id: id}}),
        deletePost:(id)=>dispatch({type:'delete_post_saga',payload:{id:id}}),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostsShow);