import { LitElement } from 'lit';
export declare class TeslaNavbarItem extends LitElement {
    static get styles(): import("lit").CSSResult[];
    href: String;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tesla-navbar-item': TeslaNavbarItem;
    }
}
export declare const TeslaNavbarItemReact: import("@lit-labs/react").ReactWebComponent<TeslaNavbarItem, {}>;
