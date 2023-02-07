import { BiUpload } from "react-icons/bi";

const ApplyForm = () => {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">Apply for (Job Position Name)</h1>
      <form action="">
        <div className="row mb-3">
          <div class="col-md-6">
            <label for="" class="form-label">
              First name
            </label>
            <input type="text" class="form-control" id="" value="" required />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Last name
            </label>
            <input type="text" class="form-control" id="" value="" required />
          </div>
        </div>
        <div className="row mb-3">
          <div class="col-md-6">
            <label for="" class="form-label">
              First name
            </label>
            <input type="text" class="form-control" id="" value="" required />
          </div>
          <div class="col-md-6">
            <label for="" class="form-label">
              Last name
            </label>
            <input type="text" class="form-control" id="" value="" required />
          </div>
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            <BiUpload size={24} /> Upload Your CV
          </label>
          <input
            type="file"
            class="form-control"
            name=""
            id=""
            placeholder=""
            aria-describedby="fileHelpId"
          />
        </div>
        <div className="d-flex gap-2">
          <button type="submit" class="btn btn-primary btn-danger">
            Submit
          </button>
          <button type="submit" class="btn btn-danger">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default ApplyForm;
