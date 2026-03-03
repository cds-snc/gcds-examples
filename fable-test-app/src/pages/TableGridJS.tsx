import React, { useEffect, useRef, useState } from "react";
import { Grid } from "gridjs";
import {GcdsButton} from "@gcds-core/components-react";
// GridJS config
// https://github.com/grid-js/gridjs/blob/master/src/config.ts#L22-L89

/**
 * Add the API for the component here
 */

// Components (internal)
import { DateModified, Heading, Text } from "../components";

// Test data we're all using for the data table fable test
import { tableTestSubmissionData, tableTestSubmissionColumns } from "../data/tableTestSubmissionsData.tsx";
import "./TableGridJS.css"


const Table: React.FC = () => {
    const submissionsTableRef = useRef<HTMLTableElement>(null)
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [languageKey, setLanguageKey] = useState<'en' | 'fr'>('en');

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
    }

    useEffect(() => {
        if (wrapperRef.current !== null) {
            // Clean up previous Grid.js instance
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
            <Heading tag="h2">Submissions</Heading>
            <Text>Government export certificate application table. Approve or reject pending submissions.</Text>

            <div style={{ marginBottom: '1em' }}>
                <GcdsButton size="small" type="button" onClick={() => setLanguageKey(languageKey === 'en' ? 'fr' : 'en')}>
                    {languageKey === 'en' ? 'Table française' : 'English table'}
                </GcdsButton>
            </div>

            <table ref={submissionsTableRef}>
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
            <div ref={wrapperRef} />
            <DateModified>2026-02-24</DateModified>
        </section>
    );
};

export default Table;
