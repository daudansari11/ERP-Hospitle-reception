import React from "react";

function ComponentListTable() {
  return (
    <div className="" style={{ overflow: "auto" }}>
      <table className="table py-1 px-1">
        <thead className="border-top">
          <tr>
            <th> Name</th>
            <th>Blood Group</th>
            <th>Bags</th>
            <th> Lot</th>
            <th>Institution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Plasma </td>
            <td> B-</td>
            <td> 3421 (220 7)</td>
            <td>2</td>
            <td>Blood Red Cross Society</td>
          </tr>

          <tr>
            <td>Platelets </td>
            <td> B-</td>
            <td> 6742 (220 1)</td>
            <td>2</td>
            <td>Blood Red Cross Society</td>
          </tr>

          <tr>
            <td>Red Cells </td>
            <td> O-</td>
            <td>908907 (220 1)</td>
            <td>2</td>
            <td></td>
          </tr>

          <tr>
            <td>White Cells & Granulocytes </td>
            <td> O-</td>
            <td> 3421 (220 7)</td>
            <td>2</td>
            <td></td>
          </tr>

          <tr>
            <td>Platelets </td>
            <td> AB-</td>
            <td> 3421 (220 7)</td>
            <td>2</td>
            <td>Blood Red Cross Society</td>
          </tr>
          <tr>
            <td>Platelets </td>
            <td> AB-</td>
            <td> 3421 (220 7)</td>
            <td>2</td>
            <td>Blood Red Cross Society</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ComponentListTable;
