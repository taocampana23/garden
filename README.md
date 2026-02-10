<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Gardens - Your online gardening community offering gardening boxes, tips, and activities across Europe, Asia, and New Zealand">
    <title>Gardens | Grow Your Passion</title>
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/variables.css">
    <link rel="stylesheet" href="css/base.css">
    <link rel="stylesheet" href="css/layout.css">
    <link rel="stylesheet" href="css/components.css">
    <link rel="stylesheet" href="css/pages.css">
    <link rel="stylesheet" href="css/accessibility.css">
    <link rel="stylesheet" href="css/responsive.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <link rel="icon" type="image/x-icon" href="images/favicon/favicon.ico">
    <link rel="apple-touch-icon" href="images/favicon/apple-touch-icon.png">
</head>
<body>
    <a href="#main-content" class="skip-link">Skip to main content</a>

    <div id="accessibility-panel" class="accessibility-panel" aria-label="Accessibility options">
        <button id="accessibility-toggle" class="accessibility-toggle" aria-expanded="false" aria-controls="accessibility-options">
            <span aria-hidden="true">♿</span>
            <span class="sr-only">Accessibility Options</span>
        </button>
        <div id="accessibility-options" class="accessibility-options" hidden>
            <h3>Accessibility Options</h3>
            <div class="accessibility-controls">
                <button id="increase-text" aria-label="Increase text size">A+</button>
                <button id="decrease-text" aria-label="Decrease text size">A-</button>
                <button id="high-contrast" aria-label="Toggle high contrast mode">High Contrast</button>
                <button id="underline-links" aria-label="Toggle link underlines">Underline Links</button>
                <button id="reset-accessibility" aria-label="Reset all accessibility settings">Reset</button>
            </div>
        </div>
    </div>

    <header class="main-header">
        <div class="container">
            <div class="header-content">
                <a href="index.html" class="logo">
                    <h1>🌿 Gardens</h1>
                    <span class="tagline">Grow Your Passion</span>
                </a>
                
                <button class="mobile-menu-toggle" aria-label="Open menu" aria-expanded="false" aria-controls="primary-navigation">
                    <span class="hamburger"></span>
                    <span class="menu-text">MENU</span>
                </button>

                <nav id="primary-navigation" class="primary-navigation" aria-label="Primary navigation">
                    <ul class="nav-list">
                        <li><a href="index.html" class="nav-link active" aria-current="page">Home</a></li>
                        <li><a href="about.html" class="nav-link">About Us</a></li>
                        <li class="dropdown">
                            <button class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">Activities</button>
                            <ul class="dropdown-menu" aria-label="Activities submenu">
                                <li><a href="activities.html#open-gardens">Open Gardens</a></li>
                                <li><a href="activities.html#monthly-checklist">Monthly Checklist</a></li>
                                <li><a href="activities.html#greenhouse-tips">Greenhouse Tips</a></li>
                                <li><a href="activities.html#garden-maintenance">Garden Maintenance</a></li>
                                <li><a href="activities.html#allotment-jobs">Allotment Jobs</a></li>
                                <li><a href="activities.html#more-activities">More Activities</a></li>
                            </ul>
                        </li>
                        <li class="dropdown">
                            <button class="nav-link dropdown-toggle" aria-expanded="false" aria-haspopup="true">Our Boxes</button>
                            <ul class="dropdown-menu" aria-label="Boxes submenu">
                                <li><a href="boxes.html">All Boxes</a></li>
                                <li><a href="oddbox.html">Oddbox</a></li>
                                <li><a href="flourish.html">Flourish Box</a></li>
                                <li><a href="cottage.html">Cottage Box</a></li>
                                <li><a href="custom-boxes.html">Custom Boxes</a></li>
                            </ul>
                        </li>
                        <li><a href="blog.html" class="nav-link">Blog</a></li>
                        <li><a href="contact.html" class="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <main id="main-content" class="main-content">
        <section class="hero-section">
            <div class="hero-slider">
                <div class="hero-slide active">
                    <img src="https://images.unsplash.com/photo-1464226184485-280280f92969?w=1200&h=600&fit=crop" alt="Vibrant vegetable garden with fresh produce" class="hero-bg-image" loading="lazy">
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <h2>Grow Your Passion, One Box at a Time</h2>
                        <p>Join our community of gardeners across Europe, Asia, and New Zealand</p>
                        <a href="boxes.html" class="btn btn-primary btn-large">Explore Our Boxes</a>
                    </div>
                </div>
                <div class="hero-slide">
                    <img src="https://images.unsplash.com/photo-1470252649378-9c29740ff023?w=1200&h=600&fit=crop" alt="Community garden event" class="hero-bg-image" loading="lazy">
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <h2>Join Our Gardening Community</h2>
                        <p>Monthly events, expert advice, and seasonal activities for all skill levels</p>
                        <a href="activities.html" class="btn btn-primary btn-large">View Activities</a>
                    </div>
                </div>
                <div class="hero-slide">
                    <img src="https://images.unsplash.com/photo-1495512521101-7d1d6b80b5b5?w=1200&h=600&fit=crop" alt="Beautiful flower arrangement" class="hero-bg-image" loading="lazy">
                    <div class="hero-overlay"></div>
                    <div class="hero-content">
                        <h2>Perfect for Beginners & Experts</h2>
                        <p>From wonky vegetables to wild flowers, we have something for everyone</p>
                        <a href="about.html" class="btn btn-primary btn-large">Learn More</a>
                    </div>
                </div>
                <button class="slider-prev" aria-label="Previous slide">‹</button>
                <button class="slider-next" aria-label="Next slide">›</button>
                <div class="slider-dots">
                    <button class="dot active" aria-label="Go to slide 1"></button>
                    <button class="dot" aria-label="Go to slide 2"></button>
                    <button class="dot" aria-label="Go to slide 3"></button>
                </div>
            </div>
        </section>

        <section class="value-propositions">
            <div class="container">
                <h2 class="section-title">Why Choose Gardens?</h2>
                <div class="value-grid">
                    <div class="value-card">
                        <div class="value-icon">
                            <img src="https://icons.getbootstrap.com/assets/icons/truck-front.svg" alt="" aria-hidden="true">
                        </div>
                        <h3>Weekly Deliveries</h3>
                        <p>Fresh, seasonal produce and gardening supplies delivered regularly</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <img src="https://icons.getbootstrap.com/assets/icons/leaf.svg" alt="" aria-hidden="true">
                        </div>
                        <h3>Sustainable & Eco-Friendly</h3>
                        <p>Reducing food waste with wonky vegetables and sustainable practices</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <img src="https://icons.getbootstrap.com/assets/icons/people.svg" alt="" aria-hidden="true">
                        </div>
                        <h3>Community Focused</h3>
                        <p>Join events, competitions, and connect with fellow gardeners</p>
                    </div>
                    <div class="value-card">
                        <div class="value-icon">
                            <img src="https://icons.getbootstrap.com/assets/icons/lightbulb.svg" alt="" aria-hidden="true">
                        </div>
                        <h3>Expert Guidance</h3>
                        <p>Monthly checklists, greenhouse tips, and personalized advice</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="featured-boxes">
            <div class="container">
                <h2 class="section-title">Our Popular Gardening Boxes</h2>
                <p class="section-subtitle">Perfect for beginners and experienced gardeners alike</p>
                
                <div class="boxes-grid">
                    <article class="box-card">
                        <div class="box-image">
                            <img src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&h=300&fit=crop" alt="Oddbox with wonky vegetables" loading="lazy">
                            <span class="box-badge">Most Popular</span>
                        </div>
                        <div class="box-content">
                            <h3>Oddbox</h3>
                            <p class="box-tagline">Weekly deliveries of wonky vegetables rejected by supermarkets</p>
                            <ul class="box-features">
                                <li>✓ Weekly vegetable deliveries</li>
                                <li>✓ Seasonal vegetable seeds</li>
                                <li>✓ Exclusive gardening blog access</li>
                                <li>✓ Helps reduce food waste</li>
                            </ul>
                            <div class="box-actions">
                                <a href="oddbox.html" class="btn btn-secondary">Learn More</a>
                                <a href="contact.html?box=oddbox" class="btn btn-primary">Enquire Now</a>
                            </div>
                        </div>
                    </article>

                    <article class="box-card">
                        <div class="box-image">
                            <img src="https://images.unsplash.com/photo-1418156036180-fdddf184bdb1?w=400&h=300&fit=crop" alt="Flourish box with seeds" loading="lazy">
                            <span class="box-badge">Limited Edition</span>
                        </div>
                        <div class="box-content">
                            <h3>Flourish Box</h3>
                            <p class="box-tagline">Four seasonal boxes per year for the dedicated gardener</p>
                            <ul class="box-features">
                                <li>✓ 4 boxes per year (seasonal)</li>
                                <li>✓ Premium seeds with seed trays</li>
                                <li>✓ Quality watering can included</li>
                                <li>✓ Handmade cruelty-free soap</li>
                            </ul>
                            <div class="box-actions">
                                <a href="flourish.html" class="btn btn-secondary">Learn More</a>
                                <a href="contact.html?box=flourish" class="btn btn-primary">Enquire Now</a>
                            </div>
                        </div>
                    </article>

                    <article class="box-card">
                        <div class="box-image">
                            <img src="https://images.unsplash.com/photo-1490995999917-41eb8cb1eb7c?w=400&h=300&fit=crop" alt="Cottage box with wild flowers" loading="lazy">
                            <span class="box-badge">Beginner Friendly</span>
                        </div>
                        <div class="box-content">
                            <h3>Cottage Box</h3>
                            <p class="box-tagline">Monthly inspiration for creating your cottage garden</p>
                            <ul class="box-features">
                                <li>✓ Monthly themed boxes</li>
                                <li>✓ Wild flower seed collections</li>
                                <li>✓ Educational fact cards</li>
                                <li>✓ Seed markers and twine</li>
                            </ul>
                            <div class="box-actions">
                                <a href="cottage.html" class="btn btn-secondary">Learn More</a>
                                <a href="contact.html?box=cottage" class="btn btn-primary">Enquire Now</a>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="custom-box-cta">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=300&fit=crop" alt="Custom garden boxes" class="cta-image" loading="lazy">
                    <div class="cta-content">
                        <h3>Need Something Special?</h3>
                        <p>We create custom boxes for corporate subscriptions, gifts, and special occasions.</p>
                        <a href="custom-boxes.html" class="btn btn-accent">Design Your Custom Box</a>
                    </div>
                </div>
            </div>
        </section>

        <section class="activities-preview">
            <div class="container">
                <h2 class="section-title">Gardening Activities & Community</h2>
                
                <div class="activities-grid">
                    <a href="activities.html#open-gardens" class="activity-card">
                        <div class="activity-icon">🌷</div>
                        <h3>Open Gardens</h3>
                        <p>Visit beautiful gardens in your area and get inspiration</p>
                        <span class="activity-link">View Schedule →</span>
                    </a>
                    
                    <a href="activities.html#monthly-checklist" class="activity-card">
                        <div class="activity-icon">📋</div>
                        <h3>Monthly Checklist</h3>
                        <p>Never miss important gardening tasks with our guide</p>
                        <span class="activity-link">Get Checklist →</span>
                    </a>
                    
                    <a href="activities.html#greenhouse-tips" class="activity-card">
                        <div class="activity-icon">🌱</div>
                        <h3>Greenhouse Tips</h3>
                        <p>Expert advice for successful greenhouse gardening</p>
                        <span class="activity-link">Learn More →</span>
                    </a>
                    
                    <a href="activities.html#garden-maintenance" class="activity-card">
                        <div class="activity-icon">✂️</div>
                        <h3>Maintenance Advice</h3>
                        <p>Keep your garden healthy year-round with our tips</p>
                        <span class="activity-link">Read Advice →</span>
                    </a>
                    
                    <a href="activities.html#allotment-jobs" class="activity-card">
                        <div class="activity-icon">🥕</div>
                        <h3>Allotment Jobs</h3>
                        <p>Seasonal tasks and projects for allotment gardeners</p>
                        <span class="activity-link">See Jobs →</span>
                    </a>
                    
                    <a href="activities.html#more-activities" class="activity-card">
                        <div class="activity-icon">➕</div>
                        <h3>More Activities</h3>
                        <p>Photo competitions, surveys, advice talks, and more</p>
                        <span class="activity-link">Explore All →</span>
                    </a>
                </div>
            </div>
        </section>

        <section class="testimonials">
            <div class="container">
                <h2 class="section-title">What Our Gardeners Say</h2>
                
                <div class="testimonial-slider">
                    <div class="testimonial-slide active">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop" alt="Sarah M." class="testimonial-avatar" loading="lazy">
                        <div class="testimonial-content">
                            <p class="testimonial-text">"The Oddbox has completely changed how I cook and garden. The wonky vegetables are just as delicious, and I love knowing I'm reducing food waste. The weekly blog tips are invaluable!"</p>
                            <div class="testimonial-author">
                                <strong>Sarah M.</strong>
                                <span>Auckland, New Zealand</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial-slide">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop" alt="Thomas R." class="testimonial-avatar" loading="lazy">
                        <div class="testimonial-content">
                            <p class="testimonial-text">"As a beginner, the Cottage Box gave me the confidence to start my own garden. The fact cards and monthly themes made learning fun and easy. My balcony is now full of life!"</p>
                            <div class="testimonial-author">
                                <strong>Thomas R.</strong>
                                <span>Berlin, Germany</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="testimonial-slide">
                        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop" alt="Yuki T." class="testimonial-avatar" loading="lazy">
                        <div class="testimonial-content">
                            <p class="testimonial-text">"The community events have connected me with fellow gardeners in Tokyo. The greenhouse tips from experts have doubled my tomato yield this year. Highly recommended!"</p>
                            <div class="testimonial-author">
                                <strong>Yuki T.</strong>
                                <span>Tokyo, Japan</span>
                            </div>
                        </div>
                    </div>
                    
                    <button class="testimonial-prev" aria-label="Previous testimonial">‹</button>
                    <button class="testimonial-next" aria-label="Next testimonial">›</button>
                    <div class="testimonial-dots">
                        <button class="dot active" aria-label="Go to testimonial 1"></button>
                        <button class="dot" aria-label="Go to testimonial 2"></button>
                        <button class="dot" aria-label="Go to testimonial 3"></button>
                    </div>
                </div>
            </div>
        </section>

        <section class="newsletter">
            <div class="container">
                <div class="newsletter-content">
                    <h2>Stay Rooted with Monthly Tips</h2>
                    <p>Subscribe to our newsletter for seasonal gardening advice, exclusive offers, and community updates</p>
                    
                    <form id="newsletter-form" class="newsletter-form" novalidate>
                        <div class="form-group">
                            <label for="newsletter-email" class="sr-only">Email Address</label>
                            <input type="email" id="newsletter-email" placeholder="Your email address" required>
                            <div class="error-message" id="newsletter-error"></div>
                        </div>
                        <button type="submit" class="btn btn-primary">Subscribe</button>
                    </form>
                    
                    <p class="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
                </div>
            </div>
        </section>
    </main>

    <button id="back-to-top" class="back-to-top" aria-label="Back to top">↑</button>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-column">
                    <h3>🌿 Gardens</h3>
                    <p>Growing communities across Europe, Asia, and New Zealand through shared passion for gardening.</p>
                    <div class="social-links">
                        <a href="#" aria-label="Follow us on Facebook">Facebook</a>
                        <a href="#" aria-label="Follow us on Instagram">Instagram</a>
                        <a href="#" aria-label="Follow us on Pinterest">Pinterest</a>
                        <a href="#" aria-label="Subscribe to our YouTube">YouTube</a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="activities.html">Activities</a></li>
                        <li><a href="boxes.html">Our Boxes</a></li>
                        <li><a href="blog.html">Blog</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4>Our Services</h4>
                    <ul class="footer-links">
                        <li><a href="oddbox.html">Oddbox Subscriptions</a></li>
                        <li><a href="flourish.html">Flourish Box</a></li>
                        <li><a href="cottage.html">Cottage Box</a></li>
                        <li><a href="custom-boxes.html">Custom Boxes</a></li>
                        <li><a href="activities.html#open-gardens">Open Gardens</a></li>
                        <li><a href="activities.html#monthly-checklist">Monthly Checklists</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h4>Contact Info</h4>
                    <address>
                        <p><strong>Europe HQ:</strong><br>123 Garden Lane<br>Amsterdam, Netherlands</p>
                        <p><strong>Asia Office:</strong><br>456 Green Street<br>Singapore</p>
                        <p><strong>New Zealand:</strong><br>789 Flora Road<br>Auckland, NZ</p>
                        <p>Email: <a href="mailto:info@gardens.com">info@gardens.com</a></p>
                        <p>Phone: +31 20 123 4567</p>
                    </address>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 Gardens. All rights reserved.</p>
                <p><a href="privacy.html">Privacy Policy</a> | <a href="#">Terms of Service</a> | <a href="contact.html">Contact Us</a></p>
                <p class="accessibility-statement"><a href="#accessibility-panel">Accessibility Options</a> | We are committed to making our website accessible to all users.</p>
            </div>
        </div>
    </footer>

    <script src="js/main.js" defer></script>
    <script src="js/navigation.js" defer></script>
    <script src="js/form-validation.js" defer></script>
    <script src="js/accessibility-panel.js" defer></script>
    <script src="js/lazy-load.js" defer></script>
    <script src="js/testimonials.js" defer></script>
</body>
</html>
