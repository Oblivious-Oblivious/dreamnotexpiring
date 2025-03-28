<script>
  import { onMount } from "svelte";
  import { underline_value } from "@persistence/underline_value";
  import Article from "@components/Article/Article.svelte";
  import Title from "@components/Article/Title.svelte";
  import Intro from "@components/Article/Intro.svelte";
  import Content from "@components/Article/Content.svelte";
  import Technology from "@components/Article/Technology.svelte";
  import Copyright from "@components/Article/Copyright.svelte";

  onMount(() => {
    $underline_value = "";
  });
</script>

<Article number="no. 2" date="2021 - PRESENT">
  <Title
    name="CSPEC"
    link="https://github.com/Oblivious-Oblivious/cSpec"
    link_type="GitHub"
  />

  <Intro
    content="
        A lightweight, compile time unit testing library
        for TDD and BDD models inspired from ruby's rspec.
    "
  />

  <Content headline="Technologies used" description="">
    <Technology
      title="C language"
      link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
      role="MAIN LANGUAGE"
    />
  </Content>

  <Content headline="" description="">
    <div class="videos">
      <video autoplay muted loop>
        <source src="/video/cspec.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </Content>

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
</Article>

<Copyright />

<style>
  .videos {
    display: flex;
    gap: 1vw;
    width: 100%;
  }

  video {
    width: 100%;
    box-shadow: var(--neumorphic-shadow2);
    border-radius: 0.5vw;
  }
</style>
