/**
 * SocietyERP SPA Router
 * Simple hash-based router for static hosting
 */

class Router {
  constructor() {
    this.routes = {};
    this.currentPage = null;
    this.app = null;
    this.pageTitle = null;
    this.pageSubtitle = null;
    this.searchInput = null;
    
    // Initialize DOM references when ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.initDOM());
    } else {
      this.initDOM();
    }
    
    // Listen for hash changes
    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('load', () => this.handleRoute());
  }

  // Initialize DOM element references
  initDOM() {
    this.app = document.getElementById('app');
    this.pageTitle = document.getElementById('page-title');
    this.pageSubtitle = document.getElementById('page-subtitle');
    this.searchInput = document.getElementById('search-input');
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
      // Show 404 page briefly, then redirect to dashboard
      this.loadPage('404', this.get404Page(hash));
      setTimeout(() => {
        window.location.hash = '#dashboard';
      }, 2000);
    }
  }

  // Generate 404 page config
  get404Page(attemptedRoute) {
    return {
      title: 'Page Not Found',
      subtitle: 'The requested page does not exist.',
      content: `
        <div class="flex flex-col items-center justify-center h-full text-center">
          <div class="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mb-6">
            <i class="fa-solid fa-map-signs text-4xl text-neutral-400"></i>
          </div>
          <h3 class="text-2xl font-semibold text-neutral-900 mb-2">404 - Page Not Found</h3>
          <p class="text-neutral-500 mb-4">The page "${attemptedRoute}" doesn't exist.</p>
          <p class="text-sm text-neutral-400">Redirecting to dashboard in 2 seconds...</p>
        </div>
      `
    };
  }

  // Load a page
  loadPage(pageName, config) {
    try {
      // Validate config
      if (!config || typeof config !== 'object') {
        console.error('Invalid page config for:', pageName);
        return;
      }

      // Update active nav state
      this.updateNavigation(pageName);

      // Update header (with null checks)
      if (this.pageTitle) {
        this.pageTitle.textContent = config.title || 'SocietyERP';
      }
      if (this.pageSubtitle) {
        this.pageSubtitle.textContent = config.subtitle || '';
      }

      // Update search placeholder based on page
      this.updateSearchPlaceholder(pageName);

      // Ensure app container exists
      if (!this.app) {
        console.error('App container not found');
        return;
      }

      // Load content with animation
      this.app.innerHTML = '<div class="loading-spinner"></div>';
      
      // Small delay for smooth transition
      setTimeout(() => {
        try {
          this.app.innerHTML = `<div class="page-content">${config.content || ''}</div>`;
          this.currentPage = pageName;
          
          // Scroll to top
          this.app.scrollTop = 0;
          
          // Apply demo mode disabled states to action buttons
          this.applyDemoMode();
        } catch (renderError) {
          console.error('Error rendering page:', renderError);
          this.app.innerHTML = '<div class="p-8 text-center text-red-600">Error loading page content</div>';
        }
      }, 100);
    } catch (error) {
      console.error('Error loading page:', pageName, error);
    }
  }

  // Apply demo mode: disable non-functional action buttons
  applyDemoMode() {
    // Button text patterns that should be disabled
    const disabledPatterns = [
      'View All', 'Send Reminder', 'Export', 'Apply Filters', 
      'Sync', 'Reconcile', 'Generate', 'Download', 'Print',
      'Add', 'Edit', 'Delete', 'Save', 'Submit', 'Create',
      'Assign', 'Resolve', 'Escalate', 'Approve', 'Reject'
    ];

    // Find all buttons and links that look like action buttons
    const actionElements = this.app.querySelectorAll('button, a.btn, [role="button"]');
    
    actionElements.forEach(el => {
      const text = el.textContent.trim();
      const isActionButton = disabledPatterns.some(pattern => 
        text.toLowerCase().includes(pattern.toLowerCase())
      );
      
      // Skip navigation links
      if (el.classList.contains('nav-link')) return;
      
      if (isActionButton) {
        el.classList.add('demo-tooltip');
        el.setAttribute('data-tooltip', 'Not available in demo');
        el.style.pointerEvents = 'auto'; // Allow hover for tooltip
        el.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      }
    });
  }

  // Update search placeholder based on current page
  updateSearchPlaceholder(pageName) {
    if (!this.searchInput) return;
    
    if (pageName === 'dashboard') {
      this.searchInput.placeholder = 'Search anything (resident, vendor, amount, date, unit, complaint...)';
    } else {
      this.searchInput.placeholder = 'Search...';
    }
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
