// nav-html.js — inject shared nav
document.body.insertAdjacentHTML('afterbegin', `
<nav id="sidenav">
  <div class="nav-logo">
    <span class="wordmark">CoolerIfYouDid</span>
    <span class="tagline">Passive. Aggressive. Cool.</span>
    <span class="domain">coolerifyoudid.com</span>
  </div>
  <div class="nav-links">
    <div class="nav-section">Home</div>
    <a href="index.html">Overview</a>
    <div class="nav-section">Products</div>
    <a href="products.html">Products in development</a>
    <a href="thermakon.html">Thermakon envelope</a>
    <a href="buildings.html">CoolerIfYouDid buildings</a>
    <div class="nav-section">Mission</div>
    <a href="problems.html">Problems we solve</a>
    <div class="nav-section">Connect</div>
    <a href="contact.html">Contact us</a>
  </div>
  <div class="nav-footer">
    <div class="temp-badge">// surface temp: −4°C below ambient</div>
  </div>
</nav>
`);
