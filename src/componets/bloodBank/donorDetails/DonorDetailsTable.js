import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

function DonorDetailsTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Donor Name</th>
            <th> Date of Birth</th>
            <th> Blood Group</th>
            <th>Gender</th>
            <th>Phone</th>
            <th>Father Name</th>
            <th>Address</th>

            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Link to="/admin/bloodbankstatus/donorDetails/donorFullDetails">
                Gaurav
              </Link>
            </td>
            <td> 03/05/2010 </td>
            <td>B-</td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Lokesh Shah</td>

            <td></td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/donorDetails/donorFullDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/bloodbankstatus/donorDetails/donorFullDetails">
                Oliver
              </Link>
            </td>
            <td> 03/05/2010 </td>
            <td>B+</td>
            <td>Male</td>
            <td>9552554252</td>
            <td> Shah</td>

            <td>UK</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/donorDetails/donorFullDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/bloodbankstatus/donorDetails/donorFullDetails">
                Ahemad
              </Link>
            </td>
            <td> 03/05/2010 </td>
            <td>B-</td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Lokesh Shah</td>

            <td></td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/donorDetails/donorFullDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/bloodbankstatus/donorDetails/donorFullDetails">
                Meera
              </Link>
            </td>
            <td> 03/05/2010 </td>
            <td>AB+</td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Lokesh Shah</td>

            <td>Main Street, Apt. Central Brooklyn</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/donorDetails/donorFullDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/bloodbankstatus/donorDetails/donorFullDetails">
                Niklesh
              </Link>
            </td>
            <td>01/05/1999</td>
            <td> O-</td>
            <td>Male</td>
            <td>9552554252</td>
            <td>Grame Smith</td>

            <td>Main Street, Apt. Central</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/donorDetails/donorFullDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
                  </Link>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <Link to="/admin/bloodbankstatus/donorDetails/donorFullDetails">
                Sar
              </Link>
            </td>
            <td> 03/05/2010 </td>
            <td>B-</td>
            <td>Male</td>
            <td>9552554252</td>
            <td>George</td>

            <td>England</td>

            <td style={{ textAlign: "center" }}>
              <div className="d-flex">
                <div>
                  <Link
                    to="/admin/bloodbankstatus/donorDetails/donorFullDetails"
                    className="btn btn-primary  btn-icon btn-circle btn-sm me-1"
                  >
                    <FaEye />
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

export default DonorDetailsTable;
