import { LitElement } from 'lit';
export declare class TeslaNavbar extends LitElement {
    static get styles(): import("lit").CSSResult[];
    logoHRef: String;
    private onMenuClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tesla-navbar': TeslaNavbar;
    }
}
export declare const TeslaNavbarReact: import("@lit-labs/react").ReactWebComponent<TeslaNavbar, {
    onMenuClick: string;
}>;
