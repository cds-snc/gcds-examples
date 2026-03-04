import React from "react";

// Components (internal)
import { DateModified, Heading, TanStackTable, Text } from "../components";

const TableTanStackStacked: React.FC = () => {
  return (
    <section className="section-tan-stack">
      <Heading tag="h1">TanStack table (stacked)</Heading>
      <Text>
        This page shows a list of test submissions. You can sort the columns by
        clicking on the headers and navigate through pages using the pagination
        controls.
      </Text>

      <TanStackTable />

      <DateModified>2026-02-24</DateModified>
    </section>
  );
};

export default TableTanStackStacked;
