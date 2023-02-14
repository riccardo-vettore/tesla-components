import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import React from 'react';
import { LionButton } from '@lion/button';
import { createComponent } from '@lit-labs/react';
import teslaButtonStyles from './styles';

@customElement('tesla-button')
export class TeslaButton extends LionButton {
    // @ts-ignore
    static get styles() {
        return [...LionButton.styles, teslaButtonStyles];
    }

    @property({ reflect: true }) variant:
        | 'default'
        | 'primary'
        | 'success'
        | 'neutral'
        | 'warning'
        | 'dark'
        | 'outline-dark'
        | 'outline-light'
        | 'danger'
        | 'menu'
        | 'text' = 'default';

    @property({ reflect: true, type: String }) size: 'small' | 'large' =
        'large';

    @property({ reflect: true, type: Boolean }) rounded!: Boolean;

    render() {
        return html`
            <div class="button-content" id="${this._buttonId}">
                <slot name="prefix"></slot>
                <slot></slot>
                <slot name="suffix"></slot>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'tesla-button': TeslaButton;
    }
}

export const TeslaButtonReact = createComponent({
    tagName: 'tesla-button',
    react: React,
    elementClass: TeslaButton
});