import React from "react";
import {Link} from "react-router-dom";
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

      <ul className="list-disc">
        <li>
            <a href="/table/simple">Simple-datatables</a>
        </li>
        <li><Link to="/table-gridjs">Table 3: Data Table - GridJS example</Link></li>
      </ul>

      <DateModified>2026-02-24</DateModified>
    </section>
  );
};

export default Table;
