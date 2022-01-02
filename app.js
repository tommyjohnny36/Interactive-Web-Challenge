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

    const getSamplesData = data.samples;
    let sampleResults = getSamplesData[0];

    const getMetaData = data.metadata;
    let metaDataResults= getMetaData[0];


    let otu_ids = sampleResults.otu_ids
    console.log(otu_ids)


  // let dropDown = d3.select("#selDataset")

  
  // metaData.forEach((d) => {
  //   dropDown.append("option").text(d.id).property("value", d.id)

  //     // Filter metadata so that only the id is returned 
  //     // when equality is found between the function value sampleId and 
  //     // id from metadata object
  //     let filteredData = data.filter(d => d.id == sampleId)
  //     console.log(filteredData)
    
  })
//     function createDemographicData(sampleId){

//       // Helper variable to call metadata object
//       let metaData = data.metadata
    
 
//       // Select the #sample-metadata <div> 'id' tag within the index.html file
//       // and take the entry from filteredData, and append the information as text 
//       // forEach key and value inside the container
    
//       let sampleMetaData = d3.selectAll("#sample-metadata")
    
//       let dem_table = Object.entries(filteredData).forEach(([key, value]) => {
//         sampleMetaData.append("h4").text(key,value);
//       })
//       console.log(dem_table)
//       // Object.entries(filteredData).forEach(([key, value]) => {
//       //   sampleMetaData.append("h4").text(`${key, value}`);
      
//       })
    
//     }
    
//     // data is exists and I now begin to put it all together

//     const bubble = svg.selectAll("bubble")
//           .data(data.metadata);

//     bubble.attr("cx", (d, i) => Math.floor(Math.random() * 200) + d.samples.otu_ids*i)
//           .attr("cy", (d, i) => Math.floor(Math.random() * 100) + d.samples.sample_values)
//           .attr("r", (d, i) => (d.samples.sample_values) * 2)
//           .attr("fill", "black")

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