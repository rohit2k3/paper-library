import { enqueueSnackbar } from "notistack";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, paperData } from "../../store/action/dataAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { YearRangePicker } from "react-year-range-picker";
import "./paperPage.css";
import DashBoardquestionCard from "../questionCard/questionCard";
import FilterButtons from "./filterButton/filterButton";

const PaperPage = () => {
  const { subCode, branchShort } = useParams();
  const [unit, setunit] = useState(0);
  const [yearRange, setYearRange] = useState({
    startYear: new Date().getFullYear() - 1,
    endYear: new Date().getFullYear(),
  });
  const { error, loading, result } = useSelector((state) => state.paperReducer);

  // const [unitactiveButton, setUnitActiveButton] = useState("All");

  // handle button click
  const unitHandle = (button) => {
    setunit(button);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    
    dispatch(
      paperData(subCode, yearRange.startYear, yearRange.endYear, branchShort)
    );
    if (error) {
      enqueueSnackbar(error);
      dispatch(clearErrors())
    }
  }, [yearRange, dispatch, unit]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="centre-div">
            <h2>{result[0] ? result[0].name : "Data not Found" }</h2>
            <fieldset key={101} className="select-field">
              <legend className="select-legend">Select Unit and Year</legend>
              <div className="unit-container">
                <FilterButtons
                  buttons={[0, 1, 2, 3, 4, 5]}
                  activeButton={unit}
                  onClick={unitHandle}
                />
              </div>
              <YearRangePicker
                minYear={new Date().getFullYear() - 10}
                maxYear={new Date().getFullYear()}
                onSelect={(startYear, endYear) => {
                  setYearRange({ startYear, endYear });
                }}
                startYear={yearRange?.startYear}
                endYear={yearRange?.endYear}
                style={{ maxWidth: "300px", width: "100%" }}
                classNames="custom-year-range-picker"
                selectedColor="#0963b5"
              />
            </fieldset>

            <div className="card-container-paper-page">
              {result.map((allres, index) => {
                return (
                  <div key={index} className="card-container-paper-page">
                    <h2 className="year-qa">{allres.year}</h2>
                    <h2 className="section-qa">Section A</h2>

                    {allres.section_A.map((sectionA) => {
                      if (unit === 0) {
                        return (
                          <DashBoardquestionCard
                            key={sectionA._id}
                            questionText={sectionA.question}
                            answerText={sectionA.answer}
                          />
                        );
                      }
                      if (sectionA.unit === unit) {
                        return (
                          <DashBoardquestionCard
                            key={sectionA._id}
                            questionText={sectionA.question}
                            answerText={sectionA.answer}
                          />
                        );
                      }
                    })}
                    <h2 className="section-qa">Section B</h2>
                    {allres.section_B.map((sectionB) => {
                      if (unit === 0) {
                        return (
                          <DashBoardquestionCard
                            key={sectionB._id}
                            questionText={sectionB.question}
                            answerText={sectionB.answer}
                          />
                        );
                      }
                      if (sectionB.unit === unit) {
                        return (
                          <DashBoardquestionCard
                            key={sectionB._id}
                            questionText={sectionB.question}
                            answerText={sectionB.answer}
                          />
                        );
                      }
                    })}
                    <h2 className="section-qa">Section C</h2>
                    {allres.section_C.map((sectionC) => {
                      if (unit === 0) {
                        return (
                          <DashBoardquestionCard
                            key={sectionC._id}
                            questionText={sectionC.question}
                            answerText={sectionC.answer}
                          />
                        );
                      }
                      if (sectionC.unit === unit) {
                        return (
                          <DashBoardquestionCard
                            key={sectionC._id}
                            questionText={sectionC.question}
                            answerText={sectionC.answer}
                          />
                        );
                      }
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default PaperPage;
