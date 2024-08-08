"use client";

import {GcdsIcon, GcdsPhaseBanner} from "@cdssnc/gcds-components-react-ssr"
import React, { FC } from "react";

export const PhaseBanner: FC = () => {
    return (
        <GcdsPhaseBanner slot="banner">
            <GcdsIcon
                slot="banner-icon-left"
                name="play-circle"
                size="text"
                label="Play icon featuring a right-facing triangle within a circle with a rightward arrowhead. It signifies the action of starting or resuming audio or video playback."
            />
            <p slot="banner-text">
                Stay tuned for our new plant series coming out soon.
            </p>
        </GcdsPhaseBanner>
    )
};