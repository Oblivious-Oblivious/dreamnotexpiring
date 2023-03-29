<script>
    export let title;
</script>

<!-- Common -->
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">

    <!-- Prevent HTTP caching -->
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate">
    <meta http-equiv="Pragma" content="no-cache">
    <meta http-equiv="Expires" content="0">

    <!-- Viewport -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Description -->
    <meta name="description" content="Portfolio of Thanasis Papapostolou">

    <!-- Page Icon -->
    <link rel="icon" type="image/svg+xml" href="/icon/favicon.svg">
    <link rel="icon" type="image/png" href="/icon/favicon.png">

    <!-- GSAP -->
    <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    <!-- <script is:inline src="/js/gsap.min.js"></script> -->
    <script is:inline src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
    <!-- <script is:inline src="/js/ScrollTrigger.min.js"></script> -->
    <script is:inline src="/js/ScrollSmoother.min.js"></script>

    <!-- Blotter -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/blotter.js" integrity="sha512-xPlQVbjVIwT87dKt/F1NbPQfx/LNSbKa/2nBBEGYncA4r2cd9hpFh/7+4FiQS6pWWvfz8pR19H+iCWFaHOPNQg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/channelSplitMaterial.min.js" integrity="sha512-R32Ze9rVhuQDws+nB1mlGcsddPA8eyKmnrhCov6nqaQJgzo3QdpksX0EUtrb0fTehOrwRh8yUDeZ0enMi77pSQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/fliesMaterial.min.js" integrity="sha512-O0ZGr/FxL9gkvxJZzOohrfkQjZw+WaIvXXXLKVCASwrB8/wRnpvq1WDhoHXQ5WkHYCj+opsR+sUqkWcmtnBb/A==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/rollingDistortMaterial.min.js" integrity="sha512-oZlRi+2/UqweL66OV5K871iUNEZm7mYhFtbiUp0Oxs6gK96nPIJUGQAMFXcx0Ax0LdGMNuqeBf90kShN6GAmrg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Blotter/0.1.0/materials/slidingDoorMaterial.min.js" integrity="sha512-YaDQp342DPZndINwYGJM0WbaslkZO/jLl3w3IVuj0E79oOmVgD2ZXSFwnUFAH43vpiwFBnfcOgwGfi1+OHYRMg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

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
