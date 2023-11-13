var onScrollHandler = function() {
  var image = image.src;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  if (scrollTop < 100) {
     newImageUrl = "mars.jpg"
  }
  if (scrollTop > 200) {
     newImageUrl = "letter.jpg"
  }
  image.src = newImageUrl;
};
object.addEventListener ("scroll", onScrollHandler);
