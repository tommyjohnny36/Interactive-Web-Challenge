// create a function for metadata to filter the id, and then
// append data into html
function createMetaData(sampleId){
  d3.json("samples.json").then((data) => {
    console.log(data)

    var metaData = data.metadata
    // console.log(metaData)

    // filter data for the object which matches the metadata ID
    var resultArray = metaData.filter((metadata) => metadata.id == sampleId);
    var result = resultArray[0];
    // console.log(result)

    // Use d3 to select the panel with id of #sample-metadata
    sampleMetaData = d3.select('#sample-metadata')

    // Use `.html("") to clear existing metadata
    sampleMetaData.html("");

    Object.entries(result).forEach(([d, i]) => {
      sampleMetaData.append("h5").text(`${d}: ${i}`)
    }
    )})
}

function optionChanged(sampleId) {
  d3.json("samples.json").then((data) => {
    let samples = data.samples;
    let resultArray = samples.filter((sample) => sample.id == sampleId);
    let result = resultArray[0];

    // Get chart values and assign to variable
    let otu_ids = result.otu_ids
    let otu_labels = result.otu_labels
    let sample_values = result.sample_values

    // console.log(`${otu_ids} ${otu_labels} ${sample_values}`)

    // Build bar chart
    let yTicks = otu_ids
                .slice(0,10)
                .map((otuID) => `OTU ${otuID}`)
                .reverse();
    
    let barData = [{
      y: yTicks,
      x: sample_values.slice(0,10).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      type: "bar",
      orientation: "h",
    }];

    let barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150}
    };

    Plotly.newPlot("bar", barData, barLayout);


    // Create bubble chart
    // let bubbleLayout = {
// 
  let trace1 = {

    x: otu_ids,
    y: sample_values,
    mode: 'markers',
    marker: {
      size: sample_values,
      color: otu_ids},
    text: otu_labels
};
  // place data into an array and assign to variable
  let bubbleData = [trace1];
  let layout = {
  title: '',
  showlegend: false,
  height: 600,
  width: 1200
};


Plotly.newPlot('bubble', bubbleData, layout);
createMetaData(sampleId)
    }

  )

}

function init() {
  d3.json("samples.json").then((data) => {

  let selDataSet = d3.select("#selDataset");

  let names = data.names

    names.forEach((name) => {
      selDataSet.append("option").text(name)
      .property("value", name)
    })

  })
}

init();