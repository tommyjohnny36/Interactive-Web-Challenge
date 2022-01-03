function init() {

  d3.json("samples.json").then((data) => {
    let samples = data.samples;
    let result = samples[0];

    let otu_ids = result.otu_ids
    console.log(otu_ids)
    
    let sample_values = Object.values(result.sample_values)
  // let otu_ids = Object.keys(result.otu_ids)

// Create an array that pulls in sample_values as the values to be graphed
// let sample_values = Object.values(result.sample_values)

// Create an array of chart labels
// let otu_labels = Object.keys(result.otu_labels)
// console.log(sample_values)

  // Display the default plot


  let dropDown = d3.select("#selDataset")

  let metaData = data.metadata
  metaData.forEach((d) => {
    dropDown.append("option").text(d.id).property("value", d.id)

  })

  // Fetch the JSON data and console log it




})}

function createDemographicData(sampleId){
  d3.json("samples.json").then((data) => {
  let metaData = data.metadata
  let filteredData = metaData.filter(d => d.id == sampleId)
  console.log(filteredData)
  let sampleMetaData = d3.select("#sample-metadata")
  Object.entries(filteredData).forEach(([key, value]) => {
    sampleMetaData.append("h4").text(`${value}`);
  })
  // metaData.forEach((d) => {
  // dropDown.append("option").text(d.id).property("value", d.id)

  // }
  })

}

function optionChanged(sampleId){
  createDemographicData(sampleId)
}

function createPlots() {

  let chartData = [{
    values: sample_values,
    labels: otu_ids,
    type: "bar"
  }];

      let layout = {
        height: 600,
        width: 800
      };

      Plotly.newPlot("bar", chartData, layout);
  
}
init();