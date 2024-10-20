<script>
  import { onMount } from "svelte";

  onMount(() => {
    gsap.to(".computer-related-topics-i-enjoy", {
      autoAlpha: 1,
    });

    gsap.set(".topic-pentesting", {
      xPercent: 16,
      yPercent: 20,
    });
    gsap.set(".topic-interpreters", {
      xPercent: 145,
      yPercent: 100,
    });
    gsap.set(".topic-oop", {
      xPercent: 18,
      yPercent: 170,
    });
    gsap.set(".topic-gc", {
      xPercent: 70,
      yPercent: 280,
    });
    gsap.set(".topic-quines", {
      xPercent: 20,
      yPercent: 2300,
    });

    gsap.set(".topic-title", {
      yPercent: -136,
    });

    gsap.utils.toArray(".topic").forEach((topic) => {
      const topic_code_cyan = `.${topic.classList[1].toString()} code .topic-code-cyan`;
      const topic_code_blue = `.${topic.classList[1].toString()} code .topic-code-blue`;
      const topic_code_orange = `.${topic.classList[1].toString()} code .topic-code-orange`;
      const topic_code_red = `.${topic.classList[1].toString()} code .topic-code-red`;
      const topic_code_purple = `.${topic.classList[1].toString()} code .topic-code-purple`;
      const topic_code_green = `.${topic.classList[1].toString()} code .topic-code-green`;

      const code_cyan_highlight = gsap.to(topic_code_cyan, {
        paused: true,
        stagger: 0.05,
        color: "#009494",
      });
      const code_blue_highlight = gsap.to(topic_code_blue, {
        paused: true,
        stagger: 0.05,
        color: "#26619c",
      });
      const code_orange_highlight = gsap.to(topic_code_orange, {
        paused: true,
        stagger: 0.05,
        color: "#f7941d",
      });
      const code_red_highlight = gsap.to(topic_code_red, {
        paused: true,
        stagger: 0.05,
        color: "#ed1c24",
      });
      const code_purple_highlight = gsap.to(topic_code_purple, {
        paused: true,
        stagger: 0.05,
        color: "#7851a9",
      });
      const code_green_highlight = gsap.to(topic_code_green, {
        paused: true,
        stagger: 0.05,
        color: "#00a651",
      });

      const colors_reset_to_fg = gsap.set(
        `.${topic.classList[1].toString()} code span`,
        {
          color: "var(--fg-color)",
        }
      );

      topic.addEventListener("mouseenter", () => {
        code_cyan_highlight.play();
        code_blue_highlight.play();
        code_orange_highlight.play();
        code_red_highlight.play();
        code_purple_highlight.play();
        code_green_highlight.play();
      });
      topic.addEventListener("mouseleave", () => {
        code_cyan_highlight.reverse();
        code_blue_highlight.reverse();
        code_orange_highlight.reverse();
        code_red_highlight.reverse();
        code_purple_highlight.reverse();
        code_green_highlight.reverse();

        colors_reset_to_fg.play();
      });
    });
  });
</script>

