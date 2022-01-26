let el = $("#trigger-show");
let div = $("#hide-show");
/* Stavi na pocetku show more */

el[0].innerHTML = 'Show more'


el.on("click", (e) => {
    console.log(el)
  if(div.is(':visible')) {
    div.css('display', 'none')
    el[0].innerHTML = 'Show more'
  } else {
    div.css('display', 'grid')
    el[0].innerHTML = 'Show less'
  }
});
