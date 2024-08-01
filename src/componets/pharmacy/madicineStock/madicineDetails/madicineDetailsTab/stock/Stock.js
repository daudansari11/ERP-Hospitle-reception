import React from "react";
import ExportFile from "../../../../../../common/exportFile/ExportFile";
import StockTable from "./StockTable";
import { IoReorderThree } from "react-icons/io5";
import { Link } from "react-router-dom";

function Stock() {
  return (
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
      <StockTable />
    </div>
  );
}

export default Stock;
