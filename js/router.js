/**
 * SocietyERP SPA Router
 * Simple hash-based router for static hosting
 */

class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.app = document.getElementById('app');
    this.pageTitle = document.getElementById('page-title');
    this.pageSubtitle = document.getElementById('page-subtitle');
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  // Register a route
  register(path, config) {
    this.routes[path] = config;
  }

  // Handle route changes
  handleRoute() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    const route = this.routes[hash];

    if (route) {
      this.loadPage(hash, route);
    } else {
      // Default to dashboard if route not found
      window.location.hash = '#dashboard';
    }
  }

  // Load a page
  loadPage(pageName, config) {
    // Update active nav state
    this.updateNavigation(pageName);

    // Update header
    this.pageTitle.textContent = config.title;
    this.pageSubtitle.textContent = config.subtitle;

    // Load content with animation
    this.app.innerHTML = '<div class="loading-spinner"></div>';
    
    // Small delay for smooth transition
    setTimeout(() => {
      this.app.innerHTML = `<div class="page-content">${config.content}</div>`;
      this.currentPage = pageName;
      
      // Scroll to top
      this.app.scrollTop = 0;
    }, 100);
  }

  // Update navigation active state
  updateNavigation(activePage) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      const page = link.getAttribute('data-page');
      if (page === activePage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }
}

// Initialize router
const router = new Router();

// Register all routes from pages.js
Object.keys(window.PAGES).forEach(pageName => {
  router.register(pageName, window.PAGES[pageName]);
});

// Export for use in other scripts
window.router = router;
