<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";

    onMount(() => {
        $underline_value = "";

        gsap.timeline({
            delay: 0.3,
        })
        .from(".cspec-title", {
            duration: 0.5,
            clipPath: "inset(0 100% 0 100%)",
        })
        .set(".cspec-intro-word", {
            duration: 1.5,
            autoAlpha: 1,
            stagger: 0.1,
        })
        .from([".line", ".cspec-description", ".cspec-headline"], {
            delay: 0.65,
            duration: 1.75,
            opacity: 0,
            onComplete: () => window.dispatchEvent(new CustomEvent("scrolling-start")),
        });
    });
</script>

<div class="cspec">
    <div class="cspec-content">
        <div class="article-top-border"></div>

        <div class="cspec-title">
            <div class="cspec-name">
                CSPEC
            </div>
            <div class="cspec-link">
                <a href="https://github.com/Oblivious-Oblivious/cSpec" target="_blank" rel="noopener noreferrer" draggable="false">
                    &lt;GitHub&gt;
                </a>
            </div>
        </div>

        <div class="line"></div>

        <div class="cspec-intro">
            <div>
                <span class="cspec-intro-word">
                    A
                </span>
                <span class="cspec-intro-word">
                    lightweight,
                </span>
                <span class="cspec-intro-word">
                    compile
                </span>
                <span class="cspec-intro-word">
                    time
                </span>
                <span class="cspec-intro-word">
                    unit
                </span>
                <span class="cspec-intro-word">
                    testing
                </span>
                <span class="cspec-intro-word">
                    library
                </span>
                <span class="cspec-intro-word">
                    for
                </span>
                <span class="cspec-intro-word">
                    TDD
                </span>
                <span class="cspec-intro-word">
                    and
                </span>
                <span class="cspec-intro-word">
                    BDD
                </span>
                <span class="cspec-intro-word">
                    models
                </span>
                <span class="cspec-intro-word">
                    inspired
                </span>
                <span class="cspec-intro-word">
                    from
                </span>
                <span class="cspec-intro-word">
                    ruby's
                </span>
                <span class="cspec-intro-word">
                    rspec
                </span>
            </div>
        </div>

        <div class="line"></div>

        <br><br>
        <div class="cspec-headline">
            Importance of testing
        </div>
        <div class="line"></div>
        <div class="cspec-description">
            Modern programming has proven harder to do that most expected.
            Long gone are the days of simple programs and simple operations.
            Recent software is a mess of strongly dependent internal parts
            with programmers trying to untangle them as best they can.  Tests
            are an integral component of the process of refactoring.  Without
            them, it is simply not possible.  Tests therefore serve a higher
            purpose, having less to do with proving correctness, and much
            more to do with have test coverage for future code enhancements,
            deletions, or refactorings.
        </div>

        <br><br>
        <div class="cspec-headline">
            Why is BDD better than other forms of testing
        </div>
        <div class="line"></div>
        <div class="cspec-description">
            Behaviour driven development focuses on human collaboration.
            It bridges the gaps between stakeholders, designers and
            developers, because in a BDD spec one might include user flow
            information, as well as tests and documentation all together.
            Each professional can focus on their own specialization while
            collaborating on the same piece of information.  That ultimately
            provides much greater insight on the direction and implementation
            of the product as both technical and non-technical people can
            contribute.  The main advantage of BDD in comparison to TDD or
            unit-testing after the fact, is that it provides descriptions
            of `how` software is should behave, instead of internal code
            information only developers could understand.
        </div>

        <br><br>
        <div class="cspec-headline">
            Technologies used
        </div>
        <div class="line"></div>
        <div class="cspec-description">
            <a href="https://openlibrary.org/books/OL4558528M/The_C_programming_language" target="_blank" rel="noopener noreferrer" draggable="false">C language</a>
            ................................................................................................................................. MAIN LANGUAGE<br>
        </div>

        <br><br><br><br>

        <div class="article-bottom-border"></div>
    </div>

</div>
<div class="copyright">© Oblivious</div>

<style>
    .cspec {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 80vw;
        transform: translate(10vw, 7vw);
    }

    .cspec:after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        background: url("/img/vertical-border.png") repeat-y top left,
                    url("/img/vertical-border.png") repeat-y top right;
        background-size: 1.8vw;
        transform: translateY(-1vw);
        z-index: -1;
        filter: invert(var(--invert-value));
    }

    .cspec-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 62vw;
    }

    .cspec-content:before,
    .cspec-content:after {
        font-size: 1.4vw;
        font-style: italic;
    }

    .cspec-content:before {
        content: "no. 2";
        position: absolute;
        top: 1.4vw;
        left: 3.2vw;
    }

    .cspec-content:after {
        content: "2021 - PRESENT";
        position: absolute;
        top: 1.4vw;
        right: 3.2vw;
    }

    .line {
        width: 100%;
        height: 1vw;
        background-color: var(--fg-color);
        transform-origin: left top;
        background: url("/img/horizontal-border.png") repeat-x bottom left;
        background-size: 60vw;
        margin: 1vw 0;
        filter: invert(var(--invert-value));
    }

    .cspec-title {
        display: flex;
        align-items: baseline;
    }

    .cspec-name {
        font-size: 7vw;
        font-family: var(--display-font);
        font-style: italic;
    }

    .cspec-link {
        font-size: 1.5vw;
        animation: under_line 1s infinite;
    }

    @keyframes under_line {
        0% {
            text-decoration: none;
        }
        50% {
            text-decoration: underline;
        }
        100% {
            text-decoration: none;
        }
    }

    .cspec-intro,
    .cspec-headline {
        display: flex;
        font-family: var(--display-font);
        font-size: 3vw;
        text-align: center;
    }

    .cspec-intro-word {
        visibility: hidden;
    }

    .cspec-description {
        font-size: 1.4vw;
        text-align: justify;
    }

    a:hover {
        color: var(--accent-color);
    }

    .article-top-border,
    .article-bottom-border {
        display: flex;
        width: 79vw;
        padding-top: 2vw;
        background: url("/img/horizontal-border.png") repeat-x bottom left;
        background-size: 100vw;
        transform: translateY(-0.9vw);
        filter: invert(var(--invert-value));
    }

    .article-top-border {
        transform: translateY(-1.55vw);
    }

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
        /* top: 98.36vw; */
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
