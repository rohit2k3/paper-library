import React, { Fragment, useEffect } from "react";
import Card from "../card/card";
import "./home.css";
import { useSelector, useDispatch } from "react-redux";
import { enqueueSnackbar } from "notistack";
import Loader from "../Loader/Loader";
import { clearErrors, getHomeData } from "../../store/action/dataAction";
import MetaData from "../MetaData";

const Home = () => {
  const dispatch = useDispatch();

  const { error, result, loading } = useSelector((state) => state.homeData);

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error, { variant: "error" });
      dispatch(clearErrors())
    }
    dispatch(getHomeData());
  }, [error, dispatch]);

  // Use Set to store unique branch names
  const uniqueBranchNames = new Set();
  result.forEach((semData) => {
    semData.subjects.forEach((branchData) => {
      uniqueBranchNames.add(branchData.branchName);
    });
  });

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>
            <MetaData key={"11"} title ={"Question Paper"}/>
            <div className="card-container">
              {result.map((semData) => {
                return (
                  <fieldset key={semData._id} className="home-field">
                    <legend className="home-legend">Semester {semData.semName}</legend>
                    {Array.from(uniqueBranchNames).map((branchName) => {
                      // Only render Card component if the branch name matches
                      if (semData.subjects.some((branchData) => branchData.branchName === branchName)) {
                        const branchShortCode = semData.subjects.find((branchData) => branchData.branchName === branchName).branchShortCode;
                        return (
                          <Card
                            key={branchName}
                            to={`${semData._id}/${branchShortCode}`}
                            semName={branchName}
                          />
                        );
                      }
                      return null;
                    })}
                  </fieldset>
                );
              })}
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
