$(document).ready(function(){
  $.ajax({
    url:"https://api.coinmarketcap.com/v1/ticker/?limit=10"
  }).done(function(coin){

    $.each(coin,function(index,coin){ // for each would

      $('#coins').append(`
        <h1>${coin.name}</h1>
              ${coin.rank} ${coin.percent_change_1h}${coin.rank} ${coin.percent_change_24h}${coin.rank} ${coin.percent_change_7d} ${coin.price_usd}
      `)
    });
    // Styling based on condition
    for (var i = 1; i <= 10; i++) {
      // For 1H
      if (document.getElementById("value1H"+[i]).innerText < 0) {
        document.getElementById("value1H"+[i]).style.color="#ff0000"
      }
      else if (document.getElementById("value1H"+[i]).innerText > 0) {
        document.getElementById('value1H'+[i]).style.color="#00ff00"
      }
      // For 24H
      if (document.getElementById("value24H"+[i]).innerText < 0) {
        document.getElementById("value24H"+[i]).style.color="#ff0000"
      }
      else if (document.getElementById("value24H"+[i]).innerText > 0) {
        document.getElementById('value24H'+[i]).style.color="#00ff00"
      }
      // For 7D
      if (document.getElementById("value7D"+[i]).innerText < 0) {
        document.getElementById("value7D"+[i]).style.color="#ff0000"
      }
      else if (document.getElementById("value7D"+[i]).innerText > 0) {
        document.getElementById('value7D'+[i]).style.color="#00ff00"
      }
    }
  });
});
