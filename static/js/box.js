// let parties = [
//     {
//       "Democrat": 17.46018817,
//       "Republican": 46.4892298
//     },
//     {
//       "Democrat": 27.528923,
//       "Republican": 112.6013924
//     },
//     {
//       "Democrat": 42.71137346,
//       "Republican": 14.21048783
//     },
//     {
//       "Democrat": 69.16594245,
//       "Republican": 41.57453127
//     },
//     {
//       "Democrat": 10.68292321,
//       "Republican": 31.6925735
//     },
//     {
//       "Democrat": 67.16664027,
//       "Republican": 41.43685033
//     },
//     {
//       "Democrat": 35.2009247,
//       "Republican": 17.4651998
//     },
//     {
//       "Democrat": 42.91042211,
//       "Republican": 41.59574257
//     },
//     {
//       "Democrat": 81.35730454,
//       "Republican": 39.02189705
//     },
//     {
//       "Democrat": 33.74028145,
//       "Republican": 41.79961198
//     },
//     {
//       "Democrat": 25.70936813,
//       "Republican": 41.2614788
//     },
//     {
//       "Democrat": 15.38356412,
//       "Republican": 51.2887441
//     },
//     {
//       "Democrat": 32.66548791,
//       "Republican": 52.75456143
//     },
//     {
//       "Democrat": 24.66783136,
//       "Republican": 27.34835923
//     },
//     {
//       "Democrat": 37.52581081,
//       "Republican": 38.44798471
//     },
//     {
//       "Democrat": 27.34938392,
//       "Republican": 34.62942911
//     },
//     {
//       "Democrat": 37.50297834,
//       "Republican": 38.58323397
//     },
//     {
//       "Democrat": 29.15578918,
//       "Republican": 38.82846689
//     },
//     {
//       "Democrat": 30.65398668,
//       "Republican": 43.59562027
//     },
//     {
//       "Democrat": 42.25956317,
//       "Republican": 61.37894563
//     },
//     {
//       "Democrat": 21.87708207,
//       "Republican": 27.58617609
//     },
//     {
//       "Democrat": 33.5147699,
//       "Republican": 54.14884524
//     },
//     {
//       "Democrat": null,
//       "Republican": 23.30673852
//     },
//     {
//       "Democrat": null,
//       "Republican": 17.19605449
//     },
//     {
//       "Democrat": null,
//       "Republican": 32.6842945
//     },
//     {
//       "Democrat": null,
//       "Republican": 33.60226718
//     },
//     {
//       "Democrat": null,
//       "Republican": 41.56012561
//     },
//     {
//       "Democrat": null,
//       "Republican": 56.1503655
//     }
//    ]



  

function plotFromJSON() {
    // Plotly.d3.csv("../data/bluered.csv", function(err, rows) {
    Plotly.d3.json("data/bluered.csv", function(err, rows) {
        // console.log(rows)
        processData(rows);
    });
}

function processData(allRows) {
    let y1 = [];
    let y2 = [];
    let row;

    let i = 0;
    while (i < allRows.length) {
        row = allRows[i];
        y1.push(row["Democrat"]);
        y2.push(row["Republican"]);
        i += 1;
    }
    console.log(y1);
    makePlotly(y1, y2);
}

function makePlotly(y1, y2) {
    let traces = [
        {
            y: y1,
            type: "box",
            // boxmean: true,
            name: "Democrat leaning"
        },
        {
            y: y2,
            type: "box",
            marker: {
                color: 'rgb(255,0,0)'
              },
            // boxmean: true,
            
            name: "Republican leaning"
        }
        
    ];

    let layout = {
        title: "Box and Whisker Plot Per Capita Incidents",
        yaxis: {
            gridcolor: "lightgrey",
            gridwidth: 2,
            zerolinewidth: 3,
            title: 'Gun Incidents Per Capita'
        },
        y1: {
            
        }
    };

    let config = { responsive: true };

    Plotly.newPlot("plot", traces, layout, config);
}

plotFromJSON();
