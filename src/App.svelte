<script>
  import FeedbackForm from "./components/FeedbackForm.svelte";
  import FeedbackStats from "./components/FeedbackStats.svelte";
  import FeedbackList from "./components/FeedbackList.svelte";

  // let feedbacks = [];

  // $: reviewCount = feedbacks.length;
  // $: ratingAverage =
  //   feedbacks.reduce((total, { rating }) => total + rating, 0) / reviewCount;

  // const addFeedback = (event) => {
  //   const newFeedBack = event.detail;
  //   feedbacks = [newFeedBack, ...feedbacks];
  // };

  // const deleteFeedback = (event) => {
  //   const feedbackId = event.detail;
  //   feedbacks = feedbacks.filter((feedback) => feedback.id !== feedbackId);
  // };
</script>

<main class="container">
  <FeedbackForm />
  <FeedbackStats />
  <FeedbackList />
</main>
