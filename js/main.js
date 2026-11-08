/**
 * Main Interactive Engine — Editorial Portfolio
 * Functions: Mobile nav, live clock, project filter, contact form, theme toggle, command palette
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const navToggle = document.querySelector('.mobile-nav-toggle');
  const mobilePanel = document.querySelector('.mobile-nav-panel');

  if (navToggle && mobilePanel) {
    navToggle.addEventListener('click', () => {
      const isOpen = mobilePanel.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // 2. Live Bengaluru Time (IST) Clock
  const timeElements = document.querySelectorAll('.live-time-ticker');
  function updateTime() {
    try {
      const now = new Date();
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      };
      const timeStr = new Intl.DateTimeFormat('en-GB', options).format(now);
      timeElements.forEach(el => {
        el.textContent = `${timeStr} IST`;
      });
    } catch (e) {
      // Fallback
    }
  }
  if (timeElements.length > 0) {
    updateTime();
    setInterval(updateTime, 1000);
  }

  // 3. Theme Toggle (Warm Paper <-> Studio Noir)
  const currentTheme = localStorage.getItem('portfolio-theme') || 'paper';
  if (currentTheme === 'noir') {
    document.documentElement.setAttribute('data-theme', 'noir');
  }

  const themeToggles = document.querySelectorAll('.theme-switch-btn');
  themeToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const active = document.documentElement.getAttribute('data-theme') === 'noir';
      if (active) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('portfolio-theme', 'paper');
        btn.textContent = 'Noir Mode';
      } else {
        document.documentElement.setAttribute('data-theme', 'noir');
        localStorage.setItem('portfolio-theme', 'noir');
        btn.textContent = 'Paper Mode';
      }
    });

    if (currentTheme === 'noir') {
      btn.textContent = 'Paper Mode';
    } else {
      btn.textContent = 'Noir Mode';
    }
  });

  // 4. Command Palette (Cmd+K / Ctrl+K)
  const cmdModal = document.getElementById('cmdPaletteModal');
  const cmdTriggers = document.querySelectorAll('.cmd-shortcut-trigger');
  const cmdInput = document.getElementById('cmdSearchInput');
  const cmdItems = document.querySelectorAll('.cmd-item');

  function openCmd() {
    if (cmdModal) {
      cmdModal.classList.add('open');
      if (cmdInput) {
        cmdInput.value = '';
        cmdInput.focus();
        filterCmdItems('');
      }
    }
  }

  function closeCmd() {
    if (cmdModal) {
      cmdModal.classList.remove('open');
    }
  }

  function filterCmdItems(query) {
    const q = query.toLowerCase().trim();
    cmdItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (!q || text.includes(q)) {
        item.style.display = 'flex';
      } else {
        item.style.display = 'none';
      }
    });
  }

  cmdTriggers.forEach(t => t.addEventListener('click', openCmd));

  if (cmdModal) {
    cmdModal.addEventListener('click', (e) => {
      if (e.target === cmdModal) closeCmd();
    });

    const closeBtn = cmdModal.querySelector('.cmd-esc-tag');
    if (closeBtn) closeBtn.addEventListener('click', closeCmd);
  }

  if (cmdInput) {
    cmdInput.addEventListener('input', (e) => {
      filterCmdItems(e.target.value);
    });
  }

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (cmdModal && cmdModal.classList.contains('open')) {
        closeCmd();
      } else {
        openCmd();
      }
    }
    if (e.key === 'Escape' && cmdModal && cmdModal.classList.contains('open')) {
      closeCmd();
    }
  });

  // 5. Project Filter Buttons (for Projects & Achievements page)
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectItems = document.querySelectorAll('.project-archive-item');

  if (filterBtns.length > 0 && projectItems.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-filter');

        projectItems.forEach(item => {
          const itemCat = item.getAttribute('data-category') || '';
          if (category === 'all' || itemCat.includes(category)) {
            item.style.display = 'grid';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 6. Contact Form Handler (Clean mock submission feedback)
  const contactForm = document.getElementById('portfolioContactForm');
  const formStatus = document.getElementById('formStatusMsg');

  if (contactForm && formStatus) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
        formStatus.textContent = 'Please provide your name, email, and message.';
        formStatus.className = 'form-status-msg';
        formStatus.style.display = 'block';
        formStatus.style.background = '#fdeded';
        formStatus.style.color = '#5f2120';
        return;
      }

      formStatus.textContent = 'Thank you for reaching out. Your message has been sent successfully.';
      formStatus.className = 'form-status-msg success';
      formStatus.style.display = 'block';

      contactForm.reset();

      setTimeout(() => {
        formStatus.style.display = 'none';
      }, 7000);
    });
  }

  // 7. Copy Email Utility
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = btn.getAttribute('data-copy-email') || 'student@bgscet.ac.in';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = btn.textContent;
        btn.textContent = 'Copied to clipboard';
        setTimeout(() => {
          btn.textContent = originalText;
        }, 2200);
      });
    });
  });

  // 8. Smooth Scroll To Top
  const backToTopBtn = document.querySelector('.back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
