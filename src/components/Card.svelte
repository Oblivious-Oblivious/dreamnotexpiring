<script>
    export let href;
    export let title;
    export let body;
</script>

<div class="link-card">
    <a href={href}>
        <div class="link-title">{title}&nbsp;<span>&rarr;</span></div>
        <div class="link-body">{body}</div>
    </a>
</div>

<style lang="scss">
    .link-card {
        list-style: none;
        display: flex;
        padding: 0.25rem;
        background-color: var(--bg-color);
        background-image: none;
        background-size: 400%;
        border-radius: 0.6rem;
        background-position: 100%;
        transition: background-position 0.6s cubic-bezier(0.22, 1, 0.36, 1);
        box-shadow: 0 4px 6px -1px var(--shadow-color), 0 2px 4px -2px var(--shadow-color);

        &:is(:hover, :focus-within) {
            background-position: 0;
            background-image: var(--accent-gradient);
        }

        &:is(:hover, :focus-within) .link-title {
            color: rgb(var(--accent));
        }

        a {
            width: 100%;
            text-decoration: none;
            line-height: 1.4;
            padding: 1rem 1.3rem;
            border-radius: 0.35rem;
            color: var(--fg-color);
            background-color: var(--bg-color);
            opacity: 0.8;

            .link-title {
                margin: 0;
                font-size: 1.25rem;
                transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
            }

            .link-body {
                margin-top: 0.5rem;
                margin-bottom: 0;
                color: var(--fg-color);
            }
        }
    }
</style>
