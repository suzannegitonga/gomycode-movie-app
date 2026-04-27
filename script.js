// Uses config.js locally, falls back to hardcoded key on GitHub Pages
const API_KEY = typeof TMDB_API_KEY !== 'undefined' 
    ? TMDB_API_KEY 
    : '83722ef38e07dcdb55602f83d82be4d8'; // ← We'll replace this for deployment
const BASE_URL = 'https://api.themoviedb.org/3';
const IMG_BASE = 'https://image.tmdb.org/t/p/w500';

const searchInput = document.getElementById('search');
const movieGrid = document.getElementById('movie-grid');
let debounceTimer;

// Create a movie card DOM element
function createMovieCard(movie) {
    const poster = movie.poster_path 
        ? `${IMG_BASE}${movie.poster_path}` 
        : 'https://placehold.co/200x300/1a1d24/e0e0e0?text=No+Poster';
    const year = movie.release_date?.split('-')[0] || 'N/A';
    const rating = movie.vote_average?.toFixed(1) || 'N/A';

    const card = document.createElement('div');
    card.className = 'movie-card';
    card.innerHTML = `
        <img src="${poster}" alt="${movie.title}" class="movie-poster" loading="lazy">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${year}</span>
                <span class="rating">★ ${rating}</span>
            </div>
        </div>
    `;
    return card;
}

// Load homepage sections
async function loadHomepage() {
    movieGrid.innerHTML = '<div class="loading">Loading...</div>';

    const categories = [
        { endpoint: '/trending/movie/day', title: '🔥 Trending Today' },
        { endpoint: '/movie/top_rated', title: '⭐ Top Rated' },
        { endpoint: '/movie/now_playing', title: '🎬 Now Playing' }
    ];

    movieGrid.innerHTML = '';

    for (const cat of categories) {
        const section = document.createElement('div');
        section.className = 'movie-section';
        section.innerHTML = `<h2 class="section-title">${cat.title}</h2>`;
        
        const row = document.createElement('div');
        row.className = 'movie-row';
        section.appendChild(row);
        movieGrid.appendChild(section);

        try {
            const res = await fetch(`${BASE_URL}${cat.endpoint}?api_key=${API_KEY}&language=en-US&page=1`);
            const data = await res.json();
            data.results.slice(0, 12).forEach(m => row.appendChild(createMovieCard(m)));
        } catch (err) {
            console.error(`Failed to load ${cat.title}:`, err);
            row.innerHTML = '<p class="no-results">Failed to load.</p>';
        }
    }
}

// Search function
async function performSearch(query) {
    if (!query.trim()) {
        loadHomepage();
        return;
    }

    movieGrid.innerHTML = '<div class="loading">⏳ Searching...</div>';

    try {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);

        const data = await res.json();
        
        movieGrid.innerHTML = '';

        if (data.results?.length) {
            const heading = document.createElement('h2');
            heading.className = 'section-title';
            heading.textContent = `🔍 Results for "${query}" (${data.results.length} found)`;
            movieGrid.appendChild(heading);
            
            const row = document.createElement('div');
            row.className = 'movie-row';
            movieGrid.appendChild(row);
            data.results.forEach(m => row.appendChild(createMovieCard(m)));
        } else {
            movieGrid.innerHTML = '<div class="no-results">No movies found.</div>';
        }
    } catch (err) {
        console.error('Search Error:', err);
        movieGrid.innerHTML = `<div class="no-results">⚠️ ${err.message}</div>`;
    }
}

// Event Listeners
searchInput.addEventListener('input', (e) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => performSearch(e.target.value), 500);
});

// Initial load
loadHomepage();