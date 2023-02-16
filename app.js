// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month step 1
// - 50K pageviews / $12 per month step 2
// - 100K pageviews / $16 per month step 3 default value 3
// - 500k pageviews / $24 per month step 4
// - 1M pageviews / $36 per month step 5

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

const pageViews = document.querySelector(".pageviews");
const priceNumberPerMonth = document.querySelector(".price-number");
