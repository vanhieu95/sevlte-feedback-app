<script>
  import { FeedbackStore } from "../stores";
  $: reviewCount = $FeedbackStore.length;
  $: ratingAverage =
    $FeedbackStore.reduce((total, { rating }) => total + rating, 0) /
    reviewCount;
</script>

<div class="feedback-stats">
  <h4>{reviewCount} Reviews</h4>
  <h4>Rating Average: {ratingAverage || 0}</h4>
</div>

<style>
  .feedback-stats {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
