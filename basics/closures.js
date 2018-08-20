// Basic Closure - javascript can use the 'outer' variables, at execution
function sendRequest() {
  var requestId = '123';
  $.ajax({
    url: '/',
    success: function(response) {
      alert('Request ' + requestId + ' returned');
    }
  })
}
