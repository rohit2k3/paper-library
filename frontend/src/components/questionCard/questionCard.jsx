import React from 'react'
import "./questionCard.css"
const DashBoardquestionCard = ({questionText ,answerText}) => {
  return (
    <div className='qa-container'>
        <div className="qaCard border-0">
          <p className='qa-card' dangerouslySetInnerHTML={{ __html: `<b>Question</b>: ${questionText}` }}></p>
          <hr></hr>
          <p className='qa-card' dangerouslySetInnerHTML={{ __html: `<b>Answer</b>: ${answerText}` }}></p>
        </div>
    </div>
  )
}

export default DashBoardquestionCard;