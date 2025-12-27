// Animated counter for statistics
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Letter-by-letter animation for hero title
function animateTitle() {
    const titleElement = document.getElementById('animatedTitle');
    const text = 'SHIBA SOLANA';
    titleElement.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'letter';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.animationDelay = `${index * 0.1}s`;
        titleElement.appendChild(span);
        
        // Add hover effect to each letter
        span.addEventListener('mouseenter', () => {
            span.style.animation = 'none';
            setTimeout(() => {
                span.style.animation = 'letterBounce 0.5s ease';
            }, 10);
        });
    });
}

// Initialize Presale - Calculator and Live Updates
function initPresale() {
    const solInput = document.getElementById('solInput');
    const contributeBtn = document.getElementById('contributeBtn');
    
    // SOL price (mock - replace with real API)
    const SOL_PRICE_USD = 100;
    const TOKEN_PRICE = 0.0001;
    const PHASE_1_BONUS = 0.30; // 30% bonus
    
    // Calculate tokens based on SOL input
    function calculateTokens() {
        const solAmount = parseFloat(solInput.value) || 0;
        const usdValue = solAmount * SOL_PRICE_USD;
        const baseTokens = Math.floor(usdValue / TOKEN_PRICE);
        const bonusTokens = Math.floor(baseTokens * PHASE_1_BONUS);
        const totalTokens = baseTokens + bonusTokens;
        
        document.getElementById('baseTokens').textContent = baseTokens.toLocaleString();
        document.getElementById('bonusTokens').textContent = '+' + bonusTokens.toLocaleString();
        document.getElementById('totalTokens').textContent = totalTokens.toLocaleString();
        document.getElementById('tokensOutput').textContent = totalTokens.toLocaleString();
    }
    
    // Update calculation on input change
    if (solInput) {
        solInput.addEventListener('input', calculateTokens);
        calculateTokens(); // Initial calculation
    }
    
    // Contribute button interaction
    if (contributeBtn) {
        contributeBtn.addEventListener('click', () => {
            const solAmount = parseFloat(solInput.value) || 0;
            if (solAmount < 0.1) {
                showNotification('Minimum contribution is 0.1 SOL', 'error');
            } else if (solAmount > 100) {
                showNotification('Maximum contribution is 100 SOL', 'error');
            } else {
                showNotification('Connecting to Phantom wallet...', 'info');
                setTimeout(() => {
                    whitelistBtn.click();
                }, 1000);
            }
        });
    }
    
    // Simulate live presale progress updates
    setInterval(() => {
        const raisedElement = document.getElementById('totalRaised');
        const progressFill = document.getElementById('progressFill');
        const progressPercent = document.getElementById('progressPercent');
        
        if (raisedElement) {
            let currentRaised = parseFloat(raisedElement.textContent.replace(/[$,]/g, ''));
            const increase = Math.floor(Math.random() * 500) + 100;
            currentRaised += increase;
            
            raisedElement.textContent = '$' + currentRaised.toLocaleString();
            
            const percentage = ((currentRaised / 500000) * 100).toFixed(1);
            if (progressPercent) progressPercent.textContent = percentage + '%';
            if (progressFill) progressFill.style.width = percentage + '%';
        }
    }, 8000);
    
    // Update contributors count
    setInterval(() => {
        const contributorsElement = document.getElementById('contributors');
        if (contributorsElement) {
            let count = parseInt(contributorsElement.textContent.replace(/,/g, ''));
            if (Math.random() > 0.6) {
                count += 1;
                contributorsElement.textContent = count.toLocaleString();
            }
        }
    }, 12000);
    
    // Update countdown timer
    function updateTimer() {
        const timeElement = document.getElementById('timeLeft');
        if (!timeElement) return;
        
        // Mock countdown - set your actual end date
        const endDate = new Date('2025-01-15T00:00:00').getTime();
        const now = new Date().getTime();
        const distance = endDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        timeElement.textContent = `${days}d ${hours}h ${minutes}m`;
    }
    
    updateTimer();
    setInterval(updateTimer, 60000);
    
    // Simulate recent contributions
    const addresses = [
        '0x7f3...a9d2', '0x92b...3ef1', '0x4c1...7bd8', '0xa5e...9c4f',
        '0x1b7...f3c2', '0x8d2...4ea9', '0x3f9...6cb1', '0x2a4...8def'
    ];
    
    setInterval(() => {
        const contributionList = document.getElementById('contributionList');
        if (!contributionList) return;
        
        const randomAddress = addresses[Math.floor(Math.random() * addresses.length)];
        const randomAmount = (Math.random() * 9 + 1).toFixed(1);
        
        const newContribution = document.createElement('div');
        newContribution.className = 'contribution-item';
        newContribution.innerHTML = `
            <span class="contributor-address">${randomAddress}</span>
            <span class="contribution-amount">${randomAmount} SOL</span>
        `;
        
        contributionList.insertBefore(newContribution, contributionList.firstChild);
        
        if (contributionList.children.length > 4) {
            contributionList.removeChild(contributionList.lastChild);
        }
    }, 15000);
}

// Initialize Dashboard (removed - replaced with presale)
function initDashboard() {
    // Presale has replaced the dashboard
    return;
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Animate counters when they come into view
            if (entry.target.classList.contains('stat')) {
                const valueElement = entry.target.querySelector('.stat-value');
                const spanElement = valueElement.querySelector('span');
                if (spanElement) {
                    animateCounter(spanElement);
                } else {
                    animateCounter(valueElement);
                }
            }
        }
    });
}, observerOptions);

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Initialize title animation
    animateTitle();
    
    // Initialize presale calculator and live updates
    initPresale();
    
    // Add fade-in animation to sections
    const sections = document.querySelectorAll('.about, .tokenomics, .roadmap, .community');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Observe stats
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => observer.observe(stat));

    // Observe cards
    const cards = document.querySelectorAll('.tokenomics-card, .timeline-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
});

