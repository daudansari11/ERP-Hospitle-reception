import React from "react";
import { FaEye, FaEyeDropper } from "react-icons/fa";
import { Link } from "react-router-dom";
import Print from "../../../../common/print/Print";

function DonorFullDetailsTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Bags</th>
            <th>Institute</th>
            <th>Lot</th>
            <th>Donor Date</th>
            <th>Charge Category</th>
            <th>Charge Name</th>
            <th>Standard Charge ($)</th>
            <th>Apply Charge ($)</th>
            <th>Discount (%)</th>
            <th>Tax (%)</th>
            <th>Net Amount ($)</th>
            <th>Payment Date</th>
            <th>Note</th>
            <th>Payment Mode</th>
            <th>Paid Amount ($)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0032 (220 (ML)) </td>
            <td></td>
            <td>6</td>
            <td>10/04/2022</td>
            <td>Packed Blood Cells</td>
            <td>Blood Module</td>
            <td>110.00 </td>
            <td>110.00 </td>
            <td>(0.00%) 0.00 </td>
            <td>(10.00%) 11.00</td>
            <td>121.00 </td>
            <td>03/27/2023</td>
            <td></td>
            <td>Cash</td>
            <td>121.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <Print />
              </Link>
            </td>
          </tr>

          <tr>
            <td>0032 (220 (ML)) </td>
            <td></td>
            <td>6</td>
            <td>10/04/2022</td>
            <td>Packed Blood Cells</td>
            <td>Blood Module</td>
            <td>110.00 </td>
            <td>110.00 </td>
            <td>(0.00%) 0.00 </td>
            <td>(10.00%) 11.00</td>
            <td>121.00 </td>
            <td>03/27/2023</td>
            <td></td>
            <td>Cash</td>
            <td>121.00</td>
            <td style={{ textAlign: "center" }}>
              <Link
                to="#"
                className="btn btn-primary btn-icon btn-circle btn-sm me-1"
                style={{ backgroundColor: "#2298C1" }}
              >
                <Print />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default DonorFullDetailsTable;
