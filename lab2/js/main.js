function range(a,b,s){return a<=b?[a].concat(range(a+s,b,s)):[];}

window.generateData=function() {
  var points = [];

  var f = x => Math.cos(x*x);

  range(-2,2,0.05)
    .map(x=>[x,f(x)])
    .forEach(x=>points.push(x));

  return [
    {
      data: points,
      label: "Square cosine"
    }
  ];
}


$(document).ready(()=>{
  $("#raw-data-target").html(
    window.generateData()[0].data
      .map(x=>x.map(y=>y.toFixed(3)))
      .map(x=>`<tr><td>${x[0]}</td><td>${x[1]}</td></tr>`)
      .join()
  );
});