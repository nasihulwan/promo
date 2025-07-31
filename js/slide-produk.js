function changeImage(src, caption) {
  const mainImage = document.getElementById('mainImage');
  const mainCaption = document.querySelector('.main-caption');

  mainImage.src = src;
  mainCaption.textContent = caption;
}
