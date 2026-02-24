import React from "react";

// Components (internal)
import { DateModified, Heading, Text } from "../components";

const Table: React.FC = () => {
  return (
    <section>
      <Heading tag="h1">Table test page</Heading>

      <Text>
        This page is meant to test a few potential frameworks for our new table
        component.
      </Text>

      <DateModified>2026-02-24</DateModified>
    </section>
  );
};

export default Table;
