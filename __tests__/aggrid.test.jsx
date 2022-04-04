import { render } from '@testing-library/react';
import {AgGridReact} from 'ag-grid-react';

describe('AG Grid Tests', () => {

  it('renders the grid', () => {
    expect(document.querySelector("#staff_grid")).toBeInTheDocument;
  })

  it('renders the columns', () => {
    expect(document.querySelector(`.ag-cell[col-id="first_name"]`)).toBeInTheDocument;
    expect(document.querySelector(`.ag-cell[col-id="last_name"]`)).toBeInTheDocument;
    expect(document.querySelector(`.ag-cell[col-id="job_title"]`)).toBeInTheDocument;
  })

})