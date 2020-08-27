// from data.js
//Make table
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");
var form = d3.select("form");

console.log(data);

tableData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  
  //Make filter input element work
  var inputElement = d3.select("#datetime");
  button.on("click", runEnter);
  form.on("submit", runEnter);
  function runEnter() {
    d3.event.preventDefault();
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

  console.log(filteredData);
  tbody.html("");
  filteredData.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
  }

 