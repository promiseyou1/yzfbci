/*** find the chart and list tag below ***/
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",

  // The data for our dataset
  data: {
    labels: [],
    datasets: [
      {
        label: "ugpm3",
        borderColor: "rgb(255, 99, 132)",
        data: [],
        fill: false,
      },
      {
        label: "heat",
        borderColor: "blue",
        data: [],
        fill: false,
      },
      {
        label: "humidity",
        borderColor: "green",
        data: [],
        fill: false,
      },
    ],
  },
  // Configuration options go here
  options: {
    title: {
      display: true,
      text: new Date().toLocaleDateString(),
    },
  },
});

const dataList = document.getElementById("received-data-list");
/*** find the chart and list tag above***/
