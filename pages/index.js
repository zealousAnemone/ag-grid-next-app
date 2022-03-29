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

  const [columnDefs] = useState([
    { field: 'id' },
    { field: 'first_name' },
    { field: 'last_name' },
    { field: 'job_title' },
    { field: 'email' },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 800 }}>
      <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
    </div>
  );
}
