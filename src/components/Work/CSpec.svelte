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
