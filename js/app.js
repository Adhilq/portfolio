/* ==========================================================================
   PORTFOLIO APPLICATION LOGIC
   Navigation, filtering, modal case studies, clipboard toast, and scroll reveal
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Sticky Header scrolled state
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.querySelector('.mobile-nav-toggle');
  const mobileDrawer = document.querySelector('.mobile-nav-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', function () {
      mobileDrawer.classList.toggle('open');
    });

    mobileDrawer.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileDrawer.classList.remove('open');
      });
    });
  }

  // 3. Smooth active section spy
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset;
    sections.forEach(function (section) {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(function (link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav);

  // 4. Project Filters
  const projectFilterBtns = document.querySelectorAll('.project-filters .filter-btn');
  const projectCards = document.querySelectorAll('.projects-grid > div');

  projectFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      projectFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      projectCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category').includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Tool Category Filters
  const toolFilterBtns = document.querySelectorAll('.tool-filters .filter-btn');
  const toolGroups = document.querySelectorAll('.arsenal-category-group');

  toolFilterBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      toolFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-tool-cat');
      toolGroups.forEach(function (group) {
        if (cat === 'all' || group.getAttribute('data-group') === cat) {
          group.style.display = '';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // 6. Project Modal Deep Dive Data
  const modalOverlay = document.getElementById('project-modal');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-body-content');

  const PROJECT_DETAILS = {
    fixpro: {
      title: 'FixPro — Hospital Asset & Issue Management System (HAM-IMS)',
      content: `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <span class="badge badge-cyan">Full-Stack Architecture</span>
          <span class="badge badge-emerald">WebSockets Live Engine</span>
          <span class="badge badge-amber">Granular RBAC</span>
          <span class="badge badge-indigo">QR Asset Tracking</span>
        </div>
        <p style="margin-bottom: 18px; line-height: 1.7; color: var(--text-muted);">
          FixPro is an enterprise-grade clinical equipment maintenance and issue dispatching platform engineered specifically for healthcare infrastructure. Designed to replace slow manual paper logging, the system ensures zero downtime for life-critical biomedical assets through proactive tracking and real-time operational response.
        </p>
        <h4 style="color: var(--text-highlight); margin-bottom: 8px;">Key Technical Highlights</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Real-Time Dispatch Engine:</strong> Integrated Socket.io WebSockets for sub-second incident alerts and live SLA countdown timers with visual breach thresholds for clinical engineering teams.
          </li>
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Permission Matrix & Authentication:</strong> Built multi-tenant Role-Based Access Control (RBAC) across clinical reporters, biomedical technicians, department heads, and system admins using cryptographically secure JWT sessions.
          </li>
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Asset QR & Lifecycle Audit:</strong> Integrated QR code scanning for equipment on-site lookup, service history tracking, warranty threshold monitoring, and transactional cascade database mutations.
          </li>
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Production Deployment:</strong> Hosted across hospital LAN with PM2 daemon process management, reverse proxying, and comprehensive audit trails for regulatory compliance.
          </li>
        </ul>
        <div style="background: rgba(15, 23, 42, 0.9); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan);">
          STACK: Next.js 14 (App Router) • TypeScript • Node.js / Express • Prisma ORM • PostgreSQL • WebSockets • PM2
        </div>
      `
    },
    wazuh: {
      title: 'Enterprise SOC Monitoring Lab using Wazuh SIEM',
      content: `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <span class="badge badge-cyan">SIEM Deployment</span>
          <span class="badge badge-emerald">Threat Detection</span>
          <span class="badge badge-amber">Attack Simulation</span>
        </div>
        <p style="margin-bottom: 18px; line-height: 1.7; color: var(--text-muted);">
          A dedicated Security Operations Center lab designed to simulate real-world adversarial attacks, ingest endpoint telemetry, and build proactive detection queries. Architected on WSL (Windows Subsystem for Linux) within a Windows 11 host environment.
        </p>
        <h4 style="color: var(--text-highlight); margin-bottom: 8px;">Architecture & Attack Telemetry</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">SIEM Infrastructure:</strong> Deployed Wazuh Manager, Indexer, and Dashboard instances. Installed and enrolled Wazuh Agents on distributed Windows endpoints.
          </li>
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Adversarial Simulation:</strong> Executed automated network reconnaissance with Nmap (SYN scans, version detection) and password spraying / brute-force attacks via Hydra from a Kali Linux attack node.
          </li>
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Event Telemetry Correlation:</strong> Captured Windows Security Event ID 4625 (Logon Failures) and anomalous privilege escalations; tuned custom decoder rules to suppress false positives and escalate real threats.
          </li>
        </ul>
        <div style="background: rgba(15, 23, 42, 0.9); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-emerald);">
          STACK: Wazuh SIEM • WSL Ubuntu • Windows 11 • Kali Linux • Nmap • Hydra • Windows Event Logs • Sysmon
        </div>
      `
    },
    attendance: {
      title: 'Face Recognized Attendance System',
      content: `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <span class="badge badge-cyan">Computer Vision</span>
          <span class="badge badge-emerald">Biometric Security</span>
        </div>
        <p style="margin-bottom: 18px; line-height: 1.7; color: var(--text-muted);">
          An automated facial recognition attendance management solution engineered to eliminate manual entry errors, reduce buddy punching, and enable frictionless real-time employee check-ins.
        </p>
        <h4 style="color: var(--text-highlight); margin-bottom: 8px;">Technical Implementation</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Detection & Embedding:</strong> Leveraged facial landmark detection and feature vector extraction for rapid, sub-second matching against local enrolled databases.
          </li>
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Tamper Resistance:</strong> Implemented basic liveness verification and timestamp synchronization to prevent photo spoofing attempts.
          </li>
        </ul>
        <div style="background: rgba(15, 23, 42, 0.9); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan);">
          TECH: Python • OpenCV • Face Recognition Models • SQLite Database
        </div>
      `
    },
    ctf: {
      title: 'CTF Penetration Testing & Machine Exploitation',
      content: `
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
          <span class="badge badge-cyan">TryHackMe</span>
          <span class="badge badge-emerald">Privilege Escalation</span>
          <span class="badge badge-amber">Offensive Security</span>
        </div>
        <p style="margin-bottom: 18px; line-height: 1.7; color: var(--text-muted);">
          Ongoing hands-on Capture The Flag (CTF) security engagements focusing on web application pentesting, network enumeration, initial access vectors, and Linux root privilege escalation.
        </p>
        <h4 style="color: var(--text-highlight); margin-bottom: 8px;">Key Methodologies</h4>
        <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px;">
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Reconnaissance:</strong> Port scanning with Nmap, web directory fuzzing (Gobuster/Feroxbuster), and banner grabbing.
          </li>
          <li style="position: relative; padding-left: 20px; font-size: 0.92rem; color: var(--text-muted);">
            <strong style="color: #ffffff;">Exploitation:</strong> Vulnerability assessment using Burp Suite, SQL injection, command injection, and SUID/Cron-based Linux privilege escalation.
          </li>
        </ul>
        <div style="background: rgba(15, 23, 42, 0.9); padding: 16px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle); font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-amber);">
          PLATFORMS: TryHackMe • Kali Linux • Burp Suite • Metasploit • LinPEAS • GTFOBins
        </div>
      `
    }
  };

  document.querySelectorAll('.open-modal-btn').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const projKey = btn.getAttribute('data-project');
      const data = PROJECT_DETAILS[projKey];
      if (data) {
        modalTitle.textContent = data.title;
        modalContent.innerHTML = data.content;
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', function (e) {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // 7. Clipboard Toast Notification
  const toast = document.getElementById('toast-notice');
  const toastMsg = document.getElementById('toast-msg');

  function showToast(message) {
    if (!toast) return;
    toastMsg.textContent = message;
    toast.classList.add('show');
    setTimeout(function () {
      toast.classList.remove('show');
    }, 3200);
  }

  document.querySelectorAll('.copy-email-trigger').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const email = 'muhammedadhil5561@gmail.com';
      navigator.clipboard.writeText(email).then(function () {
        showToast('✓ Email address copied to clipboard: ' + email);
      }).catch(function () {
        showToast('✓ Email: ' + email);
      });
    });
  });

  // 8. Contact Form Handling
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const msg = document.getElementById('form-message').value;

      if (!name || !email || !msg) {
        showToast('⚠ Please fill in all fields before sending.');
        return;
      }

      // Open email client with pre-filled details
      const mailtoUrl = 'mailto:muhammedadhil5561@gmail.com?subject=' +
        encodeURIComponent('Inquiry from ' + name + ' via Portfolio') +
        '&body=' + encodeURIComponent('Sender: ' + name + ' (' + email + ')\n\n' + msg);

      window.location.href = mailtoUrl;
      showToast('✓ Launching your mail client to send message to Adhil.');
      contactForm.reset();
    });
  }

  // 9. IntersectionObserver Scroll Reveal
  const revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add('revealed');
    });
  }
});
