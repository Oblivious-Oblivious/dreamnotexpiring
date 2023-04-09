<script>
    import { onMount } from "svelte";

    onMount(() => {
        gsap.to(".computer-related-topics-i-enjoy", {
            autoAlpha: 1,
        });
    });
</script>

<div class="computer-related-topics-i-enjoy-phrase">
    <div>Computer Related</div>
    <div>Topics I Enjoy</div>
</div>

<div class="computer-related-topics-i-enjoy" style="visibility: hidden;">
    <div class="topic topic-pentesting">
        <div class="topic-title">Penetration Testing</div>
        <code>
            <span class="topic-code-cyan">unsigned char</span> code[] = <br>
            &nbsp;&nbsp;&nbsp;<span class="topic-code-blue">"</span><span class="topic-code-green">\x56\x5a\x56\x48\xbf\x2f\x62\x69\x6e\x2f</span><br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-green">\x2f\x73\x68\x57\x54\x5f\xb0\x3b\x0f\x05</span><span class="topic-code-blue">"</span>;<br>
            <br>
            <span class="topic-code-cyan">int</span> main(<span class="topic-code-cyan">void</span>) &lbrace;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">int</span> (*s)() = (<span class="topic-code-cyan">int</span>(*)())code;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;s();<br>
            &rbrace;
        </code>
    </div>

    <div class="topic topic-interpreters">
        <div class="topic-title">Interpreters</div>
        <code>
            <span class="topic-code-orange">eval</span>[e;a] = [atom[e] -> <span class="topic-code-orange">cdr</span>[assoc[e;a]];<br>
            &nbsp;&nbsp;&nbsp;&nbsp;atom[<span class="topic-code-orange">car</span>[e]] -><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[eq[<span class="topic-code-orange">car</span>[e],QUOTE] -> cadr[e];<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;eq[<span class="topic-code-orange">car</span>[e];COND] -> evcon[<span class="topic-code-orange">cdr</span>[e];a];<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;T -> <span class="topic-code-orange">apply</span>[<span class="topic-code-orange">car</span>[e];evlis[<span class="topic-code-orange">cdr</span>[e];a];a]];<br>
            &nbsp;&nbsp;&nbsp;&nbsp;T -> <span class="topic-code-orange">apply</span>[<span class="topic-code-orange">car</span>[e];evlis[<span class="topic-code-orange">cdr</span>[e];a];a]]<br>
        </code>
    </div>

    <div class="topic topic-oop">
        <div class="topic-title">Object Oriented Programming</div>
        <code>
            <span class="topic-code-red">#example_with_number</span>: x =&gt; ( <br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-green">true</span> & <span class="topic-code-green">false</span> <span class="topic-code-purple">not</span> & (<span class="topic-code-cyan">nil</span> is_nil?) if_false: -&gt; &lbrace; <span class="topic-code-cyan">self</span> halt &rbrace;,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;y = <span class="topic-code-cyan">self</span> size + <span class="topic-code-cyan">super</span> size,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;[<span class="topic-code-green">'</span><span class="topic-code-blue">a</span><span class="topic-code-green">'</span>, <span class="topic-code-green">"</span><span class="topic-code-blue">a</span><span class="topic-code-green">"</span>, <span class="topic-code-green">1</span>, <span class="topic-code-green">1.0</span>, &lbrace;"k1": <span class="topic-code-green">42</span>, k2: <span class="topic-code-green">43</span>&rbrace;] each: -&gt; &lbrace; elem | (<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;elem class name puts,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-green">"</span> <span class="topic-code-green">"</span> puts<br>
            &nbsp;&nbsp;&nbsp;&nbsp;)&rbrace;,<br>
            &nbsp;&nbsp;&nbsp;&nbsp;x &lt; y<br>
            )<br>
        </code>
    </div>

    <div class="topic topic-gc">
        <div class="topic-title">Garbage Collectors</div>
        <code>
            <span class="topic-code-cyan">if</span>(esp &gt; ebp) &lbrace; <br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">void</span> *ptr;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">for</span>(ptr = esp; ptr &gt;= ebp; ptr = ((<span class="topic-code-cyan">char</span>*)ptr) - <span class="topic-code-purple">sizeof</span>(<span class="topic-code-cyan">void</span>*))<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterate_mark(bin, *((<span class="topic-code-cyan">void</span>**)ptr));<br>
            &rbrace;<br>
            <span class="topic-code-cyan">if</span>(esp &lt; ebp) &lbrace;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">void</span> *ptr;<br>
            &nbsp;&nbsp;&nbsp;&nbsp;<span class="topic-code-cyan">for</span>(ptr = esp; ptr &lt;= ebp; ptr = ((<span class="topic-code-cyan">char</span>*)ptr) + <span class="topic-code-purple">sizeof</span>(<span class="topic-code-cyan">void</span>*))<br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;iterate_mark(bin, *((<span class="topic-code-cyan">void</span>**)ptr));<br>
            &rbrace;<br>
        </code>
    </div>

    <div class="topic topic-quines">
        <div class="topic-title">Obfuscated Quines</div>
        <code>
            <span class="topic-code-cyan">eval</span><span class="topic-code-blue">$q</span>=<span class="topic-code-green">%w(</span><span class="topic-code-blue">q=%(eval$q=%w(#&lbrace;$q&rbrace;)*"";);puts(q);</span><span class="topic-code-green">)</span>*<span class="topic-code-green">""</span>;
        </code>
    </div>
</div>

<style>
    .computer-related-topics-i-enjoy {
        display: flex;
        flex-direction: column;
        gap: 15vw;
        padding-bottom: 20vw;
    }

    .computer-related-topics-i-enjoy-phrase {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 10vw;
        font-family: var(--display-font);
        font-style: italic;
        padding-top: 20vw;
        padding-bottom: 5vw;
    }

    .topic {
        padding: 2vw;
        border-radius: 2vw;
        background: var(--bg-color);
        box-shadow: var(--neumorphic-shadow3);
        transform: translateX(5vw);
    }

    span {
        color: var(--fg-color);
    }

    .topic-pentesting {
        width: 90vw;
        height: 48vw;
        font-size: 3.05vw;
    }
    .topic-interpreters {
        width: 90vw;
        height: 45vw;
        font-size: 3.05vw;
    }
    .topic-oop {
        width: 90vw;
        height: 63vw;
        font-size: 3.05vw;
    }
    .topic-gc {
        width: 90vw;
        height: 67vw;
        font-size: 3.05vw;
    }
    .topic-quines {
        width: 90vw;
        height: 22vw;
        font-size: 3.05vw;
    }

    .topic-title {
        font-size: 5vw;
        font-style: italic;
        text-decoration: underline;
    }
</style>
