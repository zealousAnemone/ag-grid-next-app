import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/router';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Home = () => {
  const gridRef = useRef();
  const router = useRouter();
  const [rowData, setRowData] = useState([]);

  useEffect(() => {
    fetch('../api/staff')
      .then((response) => response.json())
      .then((data) => setRowData(data.rows));
  }, []);

  const onSelectionChanged = useCallback(() => {
    const selectedRows = gridRef.current.api.getSelectedRows();
    router.push(`/staff/${selectedRows[0].id}`);
  }, [router]);

  const defaultColDef = {
    resizable: true,
    sortable: true,
  };

  const [columnDefs] = useState([
    { headerName: 'First Name', field: 'first_name' },
    { headerName: 'Last Name', field: 'last_name' },
    { headerName: 'Job Title', field: 'job_title' },
  ]);

  return (
    <div className="ag-theme-alpine" style={{ height: '600px' }}>
      <AgGridReact
        id="staff_grid"
        ref={gridRef}
        rowData={rowData}
        defaultColDef={defaultColDef}
        columnDefs={columnDefs}
        onSelectionChanged={onSelectionChanged}
        rowSelection={'single'}
        style={{ height: '100%', width: '100%' }}
      ></AgGridReact>
    </div>
  );
};

export default Home;
