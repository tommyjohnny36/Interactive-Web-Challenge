const sampleMetaData = d3.select("#sample-metadata");

// var layout = {
//   width: "100%",
//   height: "100%"
// }
// var width = "100%"
// var height = "100%"

// const svg = sampleMetaData.append("svg")
//                           .attr('width', width)
//                           .attr('height', height)

// Parse JSON data

d3.json("samples.json")
  .then(data =>{


    // Create a horizontal bar chart 
    // with a dropdown menu to display the top 10 OTUs found in that individual.

  // Fetch the JSON data and console log it

//     const bubble = svg.selectAll("bubble")
//           .data(data.metadata);

//     bubble.attr("cx", (d, i) => Math.floor(Math.random() * 200) + d.samples.otu_ids*i)
//           .attr("cy", (d, i) => Math.floor(Math.random() * 100) + d.samples.sample_values)
//           .attr("r", (d, i) => (d.samples.sample_values) * 2)
//           .attr("fill", "black")


})}
//     // append enter selection to add new bubbles to the html area
//     bubble.enter()
//           .append("bubble")
//           .attr("cx", (d, i) => Math.floor(Math.random() * 200) + d.samples.otu_ids*i)
//           .attr("cy", (d, i) => Math.floor(Math.random() * 100) + d.samples.sample_values)
//           .attr("r", (d, i) => (d.samples.sample_values) * 2)
//           .attr("fill", "black")


// function init() {

//   })

// })}

// function optionChanged(sampleId){
//   createDemographicData(sampleId)
// }

// function createPlots() {

//   let chartData = [{
//     values: sample_values,
//     labels: otu_ids,
//     type: "bar"
//   }];

//       let layout = {
//         height: 600,
//         width: 800
//       };

//       Plotly.newPlot("bar", chartData, layout);
  
// }
// init();