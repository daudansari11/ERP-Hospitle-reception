import React from "react";

function BloodAbMinus() {
  return (
    <div className="tab-pane">
      <div id="bloodGroupDiv" className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="blood-body">
            <div className="blood-pull-left blood-title">Blood</div>
            <div className="blood-pull-right blood-title">8 Bags </div>
          </div>
          <div className="tableFixHead">
            <table className="table table-hover table-bordered bloodtable">
              <thead>
                <tr className="active">
                  <th>Bags</th>
                  <th>Lot</th>
                  <th>Institution</th>
                  <th className="text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1456 (220 (ML))</td>
                  <td>2</td>
                  <td>Blood Red Cross Society</td>
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>2345 (220 g/dl)</td>
                  <td>2</td>
                  <td />
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>30214 (220 (ML))</td>
                  <td>2</td>
                  <td />
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>23110 (220 (ML))</td>
                  <td>2</td>
                  <td />
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>16744 (220 g/dl)</td>
                  <td>2</td>
                  <td />
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>3411 (220 (ML))</td>
                  <td>2</td>
                  <td />
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>1360 (220 g/dl)</td>
                  <td>2</td>
                  <td />
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>7585 (220 g/dl)</td>
                  <td>2</td>
                  <td />
                  <td width="10%" className="text-right" />
                </tr>
              </tbody>
            </table>
          </div>
          {/*./table-responsive*/}
        </div>
        {/*./col-lg-6*/}
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="blood-body">
            <div className="blood-pull-left blood-title">Components</div>
            <div className="blood-pull-right blood-title">8 Bags</div>
          </div>
          <div className="tableFixHead">
            <table className="table table-hover table-bordered bloodtable">
              <thead>
                <tr className="active">
                  <th>Bags</th>
                  <th>Lot</th>
                  <th>Components</th>
                  <th width="10%">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>45102 (220 g/dl)</td>
                  <td>2</td>
                  <td>Cryo.</td>
                  <td />
                </tr>
                <tr>
                  <td>6523 (220 g/dl)</td>
                  <td>2</td>
                  <td>Plasma</td>
                  <td />
                </tr>
                <tr>
                  <td>5334 (220 g/dl)</td>
                  <td>2</td>
                  <td>Red Cells</td>
                  <td />
                </tr>
                <tr>
                  <td>1204 (220 g/dl)</td>
                  <td>2</td>
                  <td>Plasma</td>
                  <td />
                </tr>
                <tr>
                  <td>1652 (220 (ML))</td>
                  <td>2</td>
                  <td>Plasma</td>
                  <td />
                </tr>
                <tr>
                  <td>1652 (220 (ML))</td>
                  <td>2</td>
                  <td>Plasma</td>
                  <td />
                </tr>

                <tr>
                  <td>1789 (220 (ML))</td>
                  <td>2</td>
                  <td>Cryo</td>
                  <td />
                </tr>

                <tr>
                  <td>4750 (220 g/dl)</td>
                  <td>2</td>
                  <td>White Cells & Granulocytes</td>
                  <td />
                </tr>
              </tbody>
            </table>
          </div>
          {/*./tableFixHead*/}
        </div>
        {/*./col-lg-6*/}
      </div>
      {/*./row*/}
    </div>
  );
}

export default BloodAbMinus;
