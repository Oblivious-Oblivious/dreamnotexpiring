<div class="transition-overlay">
    <div class="grain-pattern"></div>
    <div class="transition-overlay-color-2"></div>
    <div class="transition-overlay-color-1"></div>
</div>

<style>
    .transition-overlay {
        position: fixed;
        top: -100vh;
        z-index: 99999;
    }

    .transition-overlay-color-1 {
        background-color: var(--overlay-color);
        width: 100vw;
        height: 33vh;
    }

    .transition-overlay-color-2 {
        background-color: var(--bg-color);
        width: 100vw;
        height: 67vh;
    }

    .grain-pattern {
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: url("/img/grain.gif");
        opacity: 0.03;
    }
</style>
