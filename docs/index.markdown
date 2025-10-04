---
layout: default
title: Home
---

<link rel="stylesheet" href="/assets/css/style.css">

<!-- Sidebar menu -->
<div class="sidebar" id="sidebar">
  <div class="sidebar-header">
    <h2>Menu</h2>
    <span id="close-sidebar">&times;</span>
  </div>
  <ul class="sidebar-menu">
    <li><a href="#">Donation</a></li>
    <li><a href="#">Support</a></li>
    <li><a href="#">Sign in</a></li>
    <li><a href="#">My Orders</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
</div>

<!-- Top navigation bar -->
<div class="top-nav">
  <div class="menu-left">
    <span>Menu</span>
    <div class="burger">
    <div class="burger-line"></div>
    <div class="burger-line"></div>
    <div class="burger-line"></div>
    </div>
  </div>
  <div class="menu-center">Home</div>
  <div class="menu-right">
    <span>👤</span>
    <span>🛒</span>
  </div>
</div>

<!-- Video section -->
<div class="video-section">
  <video autoplay muted loop>
    <source src="{{ '/assets/mp4/cpright-free-nature.mp4?v=2' | relative_url }}" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-overlay">
    <h1>Welcome to Our Site</h1>
    <p>This is an e-shop template with random content.</p>
  </div>
</div>

<!-- Two-column section -->
<div class="two-columns">
  <div class="column">
    <img src="/assets/jpg/accessories.jpg" alt="Image 1">
    <div class="column-overlay">
      <h2>Accessories</h2>
      <button>Go to shop</button>
    </div>
  </div>
  <div class="column">
    <img src="/assets/jpg/equipment.jpg" alt="Image 2">
    <div class="column-overlay">
      <h2>Equipment</h2>
      <button>Go to shop</button>
    </div>
  </div>
</div>


<!-- Footer -->
<footer>
  <p>This project is under moderation.<br>
  Thanks for visting!</p>
</footer>

<script src="{{ '/assets/js/main.js' | relative_url }}"></script>