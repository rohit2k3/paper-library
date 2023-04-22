import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DashBoardquestionCard from "../../questionCard/questionCard";
import QuestionPaperCard from "../QuestionpaperCard/QuestionPaperCard";
import { BsPencilSquare } from "react-icons/bs";
import "./Create.css";
import EditQuestionPaperCard from "../../AllCard/EditQuestionpaperCard/EditQuestionPaperCard";
import Loader from "../../Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, paperCreateAction } from "../../../store/action/dataAction";
import { enqueueSnackbar } from "notistack";
import MetaData from "../../MetaData";

const Create = () => {
  const location = useLocation();
  const navigateTo = useNavigate();

  const { name, shortName } = location.state;
  const [addModeA, setaddModeA] = useState(false);
  const [editModeA, seteditModeA] = useState(false);
  const [editModeB, seteditModeB] = useState(false);
  const [editModeC, seteditModeC] = useState(false);

  const [addModeB, setaddModeB] = useState(false);
  const [addModeC, setaddModeC] = useState(false);
  const [section_A, setsection_A] = useState([]);
  const [section_B, setsection_B] = useState([]);
  const [section_C, setsection_C] = useState([]);
  const [year, setyear] = useState(0);

  const yearArray = [];

  const dispatch = useDispatch();

  const {loading , error, message , result} = useSelector(state => state.updatePaper)
  const {isAuthenticated} = useSelector(state => state.user)

  const currentYear = new Date().getFullYear();

  for (let oldYear = 2010; oldYear <= currentYear; oldYear++) {
    yearArray.push(oldYear);
  }

  const yearHandle = (e) => {
    setyear(e.target.value);
  };

  const qaeditfuncA = (data) => {
    setsection_A((preData) => {
      const newData = [...preData];
      newData[editModeA] = data;
      return newData;
    });
    seteditModeA(false);
  };
  const qaeditfuncB = (data) => {
    setsection_B((preData) => {
      const newData = [...preData];
      newData[editModeB] = data;
      return newData;
    });
    seteditModeB(false);
  };
  const qaeditfuncC = (data) => {
    setsection_C((preData) => {
      const newData = [...preData];
      newData[editModeC] = data;
      return newData;
    });
    seteditModeC(false);
  };

  const qaUpdatefunction = (data) => {
    setsection_A((preData) => [...preData, data]);
    setaddModeA(false);
  };
  const qaUpdateSectionB = (data) => {
    setsection_B((preData) => [...preData, data]);
    setaddModeB(false);
  };
  const qaUpdateSectionC = (data) => {
    setsection_C((preData) => [...preData, data]);
    setaddModeC(false);
  };

  const createPaperData = {
    name,
    year,
    shortName,
    section_A: section_A,
    section_B: section_B,
    section_C: section_C,
  };

  const createHandle = () => {
    console.log(createPaperData);
    dispatch(paperCreateAction(createPaperData));
  }

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors());
    }

    if (message) {
      enqueueSnackbar(message, { variant: "success" });
      dispatch(clearErrors());
    }

    if (!isAuthenticated) {
      navigateTo("/loginSignup");
    }
  }, [isAuthenticated, message ,error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex-center">
          <MetaData title ={"Create Question Paper"}/>
          <div className="profile-div card-container">
            <p>{name}</p>
            <select id="year" onChange={(e) => yearHandle(e)} value={year}>
              <option value="0">Select Year</option>
              {yearArray.map((data) => {
                return <option key={data} value={data}>{data}</option>;
              })}
            </select>
          </div>
          <h2 className="section-qa">Section A</h2>
          {section_A.map((data, currentElement ,index) => {
            return (
              <div key={index} className=" flex-center create-qp-container">
                {editModeA === currentElement ? (
                  <EditQuestionPaperCard
                    data={data}
                    qaUpdatefunction={qaeditfuncA}
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
            <QuestionPaperCard qaUpdatefunction={qaUpdatefunction} />
          ) : (
            <button className="btn" onClick={() => setaddModeA(true)}>
              Add Question
            </button>
          )}

          <h2 className="section-qa">Section B</h2>
          {section_B.map((data, currentElement ,index) => {
            return (
              <div key={index} className=" flex-center create-qp-container">
                {editModeB === currentElement ? (
                  <EditQuestionPaperCard
                    data={data}
                    qaUpdatefunction={qaeditfuncB}
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
            <QuestionPaperCard qaUpdatefunction={qaUpdateSectionB} />
          ) : (
            <button className="btn" onClick={() => setaddModeB(true)}>
              Add Question
            </button>
          )}

          <h2 className="section-qa">Section C</h2>
          {section_C.map((data, currentElement,index) => {
            return (
              <div key={index} className=" flex-center create-qp-container">
                {editModeC === currentElement ? (
                  <EditQuestionPaperCard
                    data={data}
                    qaUpdatefunction={qaeditfuncC}
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
            <QuestionPaperCard qaUpdatefunction={qaUpdateSectionC} />
          ) : (
            <button className="btn" onClick={() => setaddModeC(true)}>
              Add Question
            </button>
          )}
          <button onClick={createHandle} className="btn-main">Create Paper</button>
        </div>
      )}
    </Fragment>
  );
};

export default Create;
