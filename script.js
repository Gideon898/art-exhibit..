// Gallery data with local placeholder images
const artworks = [
  { title: "Abstract Sunrise", artist: "Liam Carter", image: "images/art1.jpg", description: "A bold, colorful sunrise in abstract style." },
  { title: "Blue Horizons", artist: "Amelia Brooks", image: "images/art2.jpg", description: "Layers of blue fading into the horizon." },
  { title: "City Night Lights", artist: "Daniel King", image: "images/art3.jpg", description: "Neon city streets captured in paint." },
  { title: "Forest Serenity", artist: "Maya James", image: "images/art4.jpg", description: "A peaceful forest with morning mist." },
  { title: "Ocean Dreams", artist: "Ethan Wright", image: "images/art5.jpg", description: "The calm and beauty of ocean waves." },
  { title: "Golden Fields", artist: "Sophia Evans", image: "images/art6.jpg", description: "Rolling golden wheat fields under blue sky." },
  { title: "Urban Shadows", artist: "Noah Brown", image: "images/art7.jpg", description: "Street art mixed with city shadows." },
  { title: "Wildflower Path", artist: "Ava Taylor", image: "images/art8.jpg", description: "A trail lined with vibrant wildflowers." },
  { title: "Snowy Silence", artist: "Oliver Green", image: "images/art9.jpg", description: "A quiet snowy landscape at dusk." },
  { title: "Golden Hour Glow", artist: "Emily Hill", image: "images/art10.jpg", description: "Sunset light casting warm hues." },
  { title: "Mountain Majesty", artist: "Henry Scott", image: "images/art11.jpg", description: "Majestic mountains under bright skies." },
  { title: "Desert Mirage", artist: "Isla Ward", image: "images/art12.jpg", description: "A hot desert scene with surreal mirage." },
  { title: "River Reflections", artist: "Mason Young", image: "images/art13.jpg", description: "A still river mirroring the sky." },
  { title: "Tropical Escape", artist: "Lily Adams", image: "images/art14.jpg", description: "Palm trees and turquoise waters." },
  { title: "Starry Dreams", artist: "Jack Wilson", image: "images/art15.jpg", description: "Stars painted over midnight blues." },
  { title: "Vintage Streets", artist: "Chloe Lewis", image: "images/art16.jpg", description: "Old town streets in warm tones." }
];

// Load artworks in gallery
function loadGallery() {
  const gallery = document.getElementById("gallery-grid");
  if (!gallery) return;
  gallery.innerHTML = artworks.map((art, index) => `
    <div class="card" onclick="openLightbox(${index})">
      <img src="${art.image}" alt="${art.title}">
      <div class="info">
        <h4>${art.title}</h4>
        <p>${art.artist}</p>
      </div>
    </div>
  `).join("");
}

// Lightbox functions
function openLightbox(index) {
  const lb = document.getElementById("lightbox");
  const img = document.getElementById("lb-img");
  const title = document.getElementById("lb-title");
  const artist = document.getElementById("lb-artist");
  const desc = document.getElementById("lb-description");

  img.src = artworks[index].image;
  title.textContent = artworks[index].title;
  artist.textContent = artworks[index].artist;
  desc.textContent = artworks[index].description;
  lb.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  document.getElementById("lightbox").setAttribute("aria-hidden", "true");
}

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  loadGallery();
  document.getElementById("menu-btn")?.addEventListener("click", () => {
    document.querySelector(".nav").classList.toggle("show");
  });
});
