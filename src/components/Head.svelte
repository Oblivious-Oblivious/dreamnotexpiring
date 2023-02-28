<script>
    export let title;
</script>

<!-- Common -->
<head>
    <meta charset="UTF-8">
    <title>{title}</title>
    <meta name="description" content={"Thanasis's Portfolio"}>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script> -->
    <script src="https://cdn.jsdelivr.net/npm/@hotwired/turbo@7.2.5/dist/turbo.es2017-umd.min.js"></script>
    <script defer src="/main.js"></script>
    <title>{title}</title>

    <!-- Sitemap -->
    <link rel="sitemap" href="/sitemap.xml">

    <!-- RSS -->
    <link rel="alternate" type="application/rss+xml" href="/feed/posts.xml">

    <!-- SEO -->
    <meta property="og:title" content={title}>
    <meta property="og:description" content={"Thanasis's Portfolio"}>

    <meta name="twitter:site" content="@astro">
    <meta name="twitter:title" content={title}>
    <meta name="twitter:description" content={"Thanasis's Portfolio"}>
</head>
