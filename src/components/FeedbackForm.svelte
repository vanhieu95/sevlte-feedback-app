<script>
  import { v4 as uuidv4 } from "uuid";
  // import { createEventDispatcher } from "svelte";
  import { FeedbackStore } from "../stores";
  import Card from "./UI/Card.svelte";
  import Button from "./UI/Button.svelte";
  import RatingSelect from "./RatingSelect.svelte";

  let text = "";
  let rating = 10;
  let btnDisabled = true;
  let min = 10;
  let message;

  // const dispatch = createEventDispatcher();

  const handleSelect = (event) => (rating = event.detail);

  const handleInput = () => {
    if (text.trim().length <= min) {
      message = `Text must be at least ${min} characters`;
      btnDisabled = true;
    } else {
      message = null;
      btnDisabled = false;
    }
  };

  const handleSubmit = () => {
    if (text.trim().length > min) {
      const newFeedBack = {
        id: uuidv4(),
        rating: +rating,
        comment: text,
      };

      // dispatch("add-feedback", newFeedBack);
      FeedbackStore.update((currentFeedback) => {
        return [newFeedBack, ...currentFeedback];
      });
      text = "";
    }
  };
</script>

<Card>
  <header>
    <h2>How would you rate your service with us?</h2>
  </header>
  <form on:submit|preventDefault={handleSubmit}>
    <RatingSelect on:rating-selected={handleSelect} />
    <div class="input-group">
      <input
        type="text"
        on:input={handleInput}
        bind:value={text}
        placeholder="Tell us something that keeps you coming back"
      />
      <Button disabled={btnDisabled} type="submit">Send</Button>
    </div>
    {#if message}
      <div class="message">
        {message}
      </div>
    {/if}
  </form>
</Card>

<style>
  header {
    max-width: 400px;
    margin: auto;
  }
  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }
  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }
  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }
  input:focus {
    outline: none;
  }
  .message {
    padding-top: 10px;
    text-align: center;
    color: #663399;
  }
</style>
