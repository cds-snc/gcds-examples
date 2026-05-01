import React from "react";

// Components (internal)
export { default as TableTanStack } from "./TableTanStack";
import { DateModified, Heading, TanStackTable, Text } from "../components";

const TableTanStack: React.FC = () => {
  return (
    <section className="section-tan-stack">
      <Heading tag="h1">TanStack table</Heading>
      <Text>
        This page shows a list of test submissions. You can sort the columns by
        clicking on the headers and navigate through pages using the pagination
        controls.
      </Text>

      <Heading tag="h2">TanStack table - stacked</Heading>
      <TanStackTable />

      <Heading tag="h2">TanStack table - scroll</Heading>
      <TanStackTable layout="scroll" />

      <DateModified>2026-02-24</DateModified>
    </section>
  );
};

export default TableTanStack;
