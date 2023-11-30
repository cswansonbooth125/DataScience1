const data = [
    { Genre: "Rock", Count: 300 },
    { Genre: "Funk / Soul", Count: 50 },
    { Genre: "Electronic", Count: 50 },
    { Genre: "Hip Hop", Count: 40 },
    { Genre: "Jazz", Count: 20 },
    { Genre: "Folk", Count: 10 },
    { Genre: "Blues", Count: 10 },
    { Genre: "Reggae", Count: 5 },
    { Genre: "Pop", Count: 1 },
    { Genre: "Classical", Count: 1 },
    { Genre: "Latin", Count: 1 },
];

const width = 800;
const height = 400;
const margin = { top: 50, bottom: 50, left: 50, right: 50};

const svg = d3.select('#d3-container')
    .append('svg')
    .attr('height', height - margin.top - margin.bottom)
    .attr('width', width - margin.left - margin.right)
    .attr('viewBox', [0, 0, width, height]);

const x = d3.scaleBand()
    .domain(d3.range(data.length))
    .range([margin.left, width - margin.right])
    .padding(0.1);

const y = d3.scaleLinear()
    .domain([0, 400])
    .range([height - margin.bottom, margin.top]);

svg
    .append('g')
    .attr('fill', 'royalblue')
    .selectAll('rect')
    .data(data.sort((a,b) => d3.descending(a.score, b.score)))
    .join('rect')
        .attr('x', (d,i) => x(i))
        .attr('y', (d) => y(d.score))
        .attr('height', d => y(0) - y(d.score))
        .attr('width', x.bandwidth());

svg.node();