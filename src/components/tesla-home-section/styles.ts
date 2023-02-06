import { css } from 'lit';

export default css`
    h1,
    p,
    a {
        font-family: 'Gotham SSm', sans-serif;
    }

    h1 {
        font-weight: 500;
        letter-spacing: -0.6px;
        text-transform: none;
        line-height: 48px;
        font-size: 40px;
        color: #171a20;
        margin-block-start: 0.83em;
        margin-block-end: 0.83em;
    }

    p {
        font-weight: 400;
        font-size: 14px;
        margin: 0;
    }

    a {
        font-weight: inherit;
        text-decoration: none;
    }

    .tesla-home-wrap {
        display: flex;
        justify-items: center;
        flex-direction: column;
        justify-content: space-between;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .model-name {
        margin-top: calc(16vh + 24px);
        margin-bottom: 0;
        padding: 0 24px;
        text-align: center;
        transition: transform 0.5s ease-in-out 0.5s,
            opacity 0.5s ease-in-out 0.5s;
    }

    .sub-title {
        padding: 6px 24px 14px 24px;
        text-align: center;
    }

    .link:hover {
        color: #171a20;
        box-shadow: 0 2px 0 0 currentColor;
    }

    .link {
        background-color: transparent;
        border: 0;
        color: #171a20;
        box-shadow: 0 1px 0 0 currentColor;
        cursor: pointer;
        padding: 0;
        text-align: initial;
        transition: box-shadow 0.33s cubic-bezier(0.5, 0, 0, 0.75),
            color 0.33s ease;
    }

    .content-end-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-right: 24px;
        padding-left: 24px;
    }

    .buttons-container {
        display: inline-flex;
        flex-wrap: wrap;
        gap: calc(min(1.5vw, 25px));
        padding: 16px 0;
        margin-bottom: 16px;
    }

    .disclaimer {
        padding-bottom: 12px;
        padding-right: 24px;
        padding-left: 24px;
        font-size: 12px;
        line-height: 18px;
        padding-block-start: 12px;
    }

    .down-arrow {
        min-height: 24px;
        margin-bottom: 24px;
    }

    .down-arrow > span {
        animation-delay: 1s;
    }

    .icon {
        background-color: transparent;
        transition: color 0.33s ease,
            transform 0.5s cubic-bezier(0.5, 0, 0, 0.75),
            -webkit-transform 0.5s cubic-bezier(0.5, 0, 0, 0.75);
        color: rgb(57, 60, 65);
        block-size: 24px;
        content: '';
        display: block;
        inline-size: 24px;
        max-inline-size: 100%;
        min-inline-size: 24px;
        min-block-size: 24px;
        overflow: hidden;
        text-indent: -9999px;
        cursor: pointer;
        -webkit-animation-duration: 2s;
        animation-duration: 2s;
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-name: tds-keyframe--bounce;
        animation-name: tds-keyframe--bounce;
    }

    @keyframes tds-keyframe--bounce {
        0%,
        20%,
        50%,
        80%,
        to {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }

        40% {
            -webkit-transform: translateY(5px);
            transform: translateY(5px);
        }

        60% {
            -webkit-transform: translateY(3px);
            transform: translateY(3px);
        }
    }

    ::slotted(tesla-button) {
        width: 264px;
    }

    @media (max-width: 599px) {
        h1 {
            font-size: 36px;
          line-height: 36px;
        }

        .buttons-container {
            flex-direction: column;
            gap: 15px;
            width: 100%;
            margin-bottom: 0;
        }

        .disclaimer {
            padding-top: 0;
        }

        .down-arrow span {
            display: none;
        }

        ::slotted(tesla-button) {
            width: 100%;
        }
    }
`;
