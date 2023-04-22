import JoditEditor from "jodit-react";
import { enqueueSnackbar } from "notistack";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  clearErrors,
  paperUpdateAction,
} from "../../../store/action/dataAction";
// import { clearErrors } from "../../../store/action/userAction";
import EditQuestionPaperCard from "../../AllCard/EditQuestionpaperCard/EditQuestionPaperCard";
import MetaData from "../../MetaData";
import DashBoardquestionCard from "../../questionCard/questionCard";
import QuestionPaperCard from "../QuestionpaperCard/QuestionPaperCard";

import "./PaperEdit.css";

const PaperEdit = () => {
  const location = useLocation();
  const { data } = location.state;
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigateTo = useNavigate();

  const { loading, error, result, message } = useSelector(
    (state) => state.updatePaper
  );
  const dispatch = useDispatch();
  const [updatedData, setUpdatedData] = useState(data);

  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/loginSignup");
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }
    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch(clearErrors());
    }
  }, [error, message, dispatch, isAuthenticated]);

  const [editModeA, seteditModeA] = useState(false);
  const [editModeB, seteditModeB] = useState(false);
  const [editModeC, seteditModeC] = useState(false);

  const [addModeA, setaddModeA] = useState(false);
  const [addModeB, setaddModeB] = useState(false);
  const [addModeC, setaddModeC] = useState(false);

  //EDIT FUNCTIONS
  const sectionA_update = (data) => {
    const newData = { ...updatedData };
    newData.section_A[editModeA] = data;
    setUpdatedData(newData);
    seteditModeA(false);
  };
  const sectionB_update = (data) => {
    const newData = { ...updatedData };
    newData.section_B[editModeB] = data;
    setUpdatedData(newData);
    seteditModeB(false);
  };
  const sectionC_update = (data) => {
    const newData = { ...updatedData };
    newData.section_C[editModeC] = data;
    setUpdatedData(newData);
    seteditModeC(false);
  };

  //add question functiom
  const qaAddfunction_sectionA = (data) => {
    let newData = { ...updatedData };
    newData.section_A.push(data);
    setUpdatedData(newData);
    setaddModeA(false);
  };
  const qaAddfunction_sectionB = (data) => {
    let newData = { ...updatedData };
    newData.section_B.push(data);
    setUpdatedData(newData);
    setaddModeB(false);
  };
  const qaAddfunction_sectionC = (data) => {
    let newData = { ...updatedData };
    newData.section_C.push(data);
    setUpdatedData(newData);
    setaddModeC(false);
  };



  const updateButton = () => {
    dispatch(paperUpdateAction(updatedData, data._id));
    location.state.data = updatedData;
  };

  return (
    <div className="flex-center">
            <MetaData key={"11"} title ={updatedData.name}/>
      <div className="profile-div card-container">
        <p>{updatedData.name}</p>  <p>Year: {updatedData.year}</p>
      </div>
      <h2 className="section-qa">Section A</h2>
      {updatedData.section_A.map((data, currentElement ,index) => {
        return (
          <div key={index} className=" flex-center create-qp-container">
            {editModeA === currentElement ? (
              <EditQuestionPaperCard
              
                data={data}
                qaUpdatefunction={sectionA_update}
              />
            ) : (
              <Fragment>
                <DashBoardquestionCard
                  questionText={data.question}
                  answerText={data.answer}
                />
                <button
                  onClick={() => seteditModeA(currentElement)}
                  className="create-edit-btn"
                >
                  <BsPencilSquare />
                </button>
              </Fragment>
            )}
          </div>
        );
      })}

      {addModeA ? (
        <QuestionPaperCard qaUpdatefunction={qaAddfunction_sectionA} />
      ) : (
        <button className="btn" onClick={() => setaddModeA(true)}>
          Add Question
        </button>
      )}

      <h2 className="section-qa">Section B</h2>
      {updatedData.section_B.map((data, currentElement,index) => {
        return (
          <div key={index} className=" flex-center create-qp-container">
            {editModeB === currentElement ? (
              <EditQuestionPaperCard
                data={data}
                qaUpdatefunction={sectionB_update}
              />
            ) : (
              <Fragment>
                <DashBoardquestionCard
                  questionText={data.question}
                  answerText={data.answer}
                />
                <button
                  onClick={() => seteditModeB(currentElement)}
                  className="create-edit-btn"
                >
                  <BsPencilSquare />
                </button>
              </Fragment>
            )}
          </div>
        );
      })}
      {addModeB ? (
        <QuestionPaperCard qaUpdatefunction={qaAddfunction_sectionB} />
      ) : (
        <button className="btn" onClick={() => setaddModeB(true)}>
          Add Question
        </button>
      )}

      <h2 className="section-qa">Section C</h2>
      {updatedData.section_C.map((data, currentElement , index) => {
        return (
          <div key={index} className=" flex-center create-qp-container">
            {editModeC === currentElement ? (
              <EditQuestionPaperCard
                data={data}
                qaUpdatefunction={sectionC_update}
              />
            ) : (
              <Fragment>
                <DashBoardquestionCard
                  questionText={data.question}
                  answerText={data.answer}
                />
                <button
                  onClick={() => seteditModeC(currentElement)}
                  className="create-edit-btn"
                >
                  <BsPencilSquare />
                </button>
              </Fragment>
            )}
          </div>
        );
      })}
      {addModeC ? (
        <QuestionPaperCard qaUpdatefunction={qaAddfunction_sectionC} />
      ) : (
        <button className="btn" onClick={() => setaddModeC(true)}>
          Add Question
        </button>
      )}
      <button className="btn-main" onClick={updateButton}>
        Submit Data
      </button>
    </div>
  );
};

export default PaperEdit;
