'use client';

import { GcdsContainer } from '@cdssnc/gcds-components-react-ssr'
import { Component } from 'react';

export type ContainerProps = {
    id: string,
    size?: "full" | "xl" | "lg" | "md" | "sm" | "xs" | undefined,
    border?: any,
    tag?: string | undefined,
    centered?: string | undefined,
    padding?: string | undefined,
    children?: any
};

export class Container extends Component<ContainerProps> {
    render() {
        return (
            <GcdsContainer container-id={this.props.id} size={this.props.size} {...this.props.border}
                           tag={this.props.tag} centered={this.props.centered} padding={this.props.padding}>
                {this.props.children}
            </GcdsContainer>
        );
    }
}