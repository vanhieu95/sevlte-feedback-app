import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 7,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    rating: 8,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    rating: 9,
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
]);
