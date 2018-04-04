$(document).ready(function(){
  $.ajax({
    url:"https://api.coinmarketcap.com/v1/ticker/?limit=10"
  }).done(function(coin){

    $.each(coin,function(index,coin){ // for each would

      $('#coins').append(`
      <div class = "box">
      <div class = "upperRow">
        <div class = "coin-img">
          <img src="img/coin${coin.rank}.png" class="float-left">
          </div>

          <div class = "price">
          <h2><span class="inline-block text-dark">$&nbsp;${coin.price_usd}</span></h2>
          </div>

          <div class = "coin-name">
          <h4 class="text-info"></h4><br>${coin.symbol}&nbsp;|&nbsp;${coin.name}




          </div>
          <br>

          <hr>

            <div class = "grid-container">

            <div class = "item1">
            <span class="test badge badge-secondary btn-block">1h &nbsp; : &nbsp;<span id="value1H${coin.rank}"> ${coin.percent_change_1h}</span></span><br>
            </div>

            <div class = "item2">
            <span class="test badge badge-secondary btn-block">24h : &nbsp; <span id="value24H${coin.rank}"> ${coin.percent_change_24h}</span></span><br>
            </div>

            <div class = "item3">
            <span class="test badge badge-secondary btn-block">7d &nbsp; : &nbsp; <span id="value7D${coin.rank}"> ${coin.percent_change_7d}</span></span><br>
            </div>

            </div> <!-- grid container -->




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
