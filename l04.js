////////////////////////////////////////////////////////////////
//
// This javascript example shows a simple d3 data join to build
// a bar chart
//
// Author: Joshua Levine
// Date: January 25, 2023
//
////////////////////////////////////////////////////////////////

let dataArray1 = [2,3,5,7,11,13,17,19,23,29];
let dataArray3 = [2,3,5,7,11];

let svg = d3.select("#div2")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)

let rects = svg.selectAll("rect")
  .data(dataArray1);

function computeYValue(d) {
  return 400 - d*10;
}

rects.enter()
  .append("rect")
  .call(update)

//refactored to use .call() rather than working directly on the selection
function update(selection) {
  selection
    .attr("width", function() {
      return 10;
    })
    .attr("x", function(d,i) {
       return i*15;
    })
    .attr("height", function(datum) {
       return datum*10; 
    })
    .attr("y", computeYValue)
}


