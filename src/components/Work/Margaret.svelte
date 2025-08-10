<script>
  import { onMount } from "svelte";
  import { underline_value } from "@persistence/underline_value";
  import Technology from "@components/Article/Technology.svelte";
  import Article from "@components/Article/Article.svelte";
  import Title from "@components/Article/Title.svelte";
  import Intro from "@components/Article/Intro.svelte";
  import Copyright from "@components/Article/Copyright.svelte";
  import Content from "@components/Article/Content.svelte";

  onMount(() => {
    $underline_value = "";
  });
</script>

<Article number="no. 1" date="2022 - PRESENT">
  <Title
    name="MARGARET"
    link="https://github.com/Oblivious-Oblivious/margaret"
    link_type="GitHub"
  />

  <Intro
    content="An object oriented language system based on ruby and smalltalk."
  />

  <div class="margaret-headless-description">
    Margaret is a modern programming language focused around objects and
    messages. It offers powerful literals, easy to use objects and
    smalltalk-like message structures.
  </div>

  <Content
    headline="Every value in Margaret is treated as an object."
    description=""
  >
    <div class="margaret-code">
      <code>
        <br />
        &nbsp;&nbsp;(1 + 1) print,<br />
        &nbsp;&nbsp;comment: "`1` is an object, `+` is a message",<br />
        &nbsp;&nbsp;comment: "comment: is a method to the $Margaret object (yes it
        was intentional)",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <br />
      </code>
    </div>
  </Content>

  <Content
    headline="There are no reserved words and no explicit syntax apart from message sends."
    description=""
  >
    <div class="margaret-code">
      <code>
        <br />
        &nbsp;&nbsp;$TrueProto = $Margaret clone,<br />
        &nbsp;&nbsp;$true = $TrueProto clone, &nbsp;&nbsp;$TrueProto -- [<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#& a_boolean => a_boolean,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#and: alternate_block => alternate_block
        value,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#as_bit => 1,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_false: alternate_block => $nil,<br
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_false: false_alternate_block if_true:
        true_alternate_block => true_alternate_block value,&nbsp;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_true: alternate_block => alternate_block
        value,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#if_true: true_alternate_block if_false:
        false_alternate_block => true_alternate_block value,&nbsp;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#not => $false,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#or: alternate_block => @self,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#xor: a_block => a_block value if_true:
        $false if_false: $true,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#| a_boolean => $true,<br />
        &nbsp;&nbsp;],<br />
        <br />
        &nbsp;&nbsp;$true freeze!,
        <br />
        &nbsp;&nbsp;comment: "That defines `$true` and inserts it into the object
        system".<br />
        &nbsp;&nbsp;comment: "You guessed it, there exists a similar one for `false`".<br
        />
        <br />
      </code>
    </div>
  </Content>

  <Content
    headline="Uses prototypal inheritance based on Self or JavaScript."
    description=""
  >
    <div class="margaret-code">
      <code>
        <br />
        &nbsp;&nbsp;&lbrace; argc, argv | <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Point = $Margaret clone,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Point attr_reader: [:x, :y],<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$Point bind:<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#x: xparam y:
        yparam => &lbrace;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@x
        = xparam,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@y
        = yparam,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@self<br
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,<br
        />
        &nbsp;&nbsp;&rbrace;,<br />
        &nbsp;&nbsp;comment: "We bind new methods to existing objects",&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br
        />
        <br />
      </code>
    </div>
  </Content>

  <br />

  <Content
    headline="Uses C-style literals like int, float, string."
    description=""
  >
    <div class="margaret-code">
      <code>
        <br />
        &nbsp;&nbsp;2 + 3 print,<br />
        &nbsp;&nbsp;4.2 * 0.1 / 0.01 print,<br />
        &nbsp;&nbsp;res = "concat" + "me" + "to" + "something" print, &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        &nbsp;&nbsp;res get_first_character print,<br />
        <br />
      </code>
    </div>
  </Content>

  <Content
    headline="Implements tensors, tuples, tables and bitstrings as array-like data structures."
    description=""
  >
    <div class="margaret-code">
      <code>
        <br />
        &nbsp;&nbsp;['a', "a", 1, 1.0, %&lbrace; "k1": 42, k2: 43 &rbrace;] each:
        &lbrace; elem | &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elem print<br />
        &nbsp;&nbsp;&rbrace;<br />
        <br />
      </code>
    </div>
  </Content>

  <Content
    headline="Runs on a portable, lightweight, embeddable, register based VM inspired by Lua."
    description=""
  >
    <div class="margaret-code">
      <code>
        <br />
        &nbsp;&nbsp;$Margaret -- #ultimate_answer: x =&gt; &lbrace; <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;$true && !false not not && ($nil is_nil?)
        if_false: &lbrace; exit: 0 &rbrace;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = @self methods size + @super to_string
        length * 42,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[:symbol, ::label, 42, 42.2, "str", 0b0110,
        0xbeef, 0o741, %[y, 42, "val"],<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;%&lbrace;"k1": 42, k2: 43&rbrace;,
        %(42, 1::1, 0::1)] each: &lbrace; elem | (&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;puts: elem object_id,<br
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if: x &lt; y then: &lbrace; x &rbrace;
        else: &lbrace; y &rbrace;,<br />
        &nbsp;&nbsp;puts: (ultimate_answer: 42),<br />
        <br />
      </code>
    </div>
  </Content>

  <Content headline="Technologies used" description="">
    <Technology
      title="C language"
      link="https://openlibrary.org/books/OL4558528M/The_C_programming_language"
      role="MAIN LANGUAGE"
    />
    <Technology
      title="cSpec"
      link="https://github.com/Oblivious-Oblivious/cSpec"
      role="TESTING"
    />
    <Technology
      title="Boehm Garbage Collector"
      link="https://github.com/ivmai/bdwgc"
      role="MEMORY MANAGEMENT"
    />
    <Technology
      title="Readline"
      link="https://tiswww.case.edu/php/chet/readline/rltop.html"
      role="TERMINAL EMULATION"
    />
  </Content>
</Article>

<Copyright />

<style>
  .margaret-code {
    border: 1px var(--fg-color) solid;
  }

  .margaret-headless-description {
    font-size: 1.4vw;
    text-align: justify;
  }

  code {
    font-size: 1vw;
  }
</style>
