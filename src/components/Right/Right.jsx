import React from 'react'
import PostItem from './PostItem/PostItem'

const Right = () => {
    const posts = [
        {
            upvote: 547,
            img:"https://images.unsplash.com/photo-1549287748-f095932c9f81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2154&q=80",
            title: "  about the wallet",
            user: "hammer",
            subreddit: "politics",
            comment_count: 284
        }]
  return (
    <div className='posts'>
           {posts.map(post=>(
            <PostItem key={post.title} post={post}/>
           ))}
        </div>
  )
}

export default Right
