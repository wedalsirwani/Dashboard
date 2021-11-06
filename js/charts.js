// Line Chart for Orders
var ordersChart = document.getElementById("myAreaChart");
var Chart1 = new Chart(ordersChart, {
    type:"line",
    data:{
        labels:["Riyadh", "Jeddah", "Sharqia", "Mecca", "Medina"],
        datasets:[{
            label:"Population",
            data:[
            175961,
            167446,
            153624,
            142000,
            12697
            ],
            backgroundColor:[
            "rgba(218, 65, 103, 1)",
            "rgb(64, 29, 186)",
            "rgba(218, 65, 103, 1)",
            "rgb(64, 29, 186)",
            ]
        }]
    },
    options:{
        plugins: {
    legend: {
        display: false,
    }}}
});
// Bar Chart for Visitor
var visitorChart = document.getElementById("myBarChart");
var ChartTwo = new Chart(visitorChart, {
    type:"bar",
    data:{
        labels:["Riyadh", "Jeddah", "Sharqia", "Mecca", "Medina"],
        datasets:[{
            label:"Population",
            data:[
            5961,
            7446,
            3624,
            2000,
            697
            ],
            backgroundColor:[
            "rgba(218, 65, 103, 1)",
            "rgb(64, 29, 186)",
            "rgba(218, 65, 103, 1)",
            "rgb(64, 29, 186)",
            ]
        }]
    },
    options:{
        plugins: {
    legend: {
        display: false,
    }}
    }
});
// Liner Chart for Cities
var citiesChart = document.getElementById("myPieChart");
var ChartThree = new Chart(citiesChart, {
    type:"pie",
    data:{
        labels:["Riyadh", "Jeddah", "Sharqia", "Mecca", "Medina"],
        datasets:[{
            label:"Population",
            data:[
            5961,
            7446,
            3624,
            2000,
            697
            ],
            backgroundColor:[
            "#da4167",
            "black",
            "green",
            "pink",
            ]
        }]
    },
    options:{
        maintainAspectRatio: false,
    }
});
// Liner Chart for Rat
var ratChart = document.getElementById("myLinearChart");
var ChartFour = new Chart(ratChart, {
    type:"line",
    data:{
        labels:["Riyadh", "Jeddah", "Sharqia", "Mecca", "Medina"],
        datasets:[{
            label:"Population",
            data:[
            5961,
            7446,
            3624,
            2000,
            697
            ],
            backgroundColor:[
            "rgba(218, 65, 103, 1)",
            "rgb(64, 29, 186)",
            "rgba(218, 65, 103, 1)",
            "rgb(64, 29, 186)",
            ]
        }]
    },
    options:{
        fill: true,
        plugins: {
    legend: {
        display: false,
    }}
    }
});
