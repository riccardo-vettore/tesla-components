import { LitElement } from 'lit';
export declare class TeslaHomeSection extends LitElement {
    static get styles(): import("lit").CSSResult[];
    modelName: string;
    backgroundImgUrl: string;
    showSubTitle: Boolean;
    subTitle: string;
    subTitleHRef: string;
    showDownArrow: Boolean;
    disclaimer: string;
    private onDownArrowClick;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'tesla-home-section': TeslaHomeSection;
    }
}
export declare const TeslaHomeSectionReact: import("@lit-labs/react").ReactWebComponent<TeslaHomeSection, {
    onDownArrowClick: string;
}>;
