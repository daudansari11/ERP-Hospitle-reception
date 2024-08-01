import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";
import BloodBankTab from "./BloodBankTab";
function BloodBank() {
  return (
    <div className="card app_wrap">
      <div className="dataTables_wrapper">
        <div className="row_wrapper app_heading">
          <div className="row">
            <div className="col-md-4">
              <h4>Blood Bank Status</h4>
            </div>
            <div className="col-md-8">
              <div className="d-flex align-item-center justify-content-end">
                <div className="ml-2">
                  <Link
                    className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                    to="/admin/bloodbankstatus/donorDetails"
                  >
                    <span>
                      <IoReorderThree className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                      {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}
                      <span className="d-none d-sm-inline-block">
                        Donor Details
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="ml-2">
                  <Link
                    className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                    to="/admin/bloodbankstatus/blood_issue"
                  >
                    <span>
                      <IoReorderThree className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                      {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}
                      <span className="d-none d-sm-inline-block">
                        Blood Issue Details
                      </span>
                    </span>
                  </Link>
                </div>

                <div className="ml-2">
                  <Link
                    className="btn btn-secondary add-new btn-primary waves-effect waves-light "
                    to="/admin/bloodbankstatus/componentIssue"
                  >
                    <span>
                      <IoReorderThree className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                      {/* <i className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" /> */}
                      <span className="d-none d-sm-inline-block">
                        Component Issue
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BloodBankTab />
      </div>
    </div>
  );
}

export default BloodBank;
