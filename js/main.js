/**
 * Main Application Logic for ABHINAV BATWAL Portfolio & Resume
 * Initializes themes, typewriter, dynamic data hydration, modal viewers, and copy utilities.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNavigation();
  hydratePortfolioData();
  initTypewriter();
  initProjectFilters();
  initProjectModal();
  initTasksModal();
  initCopyButtons();
  initContactForm();
  initScrollAnimations();
});

/* ==========================================================================
   1. Theme Management (Dark / Light)
   ========================================================================== */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn?.querySelector('i');
  
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  
  applyTheme(initialTheme);

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    if (themeIcon) {
      if (theme === 'light') {
        themeIcon.className = 'fas fa-moon';
      } else {
        themeIcon.className = 'fas fa-sun';
      }
    }
  }
}

/* ==========================================================================
   2. Navigation & Mobile Menu
   ========================================================================== */
function initNavigation() {
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const navItems = document.querySelectorAll('.nav-link');

  mobileBtn?.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('active');
    const icon = mobileBtn.querySelector('i');
    if (icon) {
      icon.className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    }
  });

  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks?.classList.remove('active');
      const icon = mobileBtn?.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navItems.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/* ==========================================================================
   3. Typewriter Effect
   ========================================================================== */
function initTypewriter() {
  const textElement = document.getElementById('typewriter-text');
  if (!textElement) return;

  const roles = window.portfolioData?.personal?.roles || [
    "1st Year B.Tech CSE @ JECRC University",
    "Passionate Programmer Since 10th Standard",
    "Hardware & Technology Enthusiast",
    "Builder & Problem Solver"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 40;
    } else {
      textElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 80;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 2200; // Pause at end of word
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before typing next
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* ==========================================================================
   4. Hydrate Dynamic Data
   ========================================================================== */
function hydratePortfolioData() {
  const data = window.portfolioData;
  if (!data) return;

  // Render Stats Grid
  const statsContainer = document.getElementById('stats-grid');
  if (statsContainer && data.personal.stats) {
    statsContainer.innerHTML = data.personal.stats.map(s => `
      <div class="stat-item">
        <div class="stat-number">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>
    `).join('');
  }

  // Render Journey
  renderJourney(data.journey);

  // Render Education Timeline
  renderEducation(data.education);

  // Render Hardware Hobbies
  renderHardware(data.hardwareHobbies);

  // Render Skills Matrix
  renderSkills(data.skills);

  // Render Projects & Tasks
  renderProjects(data.projects);

  // Render Downloads & Certifications
  renderCertifications(data.downloads?.certificates);

  // Hydrate Contact links & texts
  const emailEl = document.getElementById('contact-email-link');
  if (emailEl) {
    emailEl.href = `mailto:${data.personal.email}`;
    emailEl.textContent = data.personal.email;
  }
}

function renderJourney(journey) {
  const container = document.getElementById('journey-container');
  if (!container || !journey) return;

  container.innerHTML = journey.map(item => `
    <div class="journey-card">
      <div class="journey-card-header">
        <span class="journey-step-badge">${item.step}</span>
        <span class="journey-badge-pill">${item.badge}</span>
      </div>
      <div class="journey-icon-wrap">
        <i class="${item.icon}"></i>
      </div>
      <h3 class="journey-title">${item.title}</h3>
      <div class="journey-institution">${item.institution}</div>
      <div class="journey-period">${item.period}</div>
      <p class="journey-desc">${item.description}</p>
      <ul class="journey-highlights">
        ${item.highlights.map(h => `<li>${h}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderEducation(education) {
  const container = document.getElementById('education-timeline');
  if (!container || !education) return;

  container.innerHTML = education.map(edu => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <div class="timeline-meta">
          <div>
            <h3 class="timeline-role">${edu.degree}</h3>
            <div class="timeline-company">${edu.institution}</div>
          </div>
          <span class="timeline-period">${edu.period}</span>
        </div>
        <p class="timeline-desc">${edu.details}</p>
        <span class="tech-tag">${edu.grade}</span>
      </div>
    </div>
  `).join('');
}

function renderHardware(hobbies) {
  const container = document.getElementById('hardware-container');
  if (!container || !hobbies) return;

  container.innerHTML = hobbies.map(h => `
    <div class="hardware-card">
      <div class="hardware-icon-box" style="background: ${h.gradient}">
        <i class="${h.icon}"></i>
      </div>
      <h3 class="hardware-title">${h.title}</h3>
      <p class="hardware-desc">${h.description}</p>
      <div class="hardware-tags">
        ${h.tags.map(t => `<span class="hardware-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderSkills(skills) {
  const container = document.getElementById('skills-container');
  if (!container || !skills) return;

  const categories = [
    { key: 'programming', title: 'Programming & Web Technologies', icon: 'fas fa-code' },
    { key: 'hardware', title: 'Hardware & Embedded Systems', icon: 'fas fa-microchip' },
    { key: 'tools', title: 'Developer Tools & Systems', icon: 'fas fa-terminal' }
  ];

  container.innerHTML = categories.map(cat => {
    const items = skills[cat.key] || [];
    return `
      <div class="skill-category-card">
        <div class="category-header">
          <i class="${cat.icon} category-icon"></i>
          <h3 class="category-title">${cat.title}</h3>
        </div>
        <div class="skill-items-list">
          ${items.map(item => `
            <div class="skill-row">
              <div class="skill-meta">
                <span class="skill-name-wrap">
                  <i class="${item.icon} skill-icon" style="color: ${item.color || 'var(--accent-primary)'};"></i>
                  <span>${item.name}</span>
                </span>
                <span class="skill-percentage">${item.level}%</span>
              </div>
              <div class="skill-progress-track">
                <div class="skill-progress-fill" style="width: ${item.level}%"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');
}

function renderProjects(projects, filter = 'all') {
  const container = document.getElementById('projects-container');
  if (!container || !projects) return;

  const filtered = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  container.innerHTML = filtered.map(p => `
    <div class="project-card" data-category="${p.category}" data-id="${p.id}">
      <div class="project-banner" style="background: ${p.imageGradient}">
        <i class="${p.icon} project-banner-icon"></i>
        ${p.badge ? `<span class="project-badge">${p.badge}</span>` : ''}
      </div>
      <div class="project-content">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.shortDescription}</p>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
        <div class="project-footer">
          <button class="btn btn-secondary btn-sm view-details-btn" data-id="${p.id}">
            <span>View Details</span> <i class="fas fa-arrow-right"></i>
          </button>
          <div class="project-links">
            ${p.githubUrl ? `
              <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="View Source on GitHub">
                <i class="fab fa-github"></i>
              </a>
            ` : ''}
            ${p.liveUrl ? `
              <a href="${p.liveUrl}" target="_blank" rel="noopener noreferrer" class="icon-btn" title="Live Preview">
                <i class="fas fa-external-link-alt"></i>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  // Rebind modal triggers
  container.querySelectorAll('.view-details-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      openModal(id);
    });
  });

  container.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', (e) => {
      if (e.target.closest('a') || e.target.closest('button')) return;
      const id = card.getAttribute('data-id');
      openModal(id);
    });
  });
}

function renderCertifications(certs) {
  const container = document.getElementById('certificates-list');
  if (!container || !certs) return;

  container.innerHTML = certs.map(c => `
    <div class="cert-item">
      <div class="cert-item-icon" style="background: ${c.badgeColor || '#6366f1'};">
        <i class="fas fa-certificate"></i>
      </div>
      <div class="cert-item-info">
        <div class="cert-item-title">${c.title}</div>
        <div class="cert-item-sub">${c.issuer} • ${c.date}</div>
        <span class="cert-badge" style="background: ${c.badgeColor}22; color: ${c.badgeColor}; border: 1px solid ${c.badgeColor}44;">
          ${c.badge}
        </span>
      </div>
      <div class="cert-item-action">
        <a href="${c.filePath}" download="${c.fileName}" class="btn btn-secondary btn-sm" title="Download ${c.title}">
          <i class="fas fa-download"></i>
          <span>PDF</span>
        </a>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   5. Project Filtering
   ========================================================================== */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      renderProjects(window.portfolioData?.projects, filter);
    });
  });
}

/* ==========================================================================
   6. Modals (Project Modal & Tasks Modal)
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close');
  const closeActionBtn = document.getElementById('modal-close-action');

  closeBtn?.addEventListener('click', closeModal);
  closeActionBtn?.addEventListener('click', closeModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeModal();
    }
  });
}

function openModal(projectId) {
  const modal = document.getElementById('project-modal');
  const project = window.portfolioData?.projects.find(p => p.id === projectId);
  if (!modal || !project) return;

  const banner = document.getElementById('modal-banner');
  const bannerIcon = document.getElementById('modal-banner-icon');
  const badge = document.getElementById('modal-badge');
  const title = document.getElementById('modal-title');
  const desc = document.getElementById('modal-desc');
  const highlightsList = document.getElementById('modal-highlights');
  const tagsContainer = document.getElementById('modal-tags');
  const githubLink = document.getElementById('modal-github-link');

  if (banner) banner.style.background = project.imageGradient;
  if (bannerIcon) bannerIcon.className = `${project.icon} modal-banner-icon`;
  if (badge) badge.textContent = project.badge || 'Project Overview';
  if (title) title.textContent = project.title;
  if (desc) desc.textContent = project.fullDescription;

  if (highlightsList) {
    highlightsList.innerHTML = project.highlights.map(h => `<li>${h}</li>`).join('');
  }

  if (tagsContainer) {
    tagsContainer.innerHTML = project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('');
  }

  if (githubLink) {
    githubLink.href = project.githubUrl || 'https://github.com/batwallabhinav-bit';
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function initTasksModal() {
  const triggerBtn = document.getElementById('open-tasks-modal-btn');
  const modal = document.getElementById('tasks-info-modal');
  const closeBtn = document.getElementById('tasks-info-close');

  triggerBtn?.addEventListener('click', () => {
    modal?.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn?.addEventListener('click', closeTasksModal);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeTasksModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal?.classList.contains('active')) {
      closeTasksModal();
    }
  });

  function closeTasksModal() {
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  }
}

/* ==========================================================================
   7. Copy-to-Clipboard Functionality
   ========================================================================== */
function initCopyButtons() {
  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`Copied "${textToCopy}" to clipboard!`, true);
      }).catch(() => {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast(`Copied "${textToCopy}" to clipboard!`, true);
      });
    });
  });
}

