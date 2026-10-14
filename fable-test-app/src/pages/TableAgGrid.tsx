import React, { useMemo, useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import "./TableAgGrid.css";
import { Heading, Text, DateModified } from "../components";
import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData";
import StatusPill from "../components/StatusPill";
import {
    ModuleRegistry,
    ColumnAutoSizeModule,
    ColumnHoverModule,
    PinnedRowModule,
    RowAutoHeightModule,
    RowStyleModule,
    PaginationModule,
    RowDragModule,
    CellSpanModule,
    CellStyleModule,
    HighlightChangesModule,
    TooltipModule,
    TextFilterModule,
    NumberFilterModule,
    DateFilterModule,
    BigIntFilterModule,
    CustomFilterModule,
    ExternalFilterModule,
    QuickFilterModule,
    RowSelectionModule,
    TextEditorModule,
    LargeTextEditorModule,
    SelectEditorModule,
    NumberEditorModule,
    DateEditorModule,
    CheckboxEditorModule,
    CustomEditorModule,
    UndoRedoEditModule,
    LocaleModule,
    CsvExportModule,
    ValueCacheModule,
    GridStateModule,
    ColumnApiModule,
    RowApiModule,
    CellApiModule,
    ScrollApiModule,
    RenderApiModule,
    EventApiModule,
    ClientSideRowModelApiModule,
    ClientSideRowModelModule,
} from 'ag-grid-community';
import { ColDef, ICellRendererParams } from "ag-grid-community";

ModuleRegistry.registerModules([
    ColumnAutoSizeModule,
    ColumnHoverModule,
    PinnedRowModule,
    RowAutoHeightModule,
    RowStyleModule,
    PaginationModule,
    RowDragModule,
    CellSpanModule,
    CellStyleModule,
    HighlightChangesModule,
    TooltipModule,
    TextFilterModule,
    NumberFilterModule,
    DateFilterModule,
    BigIntFilterModule,
    CustomFilterModule,
    ExternalFilterModule,
    QuickFilterModule,
    RowSelectionModule,
    TextEditorModule,
    LargeTextEditorModule,
    SelectEditorModule,
    NumberEditorModule,
    DateEditorModule,
    CheckboxEditorModule,
    CustomEditorModule,
    UndoRedoEditModule,
    LocaleModule,
    CsvExportModule,
    ValueCacheModule,
    GridStateModule,
    ColumnApiModule,
    RowApiModule,
    CellApiModule,
    ScrollApiModule,
    RenderApiModule,
    EventApiModule,
    ClientSideRowModelApiModule,
    ClientSideRowModelModule,
]);

const agGridColumns: ColDef[] = [
  { field: "submission_id", headerName: tableTestSubmissionColumns.submission_id, sortable: true, filter: true, resizable: true },
  { field: "submitter_name", headerName: tableTestSubmissionColumns.submitter_name, sortable: true, filter: true, resizable: true },
  { field: "date_submitted", headerName: tableTestSubmissionColumns.date_submitted, sortable: true, filter: true, resizable: true },
  {
    field: "status",
    headerName: tableTestSubmissionColumns.status,
    sortable: true,
    filter: true,
    resizable: true,
    cellRenderer: (params: ICellRendererParams) => {
      const value = params.value;
      let status: "pending" | "approved" | "under-review" | "rejected" = "pending";
      if (value === "Approved") status = "approved";
      else if (value === "Under Review") status = "under-review";
      else if (value === "Rejected") status = "rejected";
      return <StatusPill status={status} />;
    },
  },
  { field: "assigned_reviewer", headerName: tableTestSubmissionColumns.assigned_reviewer, sortable: true, filter: true, resizable: true },
];

const TableAgGrid: React.FC = () => {
  const [rowData] = useState(tableTestSubmissionData);
  const [quickFilter, setQuickFilter] = useState("");
  const defaultColDef = useMemo(() => ({
    flex: 1,
    minWidth: 120,
    filter: true,
    sortable: true,
    resizable: true,
  }), []);

  // @ts-ignore
    return (
    <section>
      <Heading tag="h1">AG Grid Table Example</Heading>
      <Text>
        This table uses AG Grid to display the same data as the GridJS example, with sorting, filtering, and resizing enabled.
      </Text>
      <div className="mb-200">
        <label htmlFor="aggrid-search">Search: </label>
        <input
          id="aggrid-search"
          type="text"
          value={quickFilter}
          onChange={e => setQuickFilter(e.target.value)}
          placeholder="Type to filter table..."
          style={{ fontSize: 16, width: 240 }}
          className="px-50 py-100"
        />
      </div>
      <div className="ag-theme-alpine">
        <AgGridReact
          rowData={rowData}
          columnDefs={agGridColumns}
          defaultColDef={defaultColDef}
          domLayout="autoHeight"
          pagination={true}
          paginationPageSize={10}
          paginationAutoPageSize={false}
          quickFilterText={quickFilter}
        />
      </div>
      <DateModified>2026-03-03</DateModified>
    </section>
  );
};

export default TableAgGrid;
