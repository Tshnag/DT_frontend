import React from 'react'

const Card3 = ({cardTitle, cardDesc}) => {
  return (
    <div class="card-tech-management" id="card-position">
                <div class="title">
                    <h3>{cardTitle}</h3>
                    <a href="http://">
                        <a href="http://">
                            <img class="info-icon" src="https://i.etsystatic.com/36262552/r/il/d01382/4153357339/il_fullxfull.4153357339_sf4p.jpg" alt="info" />
                        </a>
                    </a>
                </div>
                <div class="card-description">
                    <p>{cardTitle}</p>
                </div>
                <div class="pointer-container">
                    <label for="title-input" class="title-label">Title</label>
                    <input type="text" id="title-input"/>
                    <label for="content-input" class="content-label">Content</label>
                    <div class="content-edit-wrap">
                        <ul class="flex-box list-style edit-list">
                            <li><a href="#">File</a></li>
                            <li><a href="#">Edit</a></li>
                            <li><a href="#">View</a></li>
                            <li><a href="#">Insert</a></li>
                            <li><a href="#">Format</a></li>
                            <li><a href="#">Tools</a></li>
                            <li><a href="#">Table</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">UndoImg</a></li>
                            <li><a href="#">RedoImg</a></li>
                            <li><a href="#">FullScreen</a></li>
                            <li><a href="#">Paragraph</a></li>
                            <li><a href="#">Menu</a></li>
                        </ul>
                    </div>
                    <input type="text" id="content-input"/>
                </div>
            </div>
  )
}

export default Card3