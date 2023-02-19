<script>
    export let title;
</script>

<!-- Common -->
<head>
    <meta charset="UTF-8">
    <title>{title}</title>
    <meta name="description" content={"Thanasis's Portfolio"}>
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <script is:inline src="/Swup.js"></script>
    <script is:inline defer src="/app.js"></script>
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
