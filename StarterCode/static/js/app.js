
// Use the D3 library to read in samples.json

function buildsamples() {
    d3.json("data/samples.json").then(function(data) {
    console.log(data);
    });
    }
    
    // Use sample_values as the values for the bar chart.
    
    var sample_values_all = data.samples[0].sample_values;
    var sample_values = sample_values_all.filter(function(d,i) {return i<10}).reverse();
    console.log(sample_values);
    
    // Use otu_ids as the labels for the bar chart.
    
    var otu_ids_all = data.samples[0].otu_ids;
    var otu_ids = otu_ids_all.filter(function(d,i) {return i<10}).reverse();
    for (var i=0;i<10;i++){
        otu_ids[i] = "OTU " + otu_ids[i]        
    }
    console.log(otu_ids);
    
    // Use otu_labels as the hovertext for the chart.
    
    var otu_labels_all = data.samples[0].otu_labels;
    var otu_labels = otu_labels_all.filter(function(d,i) {return i<10}).reverse();
    console.log(otu_labels);
    
    // Create horizontal bar graph
    
    var trace1 = {
        x: sample_values,
        y: otu_ids,
        type: "bar"
        text = otu_labels
      };
      var bar_data_init = [trace];
      Plotly.newPlot("bar", bar_data_init);
    
      // Create bubble chart
    
      var trace2 = {
        x: otu_ids_all,
        y: sample_values_all,
        mode: 'markers',
        marker: {
          size: sample_values_all,
          color: otu_ids_all
        },
        text: otu_labels_all,
      };
    var bubble_data_init = [trace1];
    Plotly.newPlot("bubble", bubble_data_init);
    
    
    