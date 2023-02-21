<script>
    import { underline_value } from "./underline_value";
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

<style lang="scss">
    header {
        position: fixed;
        top: 2rem;
        width: 100vw;

        nav {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;

            ul {
                display: flex;
                gap: 2.85rem;

                li {
                    a {
                        display: flex;
                        position: relative;
                        width: fit-content;
                        opacity: 0.35;

                        /* Opacity animation on:hover and :not:on:hover */
                        &:hover {
                            opacity: 1;
                            transition: opacity 400ms, transform 400ms;
                        }
                        &:not(:hover) {
                            transition: opacity 400ms, transform 400ms;
                        }

                        /* Fade in */
                        &::after {
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
                        &:hover::after,
                        &:focus::after {
                            opacity: 1;
                            transform: translate3d(0, 0, 0);
                        }

                        /* Full opacity and underline on active */
                        &.active {
                            cursor: default;
                            opacity: 1;
                        }
                        &.active:after {
                            opacity: 1;
                            transform: translate3d(0, 0, 0);
                        }
                    }
                }
            }
        }
    }
</style>
