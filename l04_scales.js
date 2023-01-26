////////////////////////////////////////////////////////////////
//
// More complex version of L04 using scales/axes
//
// Author: Joshua Levine
// Date: January 25, 2023
//
////////////////////////////////////////////////////////////////

let dataArray1 = [2,3,5,7,11,13,17,19,23,29];
let dataArray2 = [29,23,19,17,13,11,7,5,3,2];
let dataArray3 = [2,3,5,7,11];

let padding = 50;
let svgWidth = 400;
let svgHeight = 400;
  

let svg = d3.select("#div2")
  .append("svg")
  .attr("width", 400)
  .attr("height", 400)

let xScale = d3.scaleLinear().domain([0,10]).range([padding,svgWidth-padding])
let yScale = d3.scaleLinear().domain([0,d3.max(dataArray1)]).range([svgHeight-padding,padding])

let rects = svg.selectAll("rect")
  .data(dataArray1);

rects.enter()
  .append("rect")
  .call(update)

let xAxis = d3.axisBottom().scale(xScale)

svg.append("g")
   .attr('transform', `translate(0,${svgHeight-padding})`)
   .call(xAxis)


let yAxis = d3.axisLeft().scale(yScale)

svg.append("g")
   .attr('transform', `translate(${padding},0)`)
   .call(yAxis)


function update(selection) {
  selection
    .attr("width", function() {
      return 10;
    })
    .attr("x", function(d,i) {
       return xScale(i);
    })
    .attr("height", function(d) {
       return svgHeight-padding-yScale(d); 
    })
    .attr("y", d=>yScale(d))
}
