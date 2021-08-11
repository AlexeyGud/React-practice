import React, { useState, useRef } from 'react';
import PostForm from './components/PostForm';
// import ClassCounter from './components/ClassCounter';
// import Counter from './components/Counter';
import PostList from './components/PostList';
import './styles/App.css'


function App() {
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'Description' },
		{ id: 2, title: 'Javascript 2', body: 'Description' },
		{ id: 3, title: 'Javascript 3', body: 'Description' },
	])

	const createPost = (newPost) => {
		setPosts([...posts, newPost])
	}

	const removePost = (post) => {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	return (
		<div className="App" >
			<PostForm create={createPost} />
			{posts.length
				?
				<PostList remove={removePost} posts={posts} title={"Javascript Posts list"} />
				:
				<h1 style={{ textAlign: 'center' }}>
					Empty Posts List!!!
				</h1>
			}

		</div >
	);

}

export default App;
