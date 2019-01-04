const images = Array.from(document.querySelectorAll('.slideshow-photo'));

function removeActive(target) {
  target.classList.remove('active');
}

function setActive(target) {
  target.classList.add('active');
}

let i = 0;

setInterval(() => {
  images
    .filter((image) => image.classList.contains('active'))
    .forEach((image) => removeActive(image));

  setActive(images[i]);

  i++;

  if (i > 4) {
    i = 0;
  }
}, 5000);

setActive(images[i]);

// ZOLA embed
!(function(e, t, n) {
  var s,
    a = e.getElementsByTagName(t)[0];
  e.getElementById(n) ||
    ((s = e.createElement(t)),
    (s.id = n),
    (s.async = !0),
    (s.src = 'https://widget.zola.com/js/widget.js'),
    a.parentNode.insertBefore(s, a));
})(document, 'script', 'zola-wjs');
