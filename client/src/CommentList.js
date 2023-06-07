import React from 'react'

const CommentList = ({comments}) => {

  const renderedComments = Object.values(comments).map((comment) => {
    return (
      <li key={comment.id}>{comment.content}</li>
    )
  })

  return (
    <ul>{renderedComments}</ul>
  ) 
}

export default CommentList