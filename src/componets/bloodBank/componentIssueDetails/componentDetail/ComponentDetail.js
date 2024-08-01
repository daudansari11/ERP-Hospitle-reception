import React from "react";
import Print from "../../../../common/print/Print";
import { Link } from "react-router-dom";


function ComponentDetail() {
  return (
    <div className="patient_profile_main_sec">
      <div className="prescription_header_sec">
        <div>
          <h4>Component Issue Details</h4>
        </div>
        <div>
          <div className="d-flex" style={{ alignItems: "center" }}>
            <div className="mr-2">
              <Print />
            </div>
            <Link
              to="/admin/bloodbankstatus/componentIssue"
              className="back_btn"
            >
              Back
            </Link>
          </div>
        </div>
      </div>
      <div className="prescription_body_sec">
        <div className="modal-body min-h-3">
          <div className="row">
            <div className="col-md-6">
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <th width="15%">Bill No</th>
                    <td width="35%">BIB567</td>
                    <th width="15%" />
                    <td width="35%" />
                  </tr>
                  <tr>
                    <th width="15%">Received To</th>
                    <td width="35%">Ashutosh pandey (578)</td>
                    <th width="15%">Bags</th>
                    <td width="35%">45223 (220 7)</td>
                  </tr>
                  <tr>
                    <th width="15%">Issue Date</th>
                    <td width="35%">07/30/2024 04:30 PM</td>
                    <th width="15%">Blood Group</th>
                    <td width="35%">A+</td>
                  </tr>
                  <tr>
                    <th width="15%">Component</th>
                    <td width="35%">Plasma</td>
                    <th width="15%" />
                    <td width="35%" />
                  </tr>
                  <tr>
                    <th width="15%">Technician</th>
                    <td width="35%" colSpan={3} />
                    <td colSpan={2} />
                  </tr>
                  <tr>
                    <th width="15%">Note</th>
                    <td width="85%" colSpan={3} />
                  </tr>
                  <tr />
                </tbody>
              </table>
            </div>
            <div className="col-md-6">
              <table className="table table-striped table-hover">
                <tbody>
                  <tr>
                    <th width="15%">Amount</th>
                    <td width="35%" className="text text-right">
                      $110.00
                    </td>
                  </tr>
                  <tr>
                    <th width="15%">Discount (0.00%)</th>
                    <td width="35%" className="text text-right">
                      0.00
                    </td>
                  </tr>
                  <tr>
                    <th width="15%">Tax (10.00%)</th>
                    <td width="35%" className="text text-right">
                      11.00
                    </td>
                  </tr>
                  <tr>
                    <th width="15%">Net Amount</th>
                    <td width="35%" className="text text-right">
                      $121.00
                    </td>
                  </tr>
                  <tr>
                    <th width="15%">Paid Amount</th>
                    <td width="35%" className="text text-right">
                      $121.00
                    </td>
                  </tr>
                  <tr>
                    <th width="15%">Balance Amount</th>
                    <td width="35%" className="text text-right">
                      $0.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentDetail;
