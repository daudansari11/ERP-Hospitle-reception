import React from "react";

import { Link } from "react-router-dom";
import Print from "../../../../common/print/Print";
import DonorFullDetailsTable from "./DonorFullDetailsTable";
import ExportFile from "../../../../common/exportFile/ExportFile";

function DonorFullDetails() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Donor Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link to="/admin/bloodbankstatus/donorDetails" className="back_btn">
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body" id="getdetails">
          <div className="">
            <table className="table  table-bordered ">
              <tbody>
                <tr>
                  <th>Donor Name</th>
                  <td>Gaurav</td>
                  <th>Age</th>
                  <td>
                    <span id="ages">14 Year 4 Month 25 Days</span>
                  </td>
                </tr>
                <tr>
                  <th>Blood Group</th>
                  <td>B-</td>
                  <th>Gender</th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th>Father Name</th>
                  <td>Lokesh Shah</td>
                  <th>Contact No</th>
                  <td>87979798967</td>
                </tr>
                <tr>
                  <th>Date Of Birth</th>
                  <td>03/05/2010</td>
                  <th>Address</th>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="dataTables_wrapper ">
          <div className="row me-2">
            <div className="col-md-4">
              <div className="me-3">
                <div className="dataTables_length d-flex">
                  <label>
                    <select className="form-select">
                      <option value={10}>10</option>
                      <option value={25}>25</option>
                      <option value={50}>50</option>
                      <option value={100}>100</option>
                    </select>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="mt-3" style={{ textAlign: "end" }}>
                <ExportFile />
              </div>
            </div>
          </div>
          <DonorFullDetailsTable />
        </div>
      </div>
    </div>
  );
}

export default DonorFullDetails;
