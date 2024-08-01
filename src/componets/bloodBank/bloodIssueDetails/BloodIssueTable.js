import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";

function BloodIssueTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Bill No</th>
            <th> Case Id</th>
            <th>Issue Date</th>
            <th>Receive To</th>
            <th>Blood Group</th>
            <th>Gender</th>
            <th>Donor Name</th>
            <th>Bags</th>
            <th>Blood Qty</th>
            <th>Net Amount ($)</th>
            <th>Paid Amount ($)</th>
            <th>Balance Amount ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>BIB568</td>
            <td> 115</td>
            <td> 07/02/2024 11:17 AM</td>
            <td> Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>

            <td>Ahemad</td>
            <td>5463 (220 1)</td>
            <td></td>
            <td>121.00 </td>
            <td>121.00 </td>
            <td>00.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/blood_issue/DetailsIssueBlood"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-secondary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaPlus />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td> 115</td>
            <td> 07/02/2024 11:17 AM</td>
            <td> Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>

            <td>Ahemad</td>
            <td>5463 (220 1)</td>
            <td></td>
            <td>121.00 </td>
            <td>121.00 </td>
            <td>00.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/blood_issue/DetailsIssueBlood"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-secondary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaPlus />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td> 115</td>
            <td> 07/02/2024 11:17 AM</td>
            <td> Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>

            <td>Ahemad</td>
            <td>5463 (220 1)</td>
            <td></td>
            <td>121.00 </td>
            <td>121.00 </td>
            <td>00.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/blood_issue/DetailsIssueBlood"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-secondary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaPlus />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td> 115</td>
            <td> 07/02/2024 11:17 AM</td>
            <td> Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>

            <td>Ahemad</td>
            <td>5463 (220 1)</td>
            <td></td>
            <td>121.00 </td>
            <td>121.00 </td>
            <td>00.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/blood_issue/DetailsIssueBlood"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-secondary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaPlus />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>BIB568</td>
            <td> 115</td>
            <td> 07/02/2024 11:17 AM</td>
            <td> Olivier Thomas (1)</td>
            <td>A+</td>
            <td>Male</td>

            <td>Ahemad</td>
            <td>5463 (220 1)</td>
            <td></td>
            <td>121.00 </td>
            <td>121.00 </td>
            <td>00.00 </td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/blood_issue/DetailsIssueBlood"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>

                <div>
                  <Link
                    to="/admin/Bill/bloodIssue/PaymentBlood"
                    className="btn btn-secondary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaPlus />
                  </Link>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default BloodIssueTable;
