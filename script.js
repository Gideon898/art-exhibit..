// Gallery data
const artworks = [
  { title: "Abstract Sunrise", artist: "Liam Carter", image: "https://picsum.photos/seed/art1/400/300", description: "A bold, colorful sunrise in abstract style." },
  { title: "Blue Horizons", artist: "Amelia Brooks", image: "https://picsum.photos/seed/art2/400/300", description: "Layers of blue fading into the horizon." },
  { title: "City Night Lights", artist: "Daniel King", image: "https://picsum.photos/seed/art3/400/300", description: "Neon city streets captured in paint." },
  { title: "Forest Serenity", artist: "Maya James", image: "https://picsum.photos/seed/art4/400/300", description: "A peaceful forest with morning mist." },
  { title: "Ocean Dreams", artist: "Ethan Wright", image: "https://picsum.photos/seed/art5/400/300", description: "The calm and beauty of ocean waves." },
  { title: "Golden Fields", artist: "Sophia Evans", image: "https://picsum.photos/seed/art6/400/300", description: "Rolling golden wheat fields under blue sky." },
  { title: "Urban Shadows", artist: "Noah Brown", image: "https://picsum.photos/seed/art7/400/300", description: "Street art mixed with city shadows." },
  { title: "Wildflower Path", artist: "Ava Taylor", image: "https://picsum.photos/seed/art8/400/300", description: "A trail lined with vibrant wildflowers." },
  { title: "Snowy Silence", artist: "Oliver Green", image: "https://picsum.photos/seed/art9/400/300", description: "A quiet snowy landscape at dusk." },
  { title: "Golden Hour Glow", artist: "Emily Hill", image: "https://picsum.photos/seed/art10/400/300", description: "Sunset light casting warm hues." },
  { title: "Mountain Majesty", artist: "Henry Scott", image: "https://picsum.photos/seed/art11/400/300", description: "Majestic mountains under bright skies." },
  { title: "Desert Mirage", artist: "Isla Ward", image: "https://picsum.photos/seed/art12/400/300", description: "A hot desert scene with surreal mirage." },
  { title: "River Reflections", artist: "Mason Young", image: "https://picsum.photos/seed/art13/400/300", description: "A still river mirroring the sky." },
  { title: "Tropical Escape", artist: "Lily Adams", image: "https://picsum.photos/seed/art14/400/300", description: "Palm trees and turquoise waters." },
  { title: "Starry Dreams", artist: "Jack Wilson", image: "https://picsum.photos/seed/art15/400/300", description: "Stars painted over midnight blues." },
  { title: "Vintage Streets", artist: "Chloe Lewis", image: "https://picsum.photos/seed/art16/400/300", description: "Old town streets in warm tones." }
];

// Load artworks in gallery
function loadGallery() {
  const gallery = document.getElementById("gallery-grid"); // Changed here
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
