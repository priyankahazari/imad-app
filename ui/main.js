var button = document.getElementById('count');
button.onclick = function() {
  counter = counter + 1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};