class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #0a0a0a;
          color: #e2e8f0;
          padding: 4rem 2rem;
          font-family: 'Inter', sans-serif;
        }
        
        .footer-container {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }
        
        .footer-logo span {
          color: #a855f7;
        }
        
        .footer-about {
          max-width: 300px;
          line-height: 1.6;
          color: #94a3b8;
        }
        
        .footer-heading {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
          color: #a855f7;
        }
        
        .footer-contact p {
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
        }
        
        .footer-bottom {
          max-width: 1440px;
          margin: 3rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #1e293b;
          text-align: center;
          color: #64748b;
          font-size: 0.9rem;
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-container">
          <div class="footer-about-col">
            <div class="footer-logo">Smart Biz <span>Upgrades</span></div>
            <p class="footer-about">
              Transforming businesses through smart technology integrations in Ocean Beach, CA and throughout California.
            </p>
          </div>
          
          <div class="footer-links-col">
            <h3 class="footer-heading">Quick Links</h3>
            <div class="footer-links">
              <a href="/newbiz/">Home</a>
              <a href="/newbiz/about.html">About Us</a>
              <a href="/newbiz/services.html">Services</a>
              <a href="/newbiz/contact.html">Contact</a>
            </div>
          </div>
          
          <div class="footer-contact-col">
            <h3 class="footer-heading">Contact Us</h3>
            <div class="footer-contact">
              <p><i data-feather="map-pin"></i> Ocean Beach, CA</p>
              <p><i data-feather="phone"></i> (555) 123-4567</p>
              <p><i data-feather="mail"></i> hello@smartbizupgrades.com</p>
            </div>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} Smart Biz Upgrades. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);
