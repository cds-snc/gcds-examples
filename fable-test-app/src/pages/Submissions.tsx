import React from "react";
// Components (internal)
import {
  DateModified,
  Heading,
  Text,
  Table,
  Button,
  SrOnly
} from "../components";

import {
  tableTestSubmissionColumns,
  tableTestSubmissionData,
} from "../data/tableTestSubmissionsData";

const Submissions: React.FC = () => {

  const actionsColumn = {
    field: 'actions',
    header: 'Action',
    slotted: 'true',
    sort: false,
    renderCell: (row: { submission_id: string;[key: string]: any }) => actionCell(row)
  }

  const columns = Object.entries(tableTestSubmissionColumns).map(([key, header]) => {
    const column: any = {
      field: key,
      header: header,
    };

    if (key === 'submission_id') {
      column['slotted'] = true;
      column['renderCell'] = ({ value }: { value: string }) => submissionCell(value);
    } else if (key === 'date_submitted') {
      column['slotted'] = true;
      column['renderCell'] = ({ value }: { value: string }) => dateCell(value);
    } else if (key === 'status') {
      column['slotted'] = true;
      column['renderCell'] = ({ value }: { value: string }) => statusCell(value);
    }

    return column;
  });

  columns.push(actionsColumn);

  return (
    <div>
      <Table
        columns={columns}
        data={tableTestSubmissionData}
        filter
        pagination
        sort
      >
        <div slot="caption">
          <Heading tag="h1">Submitted holidays</Heading>

          <Text>
            Review the submitted holidays from the "Submit a holiday" form here.
          </Text>
        </div>
      </Table>

      <DateModified>2026-06-05</DateModified>
    </div>
  );
};

export default Submissions;

const submissionCell = (value: string) => {
  return (
    <a href={`#${value}`}>
      {value}
    </a>
  );
};

const dateCell = (value: string) => {
  return (
    <time>
      {new Date(value).toLocaleString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </time>
  );
};

const statusCell = (value: string) => {
  const statusClass = value.toLowerCase().replace(/\s+/g, "-");

  return <span className={`status-pill ${statusClass}`}>{value}</span>;
};

const actionCell = (row: { submission_id: string;[key: string]: any }) => {
  return (
    <Button type="button" buttonRole="secondary" size="small">
      Update <SrOnly>submission: {row.submission_id}</SrOnly>
    </Button>
  );
};