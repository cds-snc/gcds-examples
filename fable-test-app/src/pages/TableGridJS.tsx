import React, { useEffect, useRef, useState } from "react";
// import {GcdsButton} from "@gcds-core/components-react";
// import {Checkboxes} from "../components";
import { Grid } from "gridjs";
// GridJS config
// https://github.com/grid-js/gridjs/blob/master/src/config.ts#L22-L89

/**
 * Add the API for the component here
 */

/**
 * Notes:
 * Sorting on HTML or non-string cells does not work at all
 */

// Components (internal)
import { DateModified, Heading, Text } from "../components";
import StatusPill from "../components/StatusPill.tsx";

// Test data we're all using for the data table fable test
import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData.tsx";
import "./TableGridJS.css"

const Table: React.FC = () => {
    const submissionsTableRef = useRef<HTMLTableElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null);
    // const [languageKey, setLanguageKey] = useState<'en' | 'fr'>('en');
    const [languageKey] = useState<'en' | 'fr'>('en');


    const language = {
        'fr': {
            'search': {
                    'placeholder':"🔍 Recherche..."
                },
            'sort': {
                'sortAsc':"Trier la colonne dans l'ordre croissant",
                'sortDesc':"Trier la colonne dans l'ordre décroissant"
            },
            'pagination': {
                'previous': "Précédent",
                'next':"Suivant",
                'navigate': (e: string, r: string) => { return "Page "+e+" de "+r},
                'page':(e: string) => { return "Page "+e },
                'showing': "Affichage des résultats",
                'of':"sur",
                'to':"à",
                'results':""},
            'loading':"Chargement...",
            'noRecordsFound':"Aucun résultat trouvé",
            'error':"Une erreur est survenue lors de la récupération des données"
        },
        'en': {
            'search': {
                'placeholder': 'Search records...'
            },
            'pagination': {
                'previous': 'Previous',
                'next': 'Next',
                'showing': 'Displaying',
                'results': () => 'Records'
            }
        }
    };

    useEffect(() => {
        if (wrapperRef.current !== null) {
            wrapperRef.current.innerHTML = "";
            if(submissionsTableRef.current === null) return;
            new Grid({
                from: submissionsTableRef.current,
                search: true,
                sort: true,
                pagination: true,
                className: {
                    table: 'gcds-table'
                },
                language: language[languageKey]
            }).render(wrapperRef.current);
        }
    }, [language, languageKey]);

    return (
        <section>
            <Heading tag="h1">Table test page</Heading>
            <Text>
                This page is meant to test a few potential frameworks for our new table
                component.
                This page uses GridJS (https://gridjs.io/) to demonstrate three different table implementations:
            </Text>
            {/* Code cleanup, don't show this on the test, but keeping it here for reference */}
            {/*<Checkboxes*/}
            {/*    legend="Select row"*/}
            {/*    name="Select"*/}
            {/*    value={[]}*/}
            {/*    hideLabel*/}
            {/*    options={[*/}
            {/*        {*/}
            {/*            label: "select",*/}
            {/*            id: "select",*/}
            {/*        }*/}
            {/*    ]}*/}
            {/*/>*/}
            <Heading tag="h2">Submissions</Heading>
            <Text>Government export certificate application table. Approve or reject pending submissions.</Text>

            {/* Code cleanup, don't show this on the test, but keeping it here for reference */}

            {/*<div className="mb-100">*/}
            {/*    <GcdsButton size="small" type="button" onClick={() => setLanguageKey(languageKey === 'en' ? 'fr' : 'en')}>*/}
            {/*        {languageKey === 'en' ? 'Table française' : 'English table'}*/}
            {/*    </GcdsButton>*/}
            {/*</div>*/}

            <table ref={submissionsTableRef}>
                <thead>
                <tr>
                    {/*<th>Actions</th>*/}
                    {Object.entries(tableTestSubmissionColumns).map(([key, label]) => (
                        <th key={key} tabIndex={0} className="focusable-th">{label}</th>
                    ))}
                </tr>
                </thead>
                <tbody>
                {tableTestSubmissionData.map((row, idx) => (
                    <tr key={idx}>
                        {/*<td><Button buttonRole="start" type="button" className="mr-200 mb-200">*/}
                        {/*    Review*/}
                        {/*</Button>*/}
                        {/*</td>*/}
                        {/* Note: can't render gcds checkboxes in here */}
                        {/*<td>*/}
                            {/*<Checkboxes*/}
                            {/*    legend={`Select submission ${row.submission_id}`}*/}
                            {/*    name={`select_submission_${row.submission_id}`}*/}
                            {/*    hideLabel*/}
                            {/*    options={[*/}
                            {/*        {*/}
                            {/*            label: `Select submission ${row.submission_id}`,*/}
                            {/*            id: `select_submission_${row.submission_id}`,*/}
                            {/*        }*/}
                            {/*    ]}*/}
                            {/*    value={[]}*/}
                            {/*></Checkboxes>*/}
                            {/*<input type="checkbox" aria-label={`Select submission ${row.submission_id}`} />*/}
                        {/*</td>*/}
                        <td>{row.submission_id}</td>
                        <td>{row.submitter_name}</td>
                        <td>{new Date(row.date_submitted).toLocaleDateString('en-CA')}</td>
                        <td>
                            <StatusPill status={
                                row.status === 'Pending Review' ? 'pending' :
                                row.status === 'Approved' ? 'approved' :
                                row.status === 'Under Review' ? 'under-review' :
                                row.status === 'Rejected' ? 'rejected' : 'pending'
                            } />
                        </td>
                        <td>{row.assigned_reviewer}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <div ref={wrapperRef} />
            <DateModified>2026-03-03</DateModified>
        </section>
    );
};

export default Table;
