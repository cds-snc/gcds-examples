import React, { useEffect, useRef, useState } from "react";

import { DataTable } from "simple-datatables"
import "simple-datatables/dist/style.css";
import { faker } from "@faker-js/faker";

// Components (internal)
import { DateModified, Heading, Text } from "../components";

function getRowCountFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const value = parseInt(params.get("rows") ?? "25", 10);

  return value;
}

function generateRows(count: number) {
  return Array.from({ length: count }, () => ({
    name: faker.person.fullName(),
    job: faker.person.jobTitle(),
    country: faker.location.country(),
  }));
}

const TableSimple: React.FC = () => {
  const tableRef = useRef<HTMLTableElement>(null);
  const dataTable = useRef<DataTable | null>(null);
  const [rows] = useState(() => generateRows(getRowCountFromQuery()));

  useEffect(() => {
    if (dataTable.current) {
      dataTable.current.destroy();
    }

    if (tableRef.current) {
      dataTable.current = new DataTable(tableRef.current, {
        searchable: true,
        perPage: 25,
        perPageSelect: [25, 50, 75, 100, 250, ["All", 0]],
      });
    }

    return () => {
      if (dataTable.current) {
        dataTable.current.destroy();
      }
    };
  }, [rows]);

  return (
    <section>
      <Heading tag="h1">Simple-datatables test page</Heading>

      <Text>
        This page is meant to test the simple-datatables framework. Add a <code>?rows=</code> query parameter to the URL to generate more rows and test pagination (e.g. <code>?rows=100</code>).
      </Text>

      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.job}</td>
              <td>{row.country}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <DateModified>2026-02-24</DateModified>
    </section>
  );
};

export default TableSimple;
