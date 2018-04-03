$(document).ready(function(){
  $.ajax({
    url:"https://api.coinmarketcap.com/v1/ticker/?limit=10"
  }).done(function(coin){

    $.each(coin,function(index,coin){ // for each would

      $('#coins').append(`
      <div class = "box">

          <img src="img/coin${coin.rank}.png" class="float-left">


          <h4 class="text-info">${coin.symbol}</h4><br>${coin.symbol}&nbsp;|&nbsp;${coin.name}

            <span class="test badge badge-secondary btn-block">1h &nbsp; : &nbsp;<span id="value1H${coin.rank}"> ${coin.percent_change_1h}</span></span><br>
            <span class="test badge badge-secondary btn-block">24h : &nbsp; <span id="value24H${coin.rank}"> ${coin.percent_change_24h}</span></span><br>
            <span class="test badge badge-secondary btn-block">7d &nbsp; : &nbsp; <span id="value7D${coin.rank}"> ${coin.percent_change_7d}</span></span><br>

          <h1><span class="inline-block text-dark">$&nbsp;${coin.price_usd}</span></h1>



    </div> <!-- box -->
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
