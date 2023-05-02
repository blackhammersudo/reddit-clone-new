import React from 'react'
import './PostItem.css'

export default function Postitem(props) {
    const {title,upvote,img,user,subreddit,comment_count}=props.post
  return (
    <div className='post'>
        <div className='post_left'>
            <i className='fas fa-caret-up'></i>
            <span>{upvote}</span>
            <i className='fas fa-caret-down'></i>
        </div>

        <div className='post_center'>
        <img src={img} alt=''></img>
        </div>

        <div className='post_right'>
            <h3><a href={`/r/${subreddit}/${title}`}>{title}</a></h3>
            <span className='post_info'>
                submited an hour ago by
                {" "}<a href={`/u/${user}`}>{user}</a>
                {" "}to{" "}
                <a href={`/r/${subreddit}`}>{subreddit}</a>
            </span>
            <p className='post_info'>
                {comment_count} comment | share |save |report
            </p>
        </div>
        
    </div>
  )
}