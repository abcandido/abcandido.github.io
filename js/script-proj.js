//page loader
/*
window.addEventListener('load', function(event) {
    var loadingWrapper = document.querySelector(".loader-wrapper");
    if(loadingWrapper !== null ){
      setTimeout(function() {
        loadingWrapper.classList.add('page-has-loaded');
      }, 500);
    }
});
*/

const nav = document.querySelector(".top-header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;


//scroll menu header
//only on desktop
//disattivo scroll menu header
/*
if(window.innerWidth > 989 ){

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
      nav.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !nav.classList.contains(scrollDown)) {
      // down
      nav.classList.remove(scrollUp);
      nav.classList.add(scrollDown);
    } else if (
      currentScroll < lastScroll &&
      nav.classList.contains(scrollDown)
    ) {
      // up
      nav.classList.remove(scrollDown);
      nav.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
  });

}
*/

   
//lazyload

const lazyLoadImage = document.querySelectorAll(".lazy-img");
const lazyLoadImageBig = document.querySelectorAll(".lazy-img-big");
//console.log(lazyLoadImage);


let options = {
  threshold: 1
};
let optionsBig = {
  threshold: 0.5
};
let observer = new IntersectionObserver(imageObserver, options);
let observerBig = new IntersectionObserver(imageObserver, optionsBig);

function imageObserver(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const img = entry.target;
      const img_src = img.dataset.src;
      console.log("Lazy loading " + img);
      console.log(img);
      img.src = img_src;
      if(img.classList.contains("lzimg-test")){
        let imgPlaceHolder = img.nextSibling.nextElementSibling;
        setTimeout(() => {
          imgPlaceHolder.classList.add("remove-placeholder");
        }, "1000")
        
      }

      img.onload = function() {
        //this.classList.add("remove-pixelated");
        //rimuovo pixaleted dopo che l'immagine è stata caricata
        setTimeout(() => {
          this.classList.add("remove-pixelated");
         }, "300")
        //console.log("caricattt");
      };
      img.onloadeddata = function() {
        this.classList.add("remove-pixelated");
        //console.log("caricattt");
      };

      //setTimeout(() => {
      //  img.classList.add("remove-pixelated");
      //}, "1000")
      

      
      
      
      observer.unobserve(img);
    }
  });
}

let lazyItems = document.querySelectorAll(".lazy-img");

lazyItems.forEach(img => {
  observer.observe(img);
});



let lazyItemsBig = document.querySelectorAll(".lazy-img-big");

lazyItemsBig.forEach(img => {
  observerBig.observe(img);
});




/*
var lazyLoadVideo = document.querySelectorAll(".lazy-video");
var optionsPlayer = {
  controls: false,
  title: false
};

lazyLoadVideo.forEach(entry => {
  var player = new Vimeo.Player(entry,optionsPlayer);
  player.setVolume(0);
  player.play();
});
*/


/*
let observerVideo = new IntersectionObserver(videoObserver, optionsBig);

function videoObserver(entries, observer) {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      const video = entry.target;
      const img_src = img.dataset.src;
      console.log("Lazy loading " + img);
      console.log(img);
      img.src = img_src;
      
      observer.unobserve(img);
    }
  });
}
/*


*/



//show more info projects
let previewProjectsActive = false;
let moreInfoBtn = document.querySelector('.show-more-btn');
let moreInfoWrapper = document.querySelector('.project-content-section');

moreInfoBtn.addEventListener("click", function( event ) {
  let pageHeight = window.innerHeight / 2;
  console.log("cliccato");  
  window.scroll({
    top: pageHeight,
    behavior: 'smooth'
  });
}, false);




let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
      const image = entry.target;
      const newUrl = image.getAttribute('data-src');
      image.src = newUrl;
      observer.unobserve(image);
    
  });
}, imageOptions);

lazyLoadImage.forEach((image) =>{
  //const newUrl = image.getAttribute('data-src');
  //image.src = newUrl;
  //console.log("fatto");
  observer.observe(image);

});
*/