// Add mobile menu styles dynamically
const style = document.createElement('style');
style.textContent = `
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(10, 10, 10, 0.98);
        padding: 20px;
        border-bottom: 2px solid var(--primary-color);
    }
    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }
    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            navMenu.classList.remove('active');
            mobileMenuBtn.classList.remove('active');
        }
    });
});

// Whitelist form functionality
const whitelistBtn = document.getElementById('whitelistBtn');
let whitelistActive = false;

whitelistBtn.addEventListener('click', () => {
    if (!whitelistActive) {
        const email = prompt('Enter your email to join the whitelist:');
        if (email && email.includes('@')) {
            whitelistActive = true;
            whitelistBtn.textContent = '✓ Whitelisted';
            whitelistBtn.style.background = 'var(--gradient-2)';
            showNotification('Successfully joined the whitelist! 🎉', 'success');
            // Here you would send to your backend
            console.log('Whitelist email:', email);
        } else if (email) {
            showNotification('Please enter a valid email address', 'error');
        }
    } else {
        showNotification('You\'re already on the whitelist! 🌟', 'info');
    }
});

// Buy/Join Presale button functionality
const buyBtn = document.getElementById('buyBtn');
buyBtn.addEventListener('click', () => {
    showNotification('Presale launching soon! Join whitelist for early access 🚀', 'info');
    setTimeout(() => {
        whitelistBtn.click();
    }, 1000);
});

// Copy contract address
const copyBtn = document.getElementById('copyBtn');
const contractAddress = document.getElementById('contractAddress');

copyBtn.addEventListener('click', () => {
    const address = contractAddress.textContent;
    navigator.clipboard.writeText(address).then(() => {
        copyBtn.textContent = 'Copied!';
        showNotification('Contract address copied!', 'success');
        setTimeout(() => {
            copyBtn.textContent = 'Copy';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        showNotification('Failed to copy address', 'error');
    });
});

// Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Here you would typically send this to your backend
    console.log('Newsletter subscription:', email);
    showNotification('Thanks for subscribing! 🚀', 'success');
    e.target.reset();
});

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '15px 25px',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '10000',
        animation: 'slideInRight 0.3s ease',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
    });
    
    if (type === 'success') {
        notification.style.background = 'linear-gradient(135deg, #00ff88, #00cc66)';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ff4444, #cc0000)';
    } else {
        notification.style.background = 'linear-gradient(135deg, #00d4ff, #0099ff)';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const notificationStyle = document.createElement('style');
notificationStyle.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(notificationStyle);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.5)';
    }
    
    // Hide navbar on scroll down, show on scroll up
    if (currentScroll > lastScroll && currentScroll > 500) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

navbar.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const floatingShiba = document.querySelector('.floating-shiba');
    
    if (heroContent) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - scrolled / 700;
    }
    
    if (floatingShiba) {
        floatingShiba.style.transform = `translateY(${-30 + scrolled * 0.3}px) rotate(${scrolled * 0.1}deg)`;
    }
});

// Floating elements with icons instead of emojis
function createFloatingEmojis() {
    const icons = ['fa-rocket', 'fa-gem', 'fa-moon', 'fa-star', 'fa-coins'];
    const container = document.querySelector('.hero');
    
    setInterval(() => {
        const icon = document.createElement('div');
        const i = document.createElement('i');
        i.className = `fas ${icons[Math.floor(Math.random() * icons.length)]}`;
        icon.appendChild(i);
        icon.style.position = 'absolute';
        icon.style.left = Math.random() * 100 + '%';
        icon.style.top = '100%';
        icon.style.fontSize = (Math.random() * 30 + 20) + 'px';
        icon.style.opacity = '0.6';
        icon.style.pointerEvents = 'none';
        icon.style.transition = 'all 3s ease-out';
        icon.style.color = Math.random() > 0.5 ? '#b84ff0' : '#00d4d4';
        
        container.appendChild(icon);
        
        setTimeout(() => {
            icon.style.top = '-100px';
            icon.style.opacity = '0';
        }, 100);
        
        setTimeout(() => {
            icon.remove();
        }, 3100);
    }, 3000);
}

// Initialize floating emojis
createFloatingEmojis();

// Presale progress tracker (replace with real smart contract data)
function updatePresaleProgress() {
    const raisedElement = document.querySelector('.stat-value span[data-target="250000"]');
    if (raisedElement && raisedElement.textContent !== '0') {
        // Simulate presale progress
        const baseValue = 250000;
        const variation = Math.floor(Math.random() * 5000);
        const newValue = Math.min(baseValue + variation, 500000);
        raisedElement.textContent = newValue.toLocaleString();
    }
}

// Update presale progress every 15 seconds
setInterval(updatePresaleProgress, 15000);

// Easter egg: Konami code
let konamiCode = [];
const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.key);
    konamiCode = konamiCode.slice(-10);
    
    if (konamiCode.join(',') === konamiSequence.join(',')) {
        showNotification('🎉 SHIBA MODE ACTIVATED! 🐕', 'success');
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const rainbowStyle = document.createElement('style');
        rainbowStyle.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(rainbowStyle);
        
        setTimeout(() => {
            document.body.style.animation = '';
            rainbowStyle.remove();
        }, 5000);
    }
});

console.log('%c🐕 SHIBA SOLANA - UTILITY TOKEN 🚀', 'font-family: Playfair Display, serif; font-size: 30px; font-weight: bold; color: #b84ff0;');
console.log('%cBuilding the future of DeFi on Solana 💎', 'font-family: Montserrat, sans-serif; font-size: 16px; color: #00d4d4;');
