import React, { useEffect, useRef, useState } from "react";
import "tabulator-tables/dist/css/tabulator.min.css";
import "./TableTabulator.css";
import { Heading, Text, DateModified } from "../components";
import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData";
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import ReactDOMServer from "react-dom/server";
import StatusPill from "../components/StatusPill";

const TableTabulator: React.FC = () => {
  const tableRef = useRef<HTMLDivElement>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const tableDiv: HTMLDivElement | null = tableRef.current;

    if (tableDiv) {
      // Prepare columns for Tabulator
      const columns = Object.entries(tableTestSubmissionColumns).map(([field, title]) => {
        if (field === "submission_id") {
          return {
            title,
            field,
            hozAlign: "left",
            formatter: (cell: any) => {
              const value = cell.getValue();
              // Use an anchor tag for the link
              return `<a href="/table-tabulator#${value}" class="gcds-link">${value}</a>`;
            },
            formatterParams: { allowHtml: true }
          };
        }
        if (field === "date_submitted") {
          return {
            title,
            field,
            hozAlign: "left",
            width: 110,
            formatter: (cell: any) => {
              const value = cell.getValue();
              // Format as YYYY-MM-DD (date only)
              return new Date(value).toLocaleDateString('en-CA');
            }
          };
        }
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
            formatterParams: { allowHtml: true }
          };
        }
        return {
          title,
          field,
          hozAlign: "left"
        };
      });
      // Add actions column
      columns.push({
        title: "Actions",
        field: "actions",
        hozAlign: "center",
        headerSort: false,
        formatter: () => {
          return '<button class="simple-test-button" tabindex="0">Update</button>';
        },
        width: 80
      } as any);
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
      <Heading tag="h1">Submissions</Heading>
      <Text>Government export certificate application table. Approve or reject pending submissions.</Text>

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
