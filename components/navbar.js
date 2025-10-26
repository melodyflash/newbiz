class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          position: fixed;
          width: 100%;
          z-index: 1000;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        nav {
          max-width: 1440px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        .logo span {
          color: #a855f7;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-links a {
          color: #e2e8f0;
          text-decoration: none;
          font-weight: 500;
          position: relative;
          padding: 0.5rem 0;
          transition: all 0.3s ease;
        }
        
        .nav-links a:hover {
          color: #a855f7;
        }
        
        .nav-links a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #a855f7;
          transition: width 0.3s ease;
        }
        
        .nav-links a:hover::after {
          width: 100%;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <a href="/" class="logo">
          Smart Biz <span>Upgrades</span>
        </a>
        
        <div class="nav-links">
          <a href="/">Home</a>
          <a href="/about.html">About</a>
          <a href="/services.html">Services</a>
          <a href="/contact.html">Contact</a>
        </div>
        
        <button class="mobile-menu-btn">
          <i data-feather="menu"></i>
        </button>
      </nav>
    `;
  }
}
customElements.define('custom-navbar', CustomNavbar);
