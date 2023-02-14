import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import teslaNavbarItemStyles from './styles';
import { createComponent } from '@lit-labs/react';
import React from 'react';

@customElement('tesla-navbar-item')
export class TeslaNavbarItem extends LitElement {
    // @ts-ignore
    static get styles() {
        return [teslaNavbarItemStyles];
    }

    @property({ reflect: true, type: String }) href: String = '';

    render() {
        return html`
            <a href=${this.href}>
                <span>
                    <slot></slot>
                </span>
            </a>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'tesla-navbar-item': TeslaNavbarItem;
    }
}

export const TeslaNavbarItemReact = createComponent({
    tagName: 'tesla-navbar',
    react: React,
    elementClass: TeslaNavbarItem
});