import React, { Component } from 'react';
import axios from 'axios'
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
state = {
    posts: [],
    selectedPostId: null
}

    componentDidMount () {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(resp => {
            const posts = resp.data.slice(0, 4)
            const updatedPost = posts.map(post => {
                return {
                    ...post, 
                    author: 'bryan'
                }
            })
            this.setState({posts: updatedPost})
            console.log(resp)
        })
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id})
    }

    render () {

        const posts = this.state.posts.map(post => {
            return <Post 
            title={post.title} 
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}/>
        });

        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;