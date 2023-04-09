<script>
    import { underline_value } from "@persistence/underline_value";
    import { onMount } from "svelte";

    onMount(() => {
        window.addEventListener("scrolling-stop", () => {
            gsap.set("a", {
                pointerEvents: "none",
            });
        });
        window.addEventListener("scrolling-start", () => {
            gsap.set("a", {
                delay: 1,
                pointerEvents: "all",
            });
        });
    });
</script>

<header>
    <nav>
        <ul>
            <li>
                <a
                    class:active={$underline_value === "work"}
                    on:click={() => $underline_value = "work"}
                    href="/"
                    draggable="false"
                >Work</a>
            </li>
            <li>
                <a
                    class:active={$underline_value === "about"}
                    on:click={() => $underline_value = "about"}
                    href="/about"
                    draggable="false"
                >About</a>
            </li>
        </ul>
    </nav>
</header>

<style>
    header {
        z-index: 99999;
        position: fixed;
        top: 2.22vw;
        width: 100vw;
        font-weight: 500;
    }

    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    ul {
        display: flex;
        gap: 2.85rem;
    }

    a {
        display: flex;
        position: relative;
        width: fit-content;
        opacity: 0.35;
        font-size: 1.1rem;
    }

    /* Opacity animation on:hover and :not:on:hover */
    a:hover {
        opacity: 1;
        transition: opacity 400ms, transform 400ms;
    }
    a:not(:hover) {
        transition: opacity 400ms, transform 400ms;
    }

    /* Fade in */
    a::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 1px;
        background-color: var(--gray);
        overflow: hidden;
        transition: opacity 400ms, transform 400ms;

        opacity: 0;
        transform: translate3d(-100%, 0, 0);
    }

    /* Slide in */
    a:hover::after,
    a:focus::after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }

    /* Full opacity and underline on active */
    a.active {
        cursor: default;
        pointer-events: none;
        opacity: 1;
    }
    a.active:after {
        opacity: 1;
        transform: translate3d(0, 0, 0);
    }
</style>
