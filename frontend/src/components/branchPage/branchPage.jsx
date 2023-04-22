import { enqueueSnackbar } from "notistack";
import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOneSem } from "../../store/action/dataAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import Card from "../card/card";

const BranchPage = () => {
  const { id } = useParams();
  const { error, loading, result } = useSelector((state) => state.semData);
  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      enqueueSnackbar(error);
    }
    dispatch(getOneSem(id));
  }, [id, error, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <h2>Select Branch</h2>
            <div className="card-container">
              {
                result.map(res => {
                  return <Card key={res.subCode} to={`${res.branchShortCode}`} semName={res.branchName} />
                })
              }
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default BranchPage;
