# Movie Finder

A modern, responsive web application for discovering and searching movies using The Movie Database (TMDB) API. This project showcases front-end development skills with HTML, CSS, and JavaScript, featuring a clean dark theme and smooth user interactions.

## Description

Movie Finder is a single-page web application that allows users to browse trending movies, top-rated films, and currently playing movies. Users can also search for specific movies by title. The app fetches data from TMDB's extensive movie database and presents it in an intuitive, visually appealing interface.

The application is built with vanilla JavaScript, utilizing modern web APIs like Fetch for data retrieval and CSS Grid for responsive layouts. It includes features like debounced search, lazy loading of images, and smooth animations.

## Features

- **Homepage Sections**: Displays three curated sections:
  - 🔥 Trending Today: Popular movies trending on TMDB
  - ⭐ Top Rated: Highest-rated movies of all time
  - 🎬 Now Playing: Movies currently in theaters

- **Search Functionality**: Real-time search with 500ms debouncing to prevent excessive API calls
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices using CSS Grid
- **Movie Cards**: Each movie displays poster image, title, release year, and rating
- **Dark Theme**: Modern Netflix-inspired color scheme
- **Smooth Animations**: Fade-in animations for movie cards and hover effects
- **Error Handling**: Graceful handling of API failures and no-results scenarios
- **Lazy Loading**: Images load as needed to improve performance

## Technologies Used

- **HTML5**: Semantic markup for structure
- **CSS3**: 
  - CSS Variables for theming
  - CSS Grid for responsive layouts
  - Flexbox for component alignment
  - Media queries for responsive breakpoints
  - CSS Animations for smooth transitions
- **JavaScript (ES6+)**:
  - Async/await for API calls
  - DOM manipulation for dynamic content
  - Event listeners for user interactions
  - Debouncing for search optimization
- **TMDB API**: External API for movie data and images

## Setup Instructions

1. **Clone or Download**: Place all project files in a directory accessible by a web server.

2. **API Key Configuration**:
   - Sign up for a free account at [TMDB](https://www.themoviedb.org/)
   - Generate an API key from your account settings
   - Open `config.js` and replace the placeholder with your API key:
     ```javascript
     const TMDB_API_KEY = "your_api_key_here";
     ```

3. **Important Security Note**: 
   - The `config.js` file contains your API key and should NOT be committed to version control
   - Add `config.js` to your `.gitignore` file
   - Never share your API key publicly

4. **Run the Application**:
   - Open `index.html` in a modern web browser
   - Alternatively, serve the files using a local web server (e.g., Live Server extension in VS Code)

## Usage

- **Browse Movies**: On load, the app displays three sections of movies
- **Search**: Type in the search box to find specific movies. Results update automatically after a brief delay
- **View Details**: Hover over movie cards for visual feedback (cards lift up)
- **Responsive**: The layout adapts to different screen sizes automatically

## File Structure

```
movie-app/
├── index.html      # Main HTML structure
├── style.css       # CSS styling and responsive design
├── script.js       # JavaScript logic and API interactions
└── config.js       # API key configuration (keep local)
```

## API Credits and Disclaimer

This application uses data from **The Movie Database (TMDB)** API. TMDB provides a free API for developers to access their comprehensive movie database.

**Important Disclaimer**: 
- This project is created solely for educational purposes to demonstrate web development skills.
- It is not affiliated with, endorsed by, or sponsored by TMDB or any of its partners.
- All movie data, images, and information are property of TMDB and their respective copyright holders.
- Please respect TMDB's API terms of service and rate limits when using this application.

For more information about TMDB, visit [themoviedb.org](https://www.themoviedb.org/).

## Future Enhancements

Potential improvements for this project:
- Movie detail pages with full cast, plot summaries, and trailers
- User favorites/watchlist functionality
- Genre filtering
- Pagination for search results
- Offline support with service workers
- Accessibility improvements (ARIA labels, keyboard navigation)

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use it for learning purposes.