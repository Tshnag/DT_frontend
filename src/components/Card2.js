import React from "react";

const Card2 = ({ cardTitle, cardDesc }) => {
  return (
    <div className="card-threadbuild card-tech-management">
      <div className="title">
        <h3>{cardTitle}</h3>
        <img
          className="info-icon"
          src="https://i.etsystatic.com/36262552/r/il/d01382/4153357339/il_fullxfull.4153357339_sf4p.jpg"
          alt="info"
        />
      </div>
      <div className="card-description">
        <p>{cardDesc}</p>
      </div>
      <div className="thread-dropdown">
        <button className="thread-dropdown-btn border-none">
          <img
            className="down-arrow"
            src="https://cdn0.iconfinder.com/data/icons/action-glyph/100/1-40-1024.png"
            alt="icon"
          />
          Thread A
        </button>
        <div className="thread-container">
          <div className="thread-info">
            <div className="sub-thread">
              <label className="border-rad" for="sub-thread-input">
                Sub thread 1
              </label>
              <input
                type="text"
                name=""
                id="thread-info"
                placeholder="Enter text here"
              />
            </div>
            <div className="sub-interpretation">
              <label className="border-rad" for="sub-thread-input">
                Sub Interpretation 1
              </label>
              <input
                type="textarea"
                name=""
                id="thread-info"
                placeholder="Enter text here"
              />
            </div>
          </div>
          <div className="select-box">
            <ul>
              <li>
                <a href="">
                  <img src="" alt="ic" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt="ic" />
                </a>
              </li>
              <li>
                <a href="">
                  <img src="" alt="ic" />
                </a>
              </li>
            </ul>
            <select name="categ" id="catg">
              <option value="select catg" default>
                select categ
              </option>
            </select>
            <select name="proc" id="proc">
              <option value="select process" default>
                select process
              </option>
            </select>
          </div>
          <button className="submit-btn">Sub-thread</button>
          <div className="sub-thread summary-thread">
            <div className="summary-title-div">
              <span>Summary for Thread A</span>
            </div>
            <input type="text" name="" id="" placeholder="Enter text here" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
