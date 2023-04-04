<script>
    import { onMount } from "svelte";
    import { underline_value } from "@persistence/underline_value";
    import Article from "@components/Article/Article.svelte";
    import Title from "@components/Article/Title.svelte";
    import Line from "@components/Article/Line.svelte";
    import Content from "@components/Article/Content.svelte";
    import Copyright from "@components/Article/Copyright.svelte";

    onMount(() => {
        $underline_value = "";

        gsap.timeline({
            delay: 0.95,
        })
        .set(".cspec-intro-word", {
            duration: 1.5,
            autoAlpha: 1,
            stagger: 0.1,
            onComplete: () => window.dispatchEvent(new CustomEvent("scrolling-start")),
        });
    });
</script>

<Article number="no. 2" date="2021 - PRESENT">
    <Title
        name="CSPEC"
        link="https://github.com/Oblivious-Oblivious/cSpec"
        link_type="GitHub"
    />

    <Line/>
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
    <Line/>

    <Content
        headline="Importance of testing"
        description="
            Modern programming has proven harder to do that most expected.
            Long gone are the days of simple programs and simple operations.
            Recent software is a mess of strongly dependent internal parts
            with programmers trying to untangle them as best they can.  Tests
            are an integral component of the process of refactoring.  Without
            them, it is simply not possible.  Tests therefore serve a higher
            purpose, having less to do with proving correctness, and much
            more to do with have test coverage for future code enhancements,
            deletions, or refactorings.
        "
    />

    <Content
        headline="Why is BDD better than other forms of testing"
        description="
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
        "
    />

    <Content
        headline="Technologies used"
        description=""
    >
        <a href="https://openlibrary.org/books/OL4558528M/The_C_programming_language" target="_blank" rel="noopener noreferrer" draggable="false">C language</a>
        ................................................................................................................................. MAIN LANGUAGE<br>
    </Content>
</Article>

<Copyright/>

<style>
    .cspec-intro {
        display: flex;
        font-family: var(--display-font);
        font-size: 3vw;
        text-align: center;
    }

    .cspec-intro-word {
        visibility: hidden;
    }

    a:hover {
        color: var(--accent-color);
    }
</style>
