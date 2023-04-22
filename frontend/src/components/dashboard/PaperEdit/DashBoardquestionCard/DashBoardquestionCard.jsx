import React, { useState } from "react";
import PaperAnswerCard from "../../paperAnswerCard/paperAnswerCard";
import "./DashBoardquestionCard.css";

const DashBoardquestionCard = ({
  questionText,
  answerText,
  year,
  section,
  unit,
}) => {
  const [editMode, seteditMode] = useState(false);
  return (
    <div
      className={
        editMode ? "expanded mainContainer-editMode" : "mainContainer-editMode"
      }
    >
      <div className="qa-container">
        <fieldset className="field-answer">
          <legend className="legend-btn">
            {
              <button
                className="loginBtn"
                onClick={() => seteditMode(!editMode)}
              >
                {editMode ? "Finish Edit" : "Edit"}
              </button>
            }
          </legend>
          {/* {answerText} */}
          <div>
            <p>{questionText}</p>
            <hr className="hr"></hr>
            <p>{answerText}</p>
          </div>
        </fieldset>
        {editMode ? (
          <PaperAnswerCard
            question={questionText}
            answer={answerText}
            year={year}
            sectionProp={section}
            unitProp={unit}
          />
        ) : (
          ""
        )}
      </div>
      <div className="toggle-container"></div>
    </div>
  );
};

export default DashBoardquestionCard;
