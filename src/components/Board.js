import React from 'react'

const Board = ({}) => {
  return (
    <div className='journey-board-box'>
        <div className="title board-title">
        <h3>Journey Board</h3>
        <a href="http://">
          <img
            className="info-icon"
            src="https://i.etsystatic.com/36262552/r/il/d01382/4153357339/il_fullxfull.4153357339_sf4p.jpg"
            alt="info"
          />
        </a>
      </div>
      <div className='board-task-box'>
          <ul className='board-list'>
            <li>Technical Project Management</li>
            <li>Thread Build</li>
            <li>Structure your points</li>
            <li>4SA Method</li>
          </ul>
      </div>
    </div>
  )
}

export default Board