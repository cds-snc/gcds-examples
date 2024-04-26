'use client';

import { GcdsSearch, GcdsHeading } from '@cdssnc/gcds-components-react-ssr'
import { FC } from 'react';

export const Search: FC = () => (
  <div>
    <GcdsHeading tag="h2">Search</GcdsHeading>

    <GcdsSearch></GcdsSearch>
    
    <GcdsSearch
      action="/searchresults"
      method="post"
      name="customsearch"
      searchId="customsearch"
      placeholder="Nextjs test site"
      suggested={["Popular term", "Popular term 2"]}
    ></GcdsSearch>
  </div>
);