import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { when } from 'lit/directives/when.js';
import { createComponent } from '@lit-labs/react';
import React from 'react';
import teslaHomeSectionStyles from './styles';

@customElement('tesla-home-section')
export class TeslaHomeSection extends LitElement {
    // @ts-ignore
    static get styles() {
        return [teslaHomeSectionStyles];
    }

    @property({ reflect: true, type: String }) modelName: string = '';

    @property({ reflect: true, type: String }) backgroundImgUrl: string = '';

    @property({ reflect: true, type: Boolean }) showSubTitle: Boolean = false;

    @property({ reflect: true, type: String }) subTitle: string = '';

    @property({ reflect: true, type: String }) subTitleHRef: string = '';

    @property({ reflect: true, type: Boolean }) showDownArrow: Boolean = false;

    @property({ reflect: true, type: String }) disclaimer: string = '';

    private onDownArrowClick(e: MouseEvent) {
        e.stopPropagation();
        this.dispatchEvent(
            new CustomEvent('down-arrow-click', { bubbles: true })
        );
    }

    render() {
        const styles = { backgroundImage: `url('${this.backgroundImgUrl}')` };
        return html`
            <div class="tesla-home-wrap" style=${styleMap(styles)}>
                <div>
                    <h1 class="model-name">${this.modelName}</h1>
                    ${when(
                        this.showSubTitle,
                        () =>
                            html`
                                <p class="sub-title">
                                    ${!!this.subTitleHRef
                                        ? html`
                                              <a
                                                  href=${this.subTitleHRef}
                                                  class="link"
                                              >
                                                  ${this.subTitle}
                                              </a>
                                          `
                                        : html`
                                              ${this.subTitle}
                                          `}
                                </p>
                            `
                    )}
                </div>
                <div class="content-end-container">
                    <div class="buttons-container">
                        <slot></slot>
                    </div>
                    <p class="disclaimer">${this.disclaimer}</p>
                    <div class="down-arrow"
                         @click=${this.showDownArrow ? this.onDownArrowClick : ''}
                    >
                        ${when(
                            this.showDownArrow,
                            () =>
                                html`
                                    <span>
                                        <svg
                                            aria-hidden="true"
                                            class="icon"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M19.707 7.683a1 1 0 0 0-1.414 0L12 13.975 5.707 7.682a1 1 0 1 0-1.414 1.414l7 7a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0 0-1.414z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                    </span>
                                `
                        )}
                    </div>
                </div>
            </div>
        `;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'tesla-home-section': TeslaHomeSection;
    }
}

export const TeslaHomeSectionReact = createComponent({
    tagName: 'tesla-home-section',
    react: React,
    elementClass: TeslaHomeSection,
    events: {
        onDownArrowClick: 'down-arrow-click'
    }
});