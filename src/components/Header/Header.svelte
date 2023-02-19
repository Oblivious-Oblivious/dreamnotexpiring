<script>
</script>

<header>
    <nav>
        <ul>
            <li>
                <a href="/">Work</a>
            </li>
            <li>
                <a href="/about">About</a>
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

                        /* Fade in */
                        &::after {
                            content: "";
                            position: absolute;
                            bottom: 0;
                            left: 0;
                            width: 100%;
                            height: 1px;
                            background-color: var(--silver);
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
                    }
                }
            }
        }
    }
</style>
