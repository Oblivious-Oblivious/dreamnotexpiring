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

<Article number="no. 6" date="2020 - 2021">
  <Title
    name="ZIRCON"
    link="https://github.com/Oblivious-Oblivious/Zircon"
    link_type="GitHub"
  />

  <Intro
    content="
        A small parser for object oriented programming in C.
    "
  />

  <Content headline="Technologies used" description="">
    <Technology
      title="C language"
      link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
      role="MAIN LANGUAGE"
    />
    <Technology
      title="yacc"
      link="https://linux.die.net/man/1/yacc"
      role="GRAMMAR PARSER"
    />
    <Technology
      title="cDataLib"
      link="https://github.com/Oblivious-Oblivious/cDataLib"
      role="DATA STRUCTURES"
    />
  </Content>

  <Content headline="" description="">
    <div class="photos">
      <div class="photo">
        <img src="/img/zircon1.jpg" alt="Zircon" draggable="false" />
      </div>
      <div class="photo">
        <img src="/img/zircon2.jpg" alt="Zircon" draggable="false" />
      </div>
    </div>
  </Content>

  <Content
    headline="Description"
    description="
            Zircon is the first of experiments on building a viable object
            oriented system that is efficient in speed and memory.  With
            zircon I hoped to extend C's capabilities to inlude pure objects
            much the same way Objective-C implements this today.  The changes
            are minimal, and are added using the yacc syntax tree itself. Much
            knowledge was gained especially in how complicated grammars are set up.
        "
  />
</Article>

<Copyright />

<style>
  .photos {
    display: flex;
    gap: 1vw;
    width: 100%;
  }

  .photo img {
    width: 100%;
    box-shadow: var(--neumorphic-shadow3);
    border-radius: 0.4vw;
  }
</style>
