<div class="copyright">© Oblivious</div>

<style>
    .copyright {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-bottom: 6vw;
        font-size: 2vw;
    }

    .copyright:before {
        content: "";
        position: absolute;
        left: 11.66vw;
        width: 0;
        height: 0;
        opacity: 0.92;
        z-index: -1;
        border-left: 7vw solid var(--bg-color);
        border-top: 7vw solid transparent;
        background: var(--fg-color) url("/img/halftone.png") repeat;
        transform: rotate(180deg);
    }
</style>
