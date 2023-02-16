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

let pageView = [
  "10K pageviews",
  "50K pageviews",
  "100K pageviews",
  "500K pageviews",
  "1M pageviews",
];
let perMonth = ["$8", "$12", "$16", "$24", "$36"];
let perYear = ["$72", "$108", "$144", "$206", "$288"];
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
      case "0":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perMonth[moneySlider.value];
        break;
      case "1":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perMonth[moneySlider.value];
        break;
      case "2":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perMonth[moneySlider.value];
        break;
      case "3":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perMonth[moneySlider.value];
        break;
      case "4":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perMonth[moneySlider.value];
        break;
    }
  } else {
    switch (moneySlider.value) {
      case "0":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perYear[moneySlider.value];
        break;
      case "1":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perYear[moneySlider.value];
        break;
      case "2":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perYear[moneySlider.value];
        break;
      case "3":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perYear[moneySlider.value];
        break;
      case "4":
        pageViews.innerHTML = pageView[moneySlider.value];
        priceNumberPerMonth.innerHTML = perYear[moneySlider.value];
        break;
    }
  }
}

function updateProgressBar() {
  let sliderValue = parseFloat(moneySlider.value);
  switch (sliderValue) {
    case 0:
      moneySlider.style.background = `linear-gradient(
            to right,
            var(--Soft-Cyan-Full-Slider-Bar) 0%,
            var(--Soft-Cyan-Full-Slider-Bar) 0%,
            #d3d3d3 0%,
            #d3d3d3 100%)`;
      break;
    case 1:
      moneySlider.style.background = `linear-gradient(
            to right,
            var(--Soft-Cyan-Full-Slider-Bar) 0%,
            var(--Soft-Cyan-Full-Slider-Bar) 25%,
            #d3d3d3 25%,
            #d3d3d3 100%)`;
      break;
    case 2:
      moneySlider.style.background = `linear-gradient(
        to right,
        var(--Soft-Cyan-Full-Slider-Bar) 0%,
        var(--Soft-Cyan-Full-Slider-Bar) 50%,
        #d3d3d3 50%,
        #d3d3d3 100%)`;
      break;
    case 3:
      moneySlider.style.background = `linear-gradient(
        to right,
        var(--Soft-Cyan-Full-Slider-Bar) 0%,
        var(--Soft-Cyan-Full-Slider-Bar) 75%,
        #d3d3d3 75%,
        #d3d3d3 100%)`;
      break;
    case 4:
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
