import AOS from "aos";

(function () {
  const options = {
    duration: 700,
    easing: "ease-out-quad",
    once: false,
    startEvent: "load",
    disable: "mobile",
  };
  AOS.init(options);
})();
