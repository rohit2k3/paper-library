import { enqueueSnackbar } from "notistack";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneSemSubjects } from "../../store/action/dataAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Card from "../card/card";
import MetaData from "../MetaData";

const SubjectPage = () => {
  const { id, branchShort } = useParams();
  const { error, loading, result } = useSelector((state) => state.semSubject);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
    dispatch(getOneSemSubjects(id, branchShort));
  }, [id, error, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
          <MetaData key={"11"} title ={"Select Subject"}/>
            <div className="card-container">
              <fieldset className="home-field">
                <legend className="home-legend">Select Subject </legend>
                {result.map((res) => {
                  return (
                    <Card
                      key={res._id}
                      to={`${res.subCode}`}
                      semName={res.subjectName}
                    />
                  );
                })}
              </fieldset>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SubjectPage;
