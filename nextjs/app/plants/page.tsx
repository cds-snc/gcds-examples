"use client";

import { Card } from "@/app/components/client/Card";
import { GcdsGrid } from "@cdssnc/gcds-components-react-ssr";
import { Heading } from "@/app/components/client/Heading";
import { plantLists } from "./plant-lists";

export default function Page() {
    return (
        <section>
            <Heading>Plants</Heading>

            {Object.entries(plantLists).map(([type, list]) => (
                <article key={type}>
                    <Heading tag="h2">{type}</Heading>
                    <GcdsGrid
                        tag="ul"
                        columns="1fr"
                        columnsTablet="1fr 1fr"
                        columnsDesktop="1fr 1fr 1fr"
                    >
                        {list.map(({ name, location, description }) => (
                            <Card
                                key={name}
                                title={name}
                                href="/"
                                description={description}
                                tag={location}
                            ></Card>
                        ))}
                    </GcdsGrid>
                </article>
            ))}
        </section>
    );
}
