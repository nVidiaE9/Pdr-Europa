document.querySelectorAll('.gallery img').forEach(img => {
  img.onclick = () => {
    const lb = document.getElementById('lightbox');
    lb.querySelector('img').src = img.src;
    lb.style.display = 'flex';
  };
});
document.querySelector('.lightbox .close').onclick = () => {
  document.getElementById('lightbox').style.display = 'none';
};