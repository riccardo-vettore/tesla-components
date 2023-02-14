import { LionButton } from '@lion/button';
export declare class TeslaButton extends LionButton {
    static get styles(): import("lit").CSSResult[];
    variant: 'default' | 'primary' | 'success' | 'neutral' | 'warning' | 'dark' | 'outline-dark' | 'outline-light' | 'danger' | 'menu' | 'text';
    size: 'small' | 'large';
    rounded: Boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tesla-button': TeslaButton;
    }
}
export declare const TeslaButtonReact: import("@lit-labs/react").ReactWebComponent<TeslaButton, {}>;
