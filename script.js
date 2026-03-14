// ============================================================
//  PRETTY PIECES BY ESHA SINGH — script.js
// ============================================================

// ---------- NAVBAR: add .scrolled class on scroll ----------
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  });
}

// ---------- FOOTER: inject into every page ----------
const footerHTML = `
  <footer class="site-footer">
    <div class="site-footer__inner">
      <div class="site-footer__brand">
        <img src="assets/logo.png" alt="Pretty Pieces by Esha" class="site-footer__logo" />
        <div>
          <p class="site-footer__name">Pretty Pieces <em>by Esha Singh</em></p>
          <p class="site-footer__tagline">Wander through the road of art and graphics.</p>
        </div>
      </div>
      <nav class="site-footer__nav">
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
        <a href="work.html">Work</a>
        <a href="contact.html">Contact</a>
      </nav>
      <p class="site-footer__copy">© ${new Date().getFullYear()} Pretty Pieces by Esha Singh. All rights reserved.</p>
    </div>
  </footer>
`;

const footerStyles = `
  .site-footer {
    background: #111111;
    color: #ffffff;
    padding: 52px 48px 32px;
    font-family: 'Jost', sans-serif;
  }
  .site-footer__inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 28px;
  }
  .site-footer__brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .site-footer__logo {
    width: 44px;
    height: 44px;
    object-fit: cover;
    border-radius: 50%;
    opacity: 0.9;
  }
  .site-footer__name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.05rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
  .site-footer__name em {
    font-style: italic;
    font-weight: 300;
  }
  .site-footer__tagline {
    font-size: 0.72rem;
    font-style: italic;
    color: #f9c6d0;
    letter-spacing: 0.06em;
    margin-top: 3px;
  }
  .site-footer__nav {
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
    border-top: 1px solid rgba(249,198,208,0.2);
    padding-top: 24px;
  }
  .site-footer__nav a {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #aaaaaa;
    text-decoration: none;
    transition: color 0.3s;
  }
  .site-footer__nav a:hover { color: #f9c6d0; }
  .site-footer__copy {
    font-size: 0.7rem;
    color: #555555;
    letter-spacing: 0.06em;
    border-top: 1px solid rgba(255,255,255,0.06);
    padding-top: 20px;
  }
  @media (max-width: 480px) {
    .site-footer { padding: 40px 24px 24px; }
    .site-footer__nav { gap: 20px; }
  }
`;

// Inject footer styles
const styleTag = document.createElement('style');
styleTag.textContent = footerStyles;
document.head.appendChild(styleTag);

// Inject footer HTML before closing body
document.body.insertAdjacentHTML('beforeend', footerHTML);

// ---------- FOOTER INJECTION ----------
const footer = document.querySelector('footer.footer');
if (footer) {
  footer.innerHTML = '<p>© 2025 Pretty Pieces by Esha Singh. All rights reserved.</p>';
}

// ---------- SMOOTH SCROLL for anchor links ----------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});