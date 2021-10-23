<script>
  // import { createEventDispatcher } from "svelte";
  import { FeedbackStore } from "../stores";
  import Card from "./UI/Card.svelte";
  export let feedback;

  // const dispatch = createEventDispatcher();

  const handleDelete = (feedbackId) => {
    // dispatch("delete-feedback", feedbackId);
    FeedbackStore.update((currentFeedback) => {
      return currentFeedback.filter((feedback) => feedback.id != feedbackId);
    });
  };
</script>

<Card>
  <div class="num-display">
    {feedback.rating}
  </div>
  <button class="close" on:click={() => handleDelete(feedback.id)}>X</button>
  <p class="text-display">{feedback.comment}</p>
</Card>

<style>
  .num-display {
    position: absolute;
    top: -10px;
    left: -10px;
    width: 50px;
    height: 50px;
    background: #ff6a95;
    color: #fff;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    text-align: center;
    font-size: 19px;
  }

  .close {
    position: absolute;
    top: 10px;
    right: 20px;
    cursor: pointer;
    background: none;
    border: none;
  }
</style>
