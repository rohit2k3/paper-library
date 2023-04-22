import JoditEditor from "jodit-react";
import React, { useState } from "react";
import "./QuestionPaperCard.css"

const QuestionPaperCard = (props) => {
  const config = {
    readonly: false,
    buttons:
      "bold,italic,underline,strike,|,superscript,subscript,|,ul,ol,|,outdent,indent,|,font,fontsize,brush,paragraph,|,image,video,table,link,|,align,undo,redo,\n,selectall,cut,copy,paste",
  };

  const [QAarray, setQAarray] = useState({unit:0,question:"",answer:""})

  const handleUpdateAnswer =   (name,newAnswer) => {
    setQAarray(preData=>({
      ...preData,
      [name]:newAnswer   
    }))
  }
  
  const handleClick = () => {
    props.qaUpdatefunction(QAarray)
  }

  return (
    <div className="question-paper-card">
      <select id="unitSelect" className="select-option" onChange={(e) => handleUpdateAnswer("unit",e.target.value)}>
        <option value="">Select Unit</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <div className="create-answer-div">
        <h3 className="qa-title">Question</h3>
      <JoditEditor
        value={QAarray.question}
        config={config}
        onBlur={(newAnswer) => handleUpdateAnswer("question", newAnswer)}
      />
      </div>
      <div className="create-answer-div">
        <h3 className="qa-title">Answer</h3>
      <JoditEditor
        value={QAarray.answer}
        config={config}
        onBlur={(newAnswer) => handleUpdateAnswer("answer", newAnswer)}
      />
      </div>
      <button className="submit-btn" onClick={handleClick}>Submit</button>
    </div>
  );
};

export default QuestionPaperCard;
