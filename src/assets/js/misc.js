// import $ from "jquery";
// import "bootstrap-star-rating";
// import "bootstrap-star-rating/themes/krajee-svg/theme.min";

//import anime from "animejs";

(function () {
  //Add a body class once page has loaded
  //Used to add CSS transitions to elems
  //and avoids content shifting during page load
  window.addEventListener("load", function () {
    document.body.classList.add("page-loaded");
    
  });

  function copyRightYear() {
    let currentYear = new Date().getFullYear();
    let currentYearElem = document.querySelector(".currentyear");

    currentYearElem.innerHTML = `${currentYear}`;
  }
  copyRightYear();

  $(".my-rating").starRating({
    readOnly: true
  });

  //sticky header
  // function stickyHeader(){
  //   const header = document.getElementById("stickyNav");
  //   console.log(header);
  //   const stickyPosition = header.offsetTop + header.offsetHeight;
  //   console.log(stickyPosition);

  //   window.onscroll  = () => {
  //     if (window.pageYOffset > stickyPosition){
  //       header.classList.add("stickyHead");
  //      // document.querySelectorAll('body')[0].style.marginTop = header.offsetHeight + "px";
  //     }else{
  //       header.classList.remove("stickyHead");
  //     //document.querySelectorAll('body')[0].style.marginTop = "0px";
  //     }
  //   }
  // }
  //stickyHeader();


})();
// const hwwElem = document.querySelectorAll(".hww__steps-single");

// hwwElem.forEach((element , i) => {
//      anime({
//         targets:element,
//         right: 200 + (i*50),
//         direction: 'alternate',
//         easing: 'easeInOutSine'
//      })
// });

