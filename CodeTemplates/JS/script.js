const changingImage = document.getElementById('picture');

window.onscroll = function() {
  const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;

  if (scrollPercentage > 50) {
    changingImage.src = 'letter.png';
  } else {
    changingImage.src = 'mars.png';
    }
};
