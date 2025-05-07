const photos = {
  foto001: [
    'https://drive.google.com/file/d/1NqkZlrdd1HJH-5R1y5jFCg9D_UybkMtD/view?usp=sharing',
  ],
  foto002: [
    'https://drive.google.com/file/d/1uaKQ9aQM4OimEOPQ_ipWCCZBYKfgsZ-I/view?usp=sharing',
  ],
  foto003: [
    'https://drive.google.com/file/d/1eWvRNr8fZppko_C-G4-U5mWgQ8g87f5r/view?usp=sharing
  ],
};

function showPhotos() {
  const select = document.getElementById('scaleSelect');
  const gallery = document.getElementById('gallery');
  const selectedScale = select.value;

  gallery.innerHTML = '';

  if (selectedScale && photos[selectedScale]) {
    photos[selectedScale].forEach(photo => {
      const img = document.createElement('img');
      img.src = photo;
      gallery.appendChild(img);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  Object.values(photos).flat().forEach(url => {
    const img = new Image();
    img.src = url;
  });
});