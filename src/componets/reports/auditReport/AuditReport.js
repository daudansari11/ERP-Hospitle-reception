// import AuditReportForm from "./AuditReportForm";
import { Link } from "react-router-dom";
import AuditReportTable from "./AuditReportTable";
import { AiTwotoneDelete } from "react-icons/ai";

function AuditReport() {
  return (
    <div className="card app_wrap">
      <div className="dataTables_wrapper ">
        <div className="row_wrapper app_heading">
          <div className="row">
            <div className="col">
              <h4>Audit Trail Report List</h4>
            </div>
            <div className="col">
              <div className="d-flex align-item-center justify-content-end">
                <Link
                  className="btn btn-secondary add-new btn-primary waves-effect waves-light"
                  to=""
                >
                  <span>
                    <AiTwotoneDelete className="ti ti-plus me-0 me-sm-1 ti-xs mb-1" />
                    <span className="d-none d-sm-inline-block">Delete All</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <AuditReportForm /> */}
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
          {/* <div className="col-md-8">
            <div className="mt-3" style={{ textAlign: "end" }}>
              <ExportFile />
            </div>
          </div> */}
        </div>
        <AuditReportTable />
      </div>
    </div>
  );
}

export default AuditReport;
