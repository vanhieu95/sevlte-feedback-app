<script>
  // import { onMount, onDestroy } from "svelte";
  import { fade, scale } from "svelte/transition";
  import { FeedbackStore } from "../stores";
  import FeedbackForm from "./FeedbackForm.svelte";
  import FeedbackItem from "./FeedbackItem.svelte";
  // export let feedbacks = [];

  // const unsubcribe = FeedbackStore.subscribe((data) => (feedbacks = data));

  // onDestroy(() => {
  //   unsubcribe();
  // });
</script>

{#each $FeedbackStore as feedback (feedback.id)}
  <div in:scale out:fade={{ duration: 500 }}>
    <FeedbackItem {feedback} />
  </div>
{/each}