<div class="computer-related-topics-i-enjoy" style="visibility: hidden;">
  <div class="computer-related-topics-i-enjoy-phrase">
    Computer Related Topics I Enjoy
  </div>

  <div class="topic topic-pentesting">
    <div class="topic-title">Penetration Testing</div>
    <code>
      <span class="topic-code-cyan">unsigned char</span> code[] = <br />
      &nbsp;&nbsp;&nbsp;<span class="topic-code-blue">"</span><span
        class="topic-code-green"
        >\x56\x5a\x56\x48\xbf\x2f\x62\x69\x6e\x2f\x2f</span
      ><br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-green"
        >\x73\x68\x57\x54\x5f\xb0\x3b\x0f\x05</span
      ><span class="topic-code-blue">"</span>;<br />
      <br />
      <span class="topic-code-cyan">int</span> main(<span
        class="topic-code-cyan">void</span
      >) &lbrace;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">int</span> (*s)() =
      (<span class="topic-code-cyan">int</span>(*)())code;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;s();<br />
      &rbrace;
    </code>
  </div>

  <div class="topic topic-interpreters">
    <div class="topic-title">Interpreters</div>
    <code>
      <span class="topic-code-orange">eval</span>[e;a] = [atom[e] ->
      <span class="topic-code-orange">cdr</span>[assoc[e;a]];<br />
      &nbsp;&nbsp;&nbsp;&nbsp;atom[<span class="topic-code-orange">car</span
      >[e]] -><br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eq[<span
        class="topic-code-orange">car</span
      >[e],QUOTE] -> cadr[e];<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eq[<span
        class="topic-code-orange">car</span
      >[e];COND] -> evcon[<span class="topic-code-orange">cdr</span>[e];a];<br
      />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T ->
      <span class="topic-code-orange">apply</span>[<span
        class="topic-code-orange">car</span
      >[e];evlis[<span class="topic-code-orange">cdr</span>[e];a];a]];<br />
      &nbsp;&nbsp;&nbsp;&nbsp;T ->
      <span class="topic-code-orange">apply</span>[<span
        class="topic-code-orange">car</span
      >[e];evlis[<span class="topic-code-orange">cdr</span>[e];a];a]]<br />
    </code>
  </div>

  <div class="topic topic-oop">
    <div class="topic-title">Object Oriented Programming</div>
    <code>
      <span class="topic-code-cyan">$Margaret</span>&nbsp;--
      <span class="topic-code-red">#ultimate_answer</span>: x =&gt; &lbrace;
      <br />
      &nbsp;&nbsp;<span class="topic-code-green">$true</span> &
      <span class="topic-code-green">!$false</span>
      <span class="topic-code-purple">not</span>
      && (<span class="topic-code-cyan">$nil</span> is_nil?) if_false: &lbrace;
      exit: <span class="topic-code-green">0</span> &rbrace;,<br />
      &nbsp;&nbsp;y = <span class="topic-code-cyan">@self</span>
      methods size + <span class="topic-code-cyan">@super</span> to_string
      length * 42,<br />
      &nbsp;&nbsp;[<span class="topic-code-blue">:symbol</span>,
      <span class="topic-code-green">::label</span>,
      <span class="topic-code-green">42</span>,
      <span class="topic-code-green">42.2</span>,
      <span class="topic-code-green">0b0110</span>,
      <span class="topic-code-green">0xbeef</span>,
      <span class="topic-code-green">0o741</span>,
      <span class="topic-code-green">"</span><span class="topic-code-blue"
        >str</span
      ><span class="topic-code-green">"</span>, %[y,
      <span class="topic-code-green">42</span>,
      <span class="topic-code-green">"</span><span class="topic-code-blue"
        >val</span
      ><span class="topic-code-green">"</span>],<br />
      &nbsp;&nbsp;&nbsp;&nbsp;%&lbrace;<span class="topic-code-green">"</span
      ><span class="topic-code-blue">k1</span><span class="topic-code-green"
        >"</span
      >:
      <span class="topic-code-green">-42</span>, k2:
      <span class="topic-code-green">43</span>&rbrace;, %(<span
        class="topic-code-green">42</span
      >,
      <span class="topic-code-green">1</span>::<span class="topic-code-green"
        >1</span
      >, <span class="topic-code-green">0</span>::<span class="topic-code-green"
        >1</span
      >)] each: &lbrace; elem | <br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;puts: elem object_id<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&rbrace;,<br />
      &nbsp;&nbsp;if: x &lt; y then: &lbrace; x &rbrace; else: &lbrace; y &rbrace;,<br
      />
      }<br />
    </code>
  </div>

  <div class="topic topic-gc">
    <div class="topic-title">Garbage Collectors</div>
    <code>
      <span class="topic-code-cyan">if</span>(esp &gt; ebp) &lbrace; <br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">void</span> *ptr;<br
      />
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">for</span>(ptr =
      esp; ptr &gt;= ebp; ptr = ((<span class="topic-code-cyan">char</span
      >*)ptr) - <span class="topic-code-purple">sizeof</span>(<span
        class="topic-code-cyan">void</span
      >*))<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterate_mark(bin, *((<span
        class="topic-code-cyan">void</span
      >**)ptr));<br />
      &rbrace;<br />
      <span class="topic-code-cyan">if</span>(esp &lt; ebp) &lbrace;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">void</span> *ptr;<br
      />
      &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">for</span>(ptr =
      esp; ptr &lt;= ebp; ptr = ((<span class="topic-code-cyan">char</span
      >*)ptr) + <span class="topic-code-purple">sizeof</span>(<span
        class="topic-code-cyan">void</span
      >*))<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterate_mark(bin, *((<span
        class="topic-code-cyan">void</span
      >**)ptr));<br />
      &rbrace;<br />
    </code>
  </div>

  <div class="topic topic-quines">
    <div class="topic-title">Obfuscated Quines</div>
    <code>
      <span class="topic-code-cyan">eval</span><span class="topic-code-blue"
        >$q</span
      >=<span class="topic-code-green">%w(</span><span class="topic-code-blue"
        >q=%(eval$q=%w(#&lbrace;$q&rbrace;)*"";);puts(q);</span
      ><span class="topic-code-green">)</span>*<span class="topic-code-green"
        >""</span
      >;
    </code>
  </div>
</div>

<style>
  .computer-related-topics-i-enjoy {
    display: flex;
    padding-top: 15vw;
    height: 115vw;
  }

  .computer-related-topics-i-enjoy-phrase {
    transform: translate(23%, -12%);
    font-size: 5vw;
    font-family: var(--display-font);
  }

  .topic {
    padding: 1vw;
    border-radius: 2vw;
    background: var(--bg-color);
    box-shadow: var(--neumorphic-shadow3);
  }

  span {
    color: var(--fg-color);
  }

  .topic-pentesting {
    position: absolute;
    width: 40vw;
    height: 18vw;
    font-size: 1.25vw;
  }
  .topic-interpreters {
    position: absolute;
    width: 38vw;
    height: 14vw;
    font-size: 1.25vw;
  }
  .topic-oop {
    position: absolute;
    width: 62vw;
    height: 20vw;
    font-size: 1.25vw;
  }
  .topic-gc {
    position: absolute;
    width: 53vw;
    height: 22vw;
    font-size: 1.25vw;
  }
  .topic-quines {
    position: absolute;
    width: 40vw;
    height: 4vw;
    font-size: 1.25vw;
  }

  .topic-title {
    position: absolute;
    font-size: 2.5vw;
    font-style: italic;
  }
</style>
