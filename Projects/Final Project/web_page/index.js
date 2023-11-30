const data = [
    { "genre": "Rock", "value": 300 , "image": "genre-images/rocktopster.png"},
    { "genre": "Funk / Soul", "value": 50, "image": "genre-images/funksoultopster.png" },
    { "genre": "Electronic", "value": 50, "image": "genre-images/electronictopster.png"  },
    { "genre": "Hip Hop", "value": 40, "image": "genre-images/hiphoptopster.png" },
    { "genre": "Jazz", "value": 20, "image": "genre-images/jazztopster.png"},
    { "genre": "Folk", "value": 10, "image": "genre-images/folktopster.png" },
    { "genre": "Blues", "value": 10, "image": "genre-images/bluestopster.png" },
    { "genre": "Reggae", "value": 5, "image": "genre-images/reggaetopster.png" },
    { "genre": "Pop", "value": 1, "image": "genre-images/poptopster.png" },
    { "genre": "Classical", "value": 1, "image": "genre-images/classicaltopster.png" },
    { "genre": "Latin", "value": 1, "image": "genre-images/latintopster.png" },
  ];

  // Set up the SVG container
  const svgWidth = 500;
  const svgHeight = 300;
  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

  const svg = d3.select("#chart")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

  // Create scales
  const xScale = d3.scaleBand()
    .domain(data.map(d => d.genre))
    .range([margin.left, svgWidth - margin.right])
    .padding(0.1);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, d => d.value)])
    .range([svgHeight - margin.bottom, margin.top]);

  // Create x axis
  svg.append("g")
    .attr("transform", `translate(0, ${svgHeight - margin.bottom})`)
    .call(d3.axisBottom(xScale))
    .selectAll("text")
    .attr("transform", "rotate(-45)")
    .style("text-anchor", "end");

  // Create y axis
  svg.append("g")
    .attr("transform", `translate(${margin.left}, 0)`)
    .call(d3.axisLeft(yScale));

  // Create bars
  svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", d => xScale(d.genre))
    .attr("y", d => yScale(d.value))
    .attr("width", xScale.bandwidth())
    .attr("height", d => svgHeight - margin.bottom - yScale(d.value))
    .attr("fill", "steelblue")
    .on("click", d => showImage(d.image));

  // Function to show image
  function showImage(imagePath) {
    // Remove any existing images
    d3.select("#image-container").selectAll("img").remove();

    // Create and append the image
    const imageElement = document.createElement("img");
    imageElement.src = imagePath;
    imageElement.alt = "Genre Image";
    document.getElementById("image-container").appendChild(imageElement);
  }