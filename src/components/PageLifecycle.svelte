<script>
    export let current_page;

    import { onMount } from "svelte";
    import { underline_value } from "./Header/underline_value";

    onMount(() => {
        $underline_value = current_page;
    });

    let class_prop_warning_fix = "";
    export { class_prop_warning_fix as class };
</script>

<div class:class_prop_warning_fix></div>