/* ==========================================================================
   8. Contact Form Handling
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('contact-form');

  form?.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('sender-name')?.value.trim();
    const email = document.getElementById('sender-email')?.value.trim();
    const subject = document.getElementById('sender-subject')?.value.trim() || 'Portfolio Inquiry';
    const message = document.getElementById('sender-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', false);
      return;
    }

    // Open email client with prefilled details
    const mailtoUrl = `mailto:abhinavbatwal0101@gmail.com?subject=${encodeURIComponent(subject + " [from " + name + "]")}&body=${encodeURIComponent("Sender: " + name + "\nEmail: " + email + "\n\n" + message)}`;
    window.location.href = mailtoUrl;

    showToast(`Thank you, ${name}! Opening your email client to deliver message...`, true);
    form.reset();
  });
}

function showToast(message, isSuccess = true) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toast-message');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = message;
  toast.style.borderColor = isSuccess ? '#10b981' : '#ef4444';
  
  const icon = toast.querySelector('.toast-icon');
  if (icon) {
    icon.className = isSuccess 
      ? 'fas fa-check-circle toast-icon' 
      : 'fas fa-exclamation-circle toast-icon';
    icon.style.color = isSuccess ? '#10b981' : '#ef4444';
  }

  toast.classList.add('active');
  setTimeout(() => {
    toast.classList.remove('active');
  }, 4500);
}

/* ==========================================================================
   9. Scroll Animations
   ========================================================================== */
function initScrollAnimations() {
  const skillSection = document.getElementById('skills');
  if (skillSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const fills = skillSection.querySelectorAll('.skill-progress-fill');
          fills.forEach(fill => {
            const target = fill.style.width;
            fill.style.width = '0%';
            setTimeout(() => {
              fill.style.width = target;
            }, 100);
          });
          observer.unobserve(skillSection);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(skillSection);
  }
}
