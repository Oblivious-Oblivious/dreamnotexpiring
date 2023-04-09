<script>
    export let title;
</script>

<!-- Common -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Prevent HTTP caching -->
    <meta http-equiv="Cache-Control" content="private, no-store" />

    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Description -->
    <meta name="description" content="Portfolio of Thanasis Papapostolou">

    <!-- Page Icon -->
    <link rel="icon" type="image/svg+xml" href="/icon/favicon.svg">
    <link rel="icon" type="image/png" href="/icon/favicon.png">

    <!-- Neonderthaw Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Neonderthaw&display=swap" rel="stylesheet">
    <!-- Sitemap -->
    <!-- <link rel="sitemap" href="/sitemap.xml"> -->

    <!-- RSS -->
    <!-- <link rel="alternate" type="application/rss+xml" href="/feed/posts.xml"> -->

    <!-- og and twitter SEO -->
    <meta property="og:title" content={title}>
    <meta property="og:description" content="Portfolio of Thanasis Papapostolou">

    <meta name="twitter:site" content="@astro">
    <meta name="twitter:title" content={title}>
    <meta name="twitter:description" content="Portfolio of Thanasis Papapostolou">

    <!-- Title -->
    <title>{title}</title>
</head>
