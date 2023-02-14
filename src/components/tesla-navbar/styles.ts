import { css } from 'lit';

export default css`
    :host {
        position: fixed;
        top: 0;
        width: 100%;
    }

    header {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        position: relative;
        z-index: 10;
        inline-size: 100%;
    }

    .logo {
        min-block-size: 56px;
        -webkit-padding-start: 8px;
        justify-content: flex-start;
        padding-inline-start: 8px;
        align-items: center;
        display: flex;
    }

    a {
        align-items: center;
        display: inline-flex;
        min-block-size: 32px;
        padding: 0 16px;
    }

    svg {
        color: #171a20;
        display: block;
        inline-size: 120px;
    }

    .center-items {
        min-block-size: 56px;
        display: none;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        margin: 0;
        position: static;
    }

    .right-items {
        display: flex;
        align-items: center;
        margin: 0;
        justify-content: flex-end;
        white-space: nowrap;
    }

    .right-items > ::slotted(*) {
        display: none;
    }

    ::slotted([name='right']) {
        display: none;
    }

    @media (min-width: 600px) {
        .logo {
            -webkit-padding-start: 20px;
            padding-inline-start: 20px;
        }

        .right-items {
            padding-inline-end: 5px;
        }
    }

    @media (min-width: 1200px) {
        .logo {
            padding-inline-start: 32px;
        }

        .center-items {
            display: flex;
        }

        .right-items {
            padding-inline-end: 32px;
        }

        .right-items > ::slotted(*) {
            display: flex;
        }
    }

    @media (min-width: 1199px) {
        .logo,
        .right-items {
            min-inline-size: 240px;
        }
    }
`;