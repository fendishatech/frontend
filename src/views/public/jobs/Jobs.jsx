import { Link } from "react-router-dom";
import { Logo } from "../../../assets/Images";

const Jobs = () => {
  return (
    <div>
      <div className="section-title mt-4">
        <span>We are Hiring!</span>
        <h2>We are Hiring!</h2>
        <p>We are looking for qualified talent in the following job posts</p>
      </div>
      <JobCard />
      <JobCard />
    </div>
  );
};

export default Jobs;

const JobCard = () => {
  return (
    <div className="container job-card-shadow p-4">
      <div className="row">
        <div className="col-md-2">
          <img className="img-fluid" src={Logo} alt="" />
        </div>
        <div className="col-md-7">
          <div className="d-flex flex-column">
            <h2>Job Title</h2>
            <div className="d-flex justify-content-between">
              <p>Zerihun Associates</p>
              <p>Location</p>
              <p>Deadline</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 d-flex flex-column gap-3">
          <button className="btn btn-outline-success px-5 rounded-pill">
            Full Time
          </button>
          <Link
            to="/jobs/2"
            className="btn btn-outline-success px-5 rounded-pill"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};
