import React, { useEffect, useRef, useState } from "react";
import "tabulator-tables/dist/css/tabulator.min.css";
import "./TableTabulator.css";
import { Heading, Text, DateModified } from "../components";
import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData.tsx";
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import ReactDOMServer from "react-dom/server";
import StatusPill from "../components/StatusPill.tsx";

const TableTabulator: React.FC = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const tableDiv: HTMLDivElement | null = tableRef.current;

    if (tableDiv) {
      // Prepare columns for Tabulator
      const columns = Object.entries(tableTestSubmissionColumns).map(([field, title]) => {
        if (field === "status") {
          return {
            title,
            field,
            hozAlign: "left",
            formatter: (cell: any) => {
              const value = cell.getValue();
              let status: "pending" | "approved" | "under-review" | "rejected" = "pending";
              if (value === "Approved") status = "approved";
              else if (value === "Under Review") status = "under-review";
              else if (value === "Rejected") status = "rejected";
              return ReactDOMServer.renderToString(<StatusPill status={status} />);
            },
            // Allow HTML rendering
            formatterParams: { allowHtml: true }
          };
        }
        return {
          title,
          field,
          hozAlign: "left"
        };
      });
      // Destroy previous instance if any
      const tabInstance = (tableDiv as unknown as { _tabulator?: { destroy: () => void } })._tabulator;
      if (tabInstance) {
        tabInstance.destroy();
      }
      const tab = new Tabulator(tableDiv, {
        data: tableTestSubmissionData,
        columns,
        layout: "fitColumns",
        pagination: true,
        paginationMode: "local",
        paginationSize: 10,
        movableColumns: true,
      });
      // Store tabulator instance for later filtering
      (tableDiv as unknown as { _tabulator?: { destroy: () => void } })._tabulator = tab;
    }
    return () => {
      if (tableDiv) {
        const tabInstance = (tableDiv as unknown as { _tabulator?: { destroy: () => void } })._tabulator;
        if (tabInstance) {
          tabInstance.destroy();
        }
      }
    };
  }, []);

  // Global search filter effect
  useEffect(() => {
    const tableDiv = tableRef.current;
    if (tableDiv && (tableDiv as unknown as { _tabulator?: any })._tabulator) {
      const tab = (tableDiv as unknown as { _tabulator?: any })._tabulator;
      if (search.trim() === "") {
        tab.clearFilter();
      } else {
        tab.setFilter((rowData: any) => {
          return Object.values(rowData).some(val =>
            String(val).toLowerCase().includes(search.toLowerCase())
          );
        });
      }
    }
  }, [search]);

  return (
    <section>
      <Heading tag="h1">Tabulator Table Example</Heading>
      <Text>
        This table uses Tabulator to display the same data as the GridJS example, with sorting, pagination, and column resizing enabled.
      </Text>
      <div style={{ marginBottom: "1em" }}>
        <label htmlFor="tabulator-search">Search: </label>
        <input
          id="tabulator-search"
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Type to filter table..."
          style={{ fontSize: 16, padding: "4px 8px", width: 240 }}
        />
      </div>
      <div ref={tableRef} style={{ width: "100%", margin: "2em 0", position: "relative" }}>
        <span style={{position: 'absolute', left: 0, top: '-2em', fontWeight: 600, fontSize: '1.1em'}} role="caption" aria-label="Submission Table">Submissions Table</span>
      </div>
      <DateModified>2026-03-03</DateModified>
    </section>
  );
};

export default TableTabulator;
