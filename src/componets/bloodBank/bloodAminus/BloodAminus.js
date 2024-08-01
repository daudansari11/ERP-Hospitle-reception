import React from 'react'

function BloodAminus() {
  return (
    <div className="tab-pane">
      <div id="bloodGroupDiv" className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="blood-body">
            <div className="blood-pull-left blood-title">Blood</div>
            <div className="blood-pull-right blood-title">9 Bags </div>
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
                  <td>30214 (220 (ML))</td>
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
                  <td>1456 (220 (ML))</td>
                  <td>2</td>
                  <td></td>
                  <td width="10%" className="text-right" />
                </tr>
                <tr>
                  <td>1456 (220 (ML))</td>
                  <td>2</td>
                  <td></td>
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
                  <td>30214 (220 (ML))</td>
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
                  <td>30214 (220 (ML))</td>
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
            <div className="blood-pull-right blood-title">6 Bags</div>
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
                  <td>623 (220 Litter)</td>
                  <td>2</td>
                  <td>White Cells & Granulocytes .</td>
                  <td />
                </tr>
                <tr>
                  <td>2223 (220 (ML))</td>
                  <td>2</td>
                  <td>Cryo</td>
                  <td />
                </tr>
                <tr>
                  <td>2322 (220 g/dl)</td>
                  <td>2</td>
                  <td>Plasma</td>
                  <td />
                </tr>
                

                <tr>
                  <td>4580 (220 (ML))</td>
                  <td>2</td>
                  <td>White Cells & Granulocytes</td>
                  <td />
                </tr>
                <tr>
                  <td>4580 (220 (ML))</td>
                  <td>2</td>
                  <td>White Cells & Granulocytes</td>
                  <td />
                </tr>

                <tr>
                  <td>452 (220 g/dl)</td>
                  <td>2</td>
                  <td>Red Cells</td>
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

export default BloodAminus
