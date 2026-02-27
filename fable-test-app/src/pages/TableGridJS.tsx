import React, { useEffect, useRef, useState } from "react";
import { Grid } from "gridjs";


// Components (internal)
import { DateModified, Heading, Text } from "../components";

// Test data we're all using for the data table fable test
import { tableTestData } from "../data/tableTestData";
import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData.tsx";
import styles from "./TableGridJS.module.css";

// Define type for tableTestData
interface HolidayRow {
    id: string;
    holiday_name: string;
    holiday_date: string;
    created_at: string;
    updated_at: string;

    info_link: string;
    holiday_type: string;
    country: string;
    region: string;
}

const Table: React.FC = () => {
    // --- Table 1: Basic HTML Table, then enhanced with Grid.js ---
    const tableRef = useRef<HTMLTableElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [enhanced, setEnhanced] = useState(false);
    const [tableData, setTableData] = useState<HolidayRow[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate async load
        setLoading(true);
        setTimeout(() => {
            setTableData(tableTestData);
            setLoading(false);
        }, 800); // Simulate network delay
    }, []);

    useEffect(() => {
        if (enhanced && tableRef.current && wrapperRef.current) {
            wrapperRef.current.innerHTML = "";
            new Grid({
                from: tableRef.current,
                search: true,
                sort: true,
                pagination: true,
            }).render(wrapperRef.current);
        }
    }, [enhanced]);

    // --- Table 2: JS Table with controls ---
    const [largeData, setLargeData] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const jsTableRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (jsTableRef.current) {
            jsTableRef.current.innerHTML = ""; // Clear previous
            const rowCount = largeData ? 100000 : 10;
            const data = Array.from({ length: rowCount }, (_, i) => [
                `User ${i + 1}`,
                `user${i + 1}@example.com`,
                `555-${(1000 + i).toString().slice(-4)}`
            ]);
            new Grid({
                columns: ["Name", "Email", "Phone"],
                data,
                pagination: {
                    limit: perPage,
                },
                search: true,
                sort: true,
            }).render(jsTableRef.current);
        }
    }, [largeData, perPage]);

    const columns = [
        { label: "Holiday Name", key: "holiday_name" },
        { label: "Date", key: "holiday_date" },
        { label: "Country", key: "country" },
        { label: "Region", key: "region" },
        { label: "Type", key: "holiday_type" },
        { label: "Info Link", key: "info_link" },
    ]

    // --- Table 3: Server-side Table ---
    const serverTableRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (serverTableRef.current) {
            serverTableRef.current.innerHTML = "";
            new Grid({
                columns: ["ID", "Title"],
                server: {
                    url: "https://jsonplaceholder.typicode.com/posts",
                    then: (data: Array<{ id: number; title: string }>) => data.slice(0, 100).map((item) => [item.id, item.title]),
                },
                pagination: {
                    limit: 10,
                },
                search: true,
            }).render(serverTableRef.current);
        }
    }, []);

    return (
        <section>
            <Heading tag="h1">Table test page</Heading>
            <Text>
                This page is meant to test a few potential frameworks for our new table
                component.
                This page uses GridJS (https://gridjs.io/) to demonstrate three different table implementations:
                <ul className="list-disc">
                    <li>A basic HTML table enhanced with Grid.js features.</li>
                    <li>A JavaScript-generated table with controls to toggle data size and items per page.</li>
                    <li>A server-side table that fetches data from a mock API and supports pagination and search.</li>
                </ul>
            </Text>
            {/* Table 1: Basic HTML Table, then enhanced with Grid.js */}
            <Heading tag="h2">Submissions</Heading>
            <Text>Government export certificate application table. Approve or reject pending submissions.</Text>
            {loading ? (
            <div>Loading holiday data...</div>
            ) : !enhanced ? (
                <table ref={tableRef} className={styles.table}>
                    <thead>
                        <tr>
                            {Object.entries(tableTestSubmissionColumns).map(([key, label]) => (
                                <th key={key}>{label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableTestSubmissionData.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.submission_id}</td>
                                <td>{row.submitter_name}</td>
                                <td>{new Date(row.date_submitted).toLocaleDateString('en-CA')}</td>
                                <td>{row.status}</td>
                                <td>{row.assigned_reviewer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
            {!loading && !enhanced && (
                <button type="button" onClick={() => setEnhanced(true)}>
                    Enhance with Grid.js
                </button>
            )}

            <hr />
            <Heading tag="h1">End of WIP</Heading>
            <hr />

            <Heading tag="h2">1. Basic HTML Table (then enhanced with Grid.js)</Heading>
            <Text>Below is a basic HTML table. Click the button to enhance it with Grid.js features. Data is loaded asynchronously.</Text>
            {loading ? (
                <div>Loading holiday data...</div>
            ) : !enhanced ? (
                <table ref={tableRef} className={styles.table}>
                    <thead>
                        <tr>
                            {columns.map(col => (
                                <th key={col.key}>{col.label}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, idx) => (
                            <tr key={idx}>
                                <td>{row.holiday_name}</td>
                                <td>{row.holiday_date}</td>
                                <td>{row.country}</td>
                                <td>{row.region}</td>
                                <td>{row.holiday_type}</td>
                                <td><a href={row.info_link}>{row.info_link.replace('/holiday/', '')}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : null}
            {!loading && !enhanced && (
                <button type="button" onClick={() => setEnhanced(true)}>
                    Enhance with Grid.js
                </button>
            )}
            <div ref={wrapperRef}/>

            {/* Table 2: JS Table with controls */}
            <Heading tag="h2">2. JS Table with Controls</Heading>
            <Text>
                Toggle between 10 and 100,000 items. Change items per page. Pagination enabled.
            </Text>
            <div >
                <label>
                    <input
                        type="checkbox"
                        checked={largeData}
                        onChange={e => setLargeData(e.target.checked)}
                    />
                    Show 100,000 items
                </label>
                <label>
                    Items per page:
                    <select
                        value={perPage}
                        onChange={e => setPerPage(Number(e.target.value))}
                    >
                        {[10, 25, 50, 100, 1000].map(n => (
                            <option key={n} value={n}>{n}</option>
                        ))}
                    </select>
                </label>
            </div>
            <div ref={jsTableRef}/>

            {/* Table 3: Server-side Table */}
            <Heading tag="h2">3. Server-side Table (Mock API)</Heading>
            <Text>
                This table fetches data from a mock API (jsonplaceholder.typicode.com/posts) and supports pagination and search.
            </Text>
            <div ref={serverTableRef}/>

            <DateModified>2026-02-24</DateModified>
        </section>
    );
};

export default Table;

// faker thing
// 10,000 rows
// what we want people to test // are we showing holidays?
// then get their opinion?