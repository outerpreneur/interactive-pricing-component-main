// Here are the different page view ranges and the corresponding monthly price totals:

// - 10K pageviews / $8 per month step 1
// - 50K pageviews / $12 per month step 2
// - 100K pageviews / $16 per month step 3 default value 3
// - 500k pageviews / $24 per month step 4
// - 1M pageviews / $36 per month step 5

// If the visitor switches the toggle to yearly billing, a 25% discount should be applied to all prices.

const pageViews = document.querySelector(".pageviews");
const priceNumberPerMonth = document.querySelector(".price-number");
let moneySlider = document.querySelector(".money-slider");
const switchPeriod = document.querySelector(".switch");
const time = document.querySelector(".time");

let pageView = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = ["$8", "$12", "$16", "$24", "$36"];
let isYearly = false;

switchPeriod.addEventListener("change", () => {
  if (isYearly === true) {
    isYearly = false;
    time.innerHTML = "/ month";
    updateValue();
  } else {
    isYearly = true;
    time.innerHTML = "/ year";
    updateValue();
  }
});

moneySlider.addEventListener("change", () => {
  console.log("work?");
  updateValue();
  updateProgressBar();
});

function updateValue() {
  if (isYearly == false) {
    switch (moneySlider.value) {
      case "1":
        pageViews.innerHTML = "10K pageviews";
        priceNumberPerMonth.innerHTML = "$8";
        break;
      case "2":
        pageViews.innerHTML = "50K pageviews";
        priceNumberPerMonth.innerHTML = "$12";
        break;
      case "3":
        pageViews.innerHTML = "100K pageviews";
        priceNumberPerMonth.innerHTML = "$16";
        break;
      case "4":
        pageViews.innerHTML = "500K pageviews";
        priceNumberPerMonth.innerHTML = "$24";
        break;
      case "5":
        pageViews.innerHTML = "1M pageviews";
        priceNumberPerMonth.innerHTML = "$36";
        break;
    }
  } else {
    switch (moneySlider.value) {
      case "1":
        pageViews.innerHTML = "10K pageviews";
        priceNumberPerMonth.innerHTML = "$72";
        break;
      case "2":
        pageViews.innerHTML = "50K pageviews";
        priceNumberPerMonth.innerHTML = "$108";
        break;
      case "3":
        pageViews.innerHTML = "100K pageviews";
        priceNumberPerMonth.innerHTML = "$144";
        break;
      case "4":
        pageViews.innerHTML = "500K pageviews";
        priceNumberPerMonth.innerHTML = "$206";
        break;
      case "5":
        pageViews.innerHTML = "1M pageviews";
        priceNumberPerMonth.innerHTML = "$288";
        break;
    }
  }
}

function updateProgressBar() {
  let sliderValue = parseFloat(moneySlider.value);
  switch (sliderValue) {
    case 1:
      moneySlider.style.background = `linear-gradient(
            to right,
            var(--Soft-Cyan-Full-Slider-Bar) 0%,
            var(--Soft-Cyan-Full-Slider-Bar) 0%,
            #d3d3d3 0%,
            #d3d3d3 100%)`;
      break;
    case 2:
      moneySlider.style.background = `linear-gradient(
            to right,
            var(--Soft-Cyan-Full-Slider-Bar) 0%,
            var(--Soft-Cyan-Full-Slider-Bar) 25%,
            #d3d3d3 25%,
            #d3d3d3 100%)`;
      break;
    case 3:
      moneySlider.style.background = `linear-gradient(
        to right,
        var(--Soft-Cyan-Full-Slider-Bar) 0%,
        var(--Soft-Cyan-Full-Slider-Bar) 50%,
        #d3d3d3 50%,
        #d3d3d3 100%)`;
      break;
    case 4:
      moneySlider.style.background = `linear-gradient(
        to right,
        var(--Soft-Cyan-Full-Slider-Bar) 0%,
        var(--Soft-Cyan-Full-Slider-Bar) 75%,
        #d3d3d3 75%,
        #d3d3d3 100%)`;
      break;
    case 5:
      moneySlider.style.background = `linear-gradient(
        to right,
        var(--Soft-Cyan-Full-Slider-Bar) 0%,
        var(--Soft-Cyan-Full-Slider-Bar) 100%,
        #d3d3d3 100%,
        #d3d3d3 100%)`;
      break;
    default:
      break;
  }
}
