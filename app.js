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

    // Build bar chart
    // Barchart layout with title and margin
    let barLayout = {
      title: "Top 10 Bacteria Cultures Found",
      margin: { t: 30, l: 150}
    };

    // Data points to be entered into bar chart. Show only top 10 in descending order
    let barData = [{
      type: 'bar',
      x: sample_values.slice(0,10).reverse(),
      text: otu_labels.slice(0,10).reverse(),
      y: otu_ids,
      orientation: 'h'
    }];

    // Plot barchart
    Plotly.newPlot("bar", barData, barLayout);

  // Create bubble chart
  // Data points to be entered into bubble chart
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
  
  // Bubble chart layout
  let layout = {
  title: '',
  showlegend: false,
  height: 600,
  width: 1200
};

// Plot bubble chart
Plotly.newPlot('bubble', bubbleData, layout);
createMetaData(sampleId)
    }

  )

}

// create initializer function for dropdown menu
function init() {
  d3.json("samples.json").then((data) => {

    // Select the selDataset id
  let selDataSet = d3.select("#selDataset");

  let names = data.names

  // Loop through the names, and append to list. Dropdown "option" must equal the "value" from name object
    names.forEach((name) => {
      selDataSet.append("option").text(name)
      .property("value", name)
    })

  })
}

init();