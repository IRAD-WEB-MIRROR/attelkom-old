// Snow for your MyPage! v1.2  (c) 2003 MyPage@Attelkom tools page
// Paste this line before </body>:  <script src="/users/snow.js"></script>
// Snows from 25 December to 14 January (Old New Year). Does nothing the rest of the year.
// Works in IE 5.5, IE 6, Netscape 7 and Opera 7. Not tested on Mac.
(function () {
  var now = new Date(new Date().getTime() + (new Date().getTimezoneOffset() + 360) * 60000); // Talas time
  var m = now.getMonth() + 1, d = now.getDate();
  if (!((m == 12 && d >= 25) || (m == 1 && d <= 14))) return;
  var flakes = 28, chars = ["*", "*", "+", "."], cols = ["#FFFFFF", "#BBD4EE", "#99BBDD", "#DDEEFF"];
  var x = [], y = [], sp = [], dx = [], am = [], el = [];
  function W() { return window.innerWidth || document.body.clientWidth; }
  function H() { return window.innerHeight || document.body.clientHeight; }
  function start() {
    for (var i = 0; i < flakes; i++) {
      var s = document.createElement("span");
      s.style.position = "fixed"; s.style.zIndex = 9999; s.style.pointerEvents = "none";
      s.style.fontFamily = "Arial"; s.style.fontWeight = "bold";
      s.style.fontSize = (10 + Math.floor(Math.random() * 14)) + "px";
      s.style.color = cols[i % cols.length]; s.style.textShadow = "0 0 2px #6688AA";
      s.innerHTML = chars[i % chars.length];
      document.body.appendChild(s); el[i] = s;
      x[i] = Math.random() * W(); y[i] = Math.random() * H();
      sp[i] = 0.6 + Math.random() * 1.6; dx[i] = 0; am[i] = Math.random() * 15;
    }
    setInterval(fall, 40);
  }
  function fall() {
    for (var i = 0; i < flakes; i++) {
      y[i] += sp[i]; dx[i] += 0.02 + Math.random() * 0.02;
      if (y[i] > H() - 10) { y[i] = -10; x[i] = Math.random() * W(); }
      el[i].style.top = y[i] + "px"; el[i].style.left = (x[i] + am[i] * Math.sin(dx[i])) + "px";
    }
  }
  if (document.body) start(); else window.onload = start;
})();
