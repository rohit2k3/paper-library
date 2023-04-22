import React, { Fragment, useEffect } from "react";
import DashBoardCard from "../dashBoardCard/DashBoardCard";
import "./paperDashboard.css";
import { useDispatch, useSelector } from "react-redux";
import { enqueueSnackbar } from "notistack";
import { paperData } from "../../store/action/dataAction";
import Loader from "../Loader/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import MetaData from "../MetaData";
const PaperDashboard = () => {
  const { subCode, branchShort } = useParams();
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const { error, loading, result } = useSelector((state) => state.paperReducer);
  const { isAuthenticated } = useSelector((state) => state.user);
  const maxYear = new Date().getFullYear() + 5;
  useEffect(() => {
    if (!isAuthenticated) {
      navigateTo("/loginSignup");
    }
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
    }
    dispatch(paperData(subCode, 2000, maxYear));
  }, [error, dispatch, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="paper-dashboard-container">
            <MetaData key={"11"} title={"Dashboard"} />
            {result.map((res) => {
              return (
                <DashBoardCard
                  key={res._id}
                  data={res}
                  subName={res.name}
                  year={res.year}
                  to={`/dashboard/edit/${branchShort}/${subCode}/${res.year}/${res._id}`}
                  branch={branchShort}
                />
              );
            })}
          </div>

          {result[0] ? (
            <Link
              to={"create"}
              state={{ name: result[0].name, shortName: result[0].shortName }}
              className={"createBtn"}
            >
              + Create
            </Link>
          ) : (
            <></>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default PaperDashboard;
