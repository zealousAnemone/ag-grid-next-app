import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default function Home() {
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('../api/people')
      .then((response) => response.json())
      .then((data) => setRowData(data.rows));
  }, []);

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };
  const [columnDefs] = useState([
    { field: 'id' },
    { headerName: 'First Name', field: 'first_name' },
    { headerName: 'Last Name', field: 'last_name' },
    { headerName: 'Job Title', field: 'job_title' },
    { field: 'email' },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: '100%' }}>
      <AgGridReact
        rowData={rowData}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
      ></AgGridReact>
    </div>
  );
}
