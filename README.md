# Engineering IDT Portfolio — BGS College of Engineering and Technology (BGSCET)

A handcrafted, human, editorial-style multi-page personal portfolio developed for the **Innovation and Design Thinking (IDT)** coursework and academic evaluation at **BGS College of Engineering and Technology (BGSCET)**, Bengaluru (Affiliated to Visvesvaraya Technological University - VTU).

Inspired by the restrained aesthetic of contemporary digital design journals (`perryw-2023.webflow.io`), this site eschews generic AI tropes (neon gradients, floating glass cards, buzzwords) in favor of crisp typography, disciplined whitespace, and candid engineering reflections.

---

## Architecture & Page Index

1. **`index.html` (Home)**
   - Minimalist hero statement with live status pill (`1st Year Engineering • BGSCET Bengaluru`).
   - Four-point metadata grid (Affiliation, Academic Level, Primary Inquiry, Coursework Focus).
   - Featured preview of two anchor projects with technical spec sheets.
   - Fast direct-jump index cards to all sub-pages.

2. **`about.html` (About Me)**
   - Candid editorial bio detailing personal transition into engineering at BGSCET.
   - Grounded discussion on human-centered design in IDT labs and procedural programming in C.
   - Core working principles (Empathy First, Ruthless Clarity, Build to Learn).
   - Structured reading list & technical inquiries table.

3. **`education-skills.html` (Education & Skills)**
   - Chronological academic timeline covering current B.E. at BGSCET (VTU), Pre-University (PCMB/PCMC), and Secondary School (Class X).
   - Coursework tag badges for active semester subjects.
   - Four-quadrant competency matrix: Technical & Computation, Innovation & Design Thinking (IDT), Engineering Tools & Prototyping, and Core Engineering Competencies.

4. **`projects.html` (Projects & Achievements)**
   - Interactive category filtering (All, IDT Coursework, Systems & C, Hardware & IoT, Web).
   - Detailed project records featuring Title, Year, One-line summary, Domain tags, and Verified Impact / Key Takeaways.
   - Academic honors and verified certifications grid (BGSCET IDT Showcase Award, NPTEL IIT Madras, VTU Ideathon).

5. **`contact.html` (Contact & Inquiries)**
   - Multi-channel directory (Institutional Email with one-click copy, LinkedIn, GitHub, Campus Address).
   - Minimalist contact dispatch form with instant client-side feedback.
   - Areas of open inquiry and student peer discussion.

---

## Design System Specifications

- **Background:** Off-white natural paper tone (`#F9F8F5`) with a hairline subtle texture.
- **Ink / Typography:** Deep charcoal (`#171615`) with muted secondary stone grey (`#5C5852` / `#878279`).
- **Accent:** Deep botanical slate-olive (`#3D4A3E` / `#EEF2EE`) used sparingly for active states and highlights.
- **Typography Pairing:**
  - Display & Headlines: `Newsreader` (Editorial serif)
  - Body & Microcopy: `Plus Jakarta Sans` (High-legibility sans-serif)
  - Metadata & System Tickers: `JetBrains Mono` (Monospaced data tags)
- **Zero AI Bloat:** No neon glows, no synthetic glassmorphism, no generic templates.
- **Compliant:** Fully self-contained without copyright statements.

---

## How to View Locally

Simply double-click any `.html` file (e.g., `index.html`) in Windows Explorer to open it in your browser, or serve it using any lightweight static server:

```powershell
# Using Python built-in server (optional)
python -m http.server 8000
```
Then navigate to `http://localhost:8000`.

