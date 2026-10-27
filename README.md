# Muhammed Adhil A — Professional Cybersecurity Portfolio

🌐 **Live Website**: [https://adhilq.github.io/portfolio/](https://adhilq.github.io/portfolio/)

A high-performance, handcrafted portfolio website designed for **Muhammed Adhil A** (Cybersecurity Researcher, SOC Analyst, Certified Ethical Hacker).

Built with a bespoke **SOC & Cyber Threat Intelligence aesthetic**, subtle interactive animations, a verified security profile card, comprehensive project deep-dive modals, and zero generic "AI template" cliches.

---

## 🚀 Quick Preview & Running Locally

### Option 1: Direct File Open (Zero Dependencies)
You can directly double-click `index.html` to open it in any web browser (Google Chrome, Microsoft Edge, Brave, Firefox). All CSS, JS, and vector SVG graphics are 100% self-contained.

### Option 2: Local HTTP Server (Recommended)
Run the included Node.js local preview server:
```bash
node preview.js
```
Then navigate to: **http://localhost:8080** in your browser.

---

## 📁 Project Structure

```
muhammed-adhil-portfolio/
├── index.html              # Core semantic HTML5 document
├── css/
│   ├── style.css           # Design system tokens, obsidian cyber theme, print layout
│   └── animations.css      # Smooth micro-interactions, telemetry glow, scroll reveal
├── js/
│   ├── app.js              # Project filters, modal deep dives, copy toast, scroll spy
│   └── background.js       # Dynamic cyber telemetry node canvas with mouse interaction
├── preview.js              # Lightweight local HTTP server (zero npm dependencies)
└── README.md               # Documentation and deployment instructions
```

---

## 🛡️ Core Highlights & Features

1. **Authentic Cybersecurity Tone**:
   - Written specifically around SOC operations, Wazuh SIEM deployment, attack simulations, and hospital IT infrastructure.
   - High readability, crisp contrast, typography: `Plus Jakarta Sans` & `JetBrains Mono`.

2. **Verified Security Profile Card**:
   - Clean, executive credential card showcasing EC-Council CEH, Certified SOC Analyst, active IT support engagement at Sevana Hospital, and Wazuh telemetry.

3. **In-Depth Case Studies**:
   - **Enterprise SOC Monitoring Lab (Wazuh SIEM)**: Multi-tier SIEM architecture on WSL Windows 11, Kali Linux attack simulation (Nmap, Hydra), Windows Event Logs (Event ID 4625 brute-force detection), and dashboard query filters.
   - **CTF Machine Penetration Testing**: TryHackMe penetration testing, Linux privilege escalation, and vulnerability assessment.
   - **FixPro (HAM-IMS)**: Full-Stack Clinical Asset Tracking & Real-Time Issue Dispatching Platform (Next.js 14, TypeScript, WebSockets SLA countdown engine, granular RBAC, QR equipment tracking, PM2).
   - **Face Recognized Attendance System**: Real-time biometric verification using OpenCV & computer vision.

4. **Interactive Arsenal & Tooling**:
   - Filterable tools by domain (SIEM & Defense, Offensive & Pentesting, Network & Forensics, Systems & Dev).
   - Real-world context on Burp Suite, Splunk, Wazuh, Wireshark, Metasploit, Microsoft Defender XDR, and more.

5. **Recruiter-Friendly Features**:
   - 1-Click email copy with instant toast confirmation.
   - Direct mailto and phone click-to-call actions.
   - Dedicated print stylesheet (`Ctrl + P` or "Print Resume" button) formatted cleanly for physical paper or PDF export.

---

## 🌐 Deploying to the Web (Free & Fast)

### GitHub Pages:
1. Initialize git and push to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Muhammed Adhil A Portfolio"
   git remote add origin https://github.com/adhil911/portfolio.git
   git push -u origin main
   ```
2. In GitHub repository settings &rarr; **Pages** &rarr; Select `main` branch and root `/` &rarr; Save. Your site will be live instantly!

### Vercel / Netlify:
- Simply drag-and-drop the `muhammed-adhil-portfolio` folder into [Netlify Drop](https://app.netlify.com/drop) or deploy via Vercel CLI (`vercel`).
