// $('.slider').slick({
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: false,
//     infinite:true,
//     autoplay:true,
//     autoplaySpeed:2000,
//     variableWidth: true,
//   });
//   const slider = $(".slider");
//   slider.on('wheel', (function(e) {
//     e.preventDefault();
  
//     if (e.originalEvent.deltaY < 0) {
//       $(this).slick('slickNext');
//     } else {
//       $(this).slick('slickPrev');
//     }
//   }));


const template = document.getElementById('template');
const Template = template.content.querySelector('.plays__item');
const PlaySlider = document.getElementById('plays');
getData().forEach(plays__item => {
  const playsElem = document.importNode(Template, true);
  for (const key in plays__item) {
    if (key === 'img') {
      playsElem.querySelector('.img').src = plays__item.img;
    } else {
      playsElem.querySelector('.' + key).textContent = plays__item[key];
    }
  }
  PlaySlider.appendChild(playsElem)
});

function getData() {
  return [
    {
      "num": "3",
      "play-month": "December",
      "play-day": "Monday",
      "play-year": "2021",
      "plays__title": "Hamlet",
      "play-story":"William Shakespeare",
      "play-director":"Nick Fox",
      "img": "images/item1.jpg" 
    },
    {
      "num": "6",
      "play-month": "June",
      "play-day": "Wednesday",
      "play-year": "2021",
      "plays__title": "Angels in America",
      "play-story":"Tony Kushner",
      "play-director":"Tony Kushner",
      "img": "images/event_7.jpg" 
    },
    {
      "num": "12",
      "play-month": "December",
      "play-day": "Friday",
      "play-year": "2021",
      "plays__title": "The Glass Menagerie ",
      "play-story":"Elis Gils",
      "play-director":"Tennessee Williams",
      "img": "images/item3.jpg" 
    },
    {
      "num": "7",
      "play-month": "August",
      "play-day": "red",
      "play-year": "2021",
      "plays__title": "Look Back in Anger ",
      "play-story":"Tennessee Williams",
      "play-director":"Elis Gils",
      "img": "images/banner3.jpg" 
    },
    {
      "num": "8",
      "play-month": "January",
      "play-day": "Tuesday",
      "play-year": "2021",
      "plays__title": "Who's Afraid of Virginia Woolf? ",
      "play-story":"Edward Albee",
      "play-director":"Elis Gils",
      "img": "images/banner1.jpg" 
    },
    {
      "num": "10",
      "play-month": "June",
      "play-day": "Thursday",
      "play-year": "2021",
      "plays__title": "Death of a Salesman",
      "play-story":"Arthur Miller",
      "play-director":"Elis Gils",
      "img": "images/item3.jpg" 
    },
  ];
}