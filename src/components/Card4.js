import React from 'react'

const Card4 = ({cardTitle, cardDesc}) => {
  return (
    <div class="card-tech-management">
                <div class="title">
                    <h3>{cardTitle}</h3>
                    <a href="http://">
                        <img class="info-icon" src="https://i.etsystatic.com/36262552/r/il/d01382/4153357339/il_fullxfull.4153357339_sf4p.jpg" alt="info" />
                    </a>
                </div>
                <div class="card-description">
                    <p>{cardDesc}</p>
                </div>
                <div class="thread-dropdown">
                    <button class="thread-dropdown-btn border-none"><img class="down-arrow" src="https://cdn0.iconfinder.com/data/icons/action-glyph/100/1-40-1024.png" alt="icon" /> Introduction</button>
                    <div className='intro-container'>
                        <p>The 4SA Method, how to bring an idea into progress?</p>
                        <button className='intro-btn'>See more</button>
                    </div>
                    <button class="thread-dropdown-btn border-none"><img class="down-arrow" src="https://cdn0.iconfinder.com/data/icons/action-glyph/100/1-40-1024.png" alt="icon" /> Thread A</button>
                    <div className='intro-container'>
                        <p>How are you going to develop your stratergy ? Which method are you going to use to develop a stratergy ? What if the project is lengthy?</p>
                        <button className='intro-btn'>See more</button>
                    </div>
                </div>
            </div>
  )
}

export default Card4