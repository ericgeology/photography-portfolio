'use client';
import { useState } from 'react';

const works = [
  { title: 'Cloud Ridge', category: 'Landscape', place: 'Zhejiang, 2025', image: 'https://images.unsplash.com/photo-1464278533981-50106e6176b1?auto=format&fit=crop&w=1800&q=88' },
  { title: 'Last Train', category: 'Travel', place: 'Kyoto, 2024', image: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1400&q=88' },
  { title: 'After Rain', category: 'Street', place: 'Shanghai, 2025', image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=88' },
  { title: 'Between Words', category: 'Portrait', place: 'Hangzhou, 2024', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=88' },
  { title: 'Quiet Current', category: 'Landscape', place: 'Sichuan, 2023', image: 'https://images.unsplash.com/photo-1439853949127-fa647821eba0?auto=format&fit=crop&w=1400&q=88' },
  { title: 'Summer Window', category: 'Travel', place: 'Dali, 2023', image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1400&q=88' },
];
const categories = ['All', 'Landscape', 'Travel', 'Street', 'Portrait'];

export default function Home() {
  const [filter, setFilter] = useState('All');
  const [menuOpen, setMenuOpen] = useState(false);
  const visibleWorks = filter === 'All' ? works : works.filter((work) => work.category === filter);
  return <main>
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Go to home">XINGXING GAO <span>PHOTOGRAPHY</span></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle menu"><span /><span /></button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        {['Home', 'Portfolio', 'Stories', 'About', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
      </nav>
    </header>
    <section id="home" className="hero">
      <div className="hero-shade" /><div className="hero-copy"><p className="eyebrow light">Mountain · City · Human</p><h1>Chasing quiet<br />between moments.</h1><a className="text-link light-link" href="#portfolio">View selected work <span>↘</span></a></div>
      <p className="hero-index">01 / 06</p><p className="hero-location">Taizijian, Zhejiang<br />30.2055° N, 119.3735° E</p>
    </section>
    <section id="portfolio" className="section portfolio-section">
      <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Portfolio</h2></div><p className="section-note">A collection of landscapes, journeys, streets<br />and the people encountered along the way.</p></div>
      <div className="filters" role="group" aria-label="Filter portfolio">{categories.map((category) => <button key={category} className={filter === category ? 'active' : ''} onClick={() => setFilter(category)}>{category}</button>)}</div>
      <div className="work-grid">{visibleWorks.map((work, index) => <article className={`work-card card-${index % 4}`} key={work.title}><div className="work-image"><img src={work.image} alt={`${work.title}, ${work.category} photograph`} /></div><div className="work-meta"><h3>{work.title}</h3><p>{work.category} · {work.place}</p></div></article>)}</div>
    </section>
    <section id="stories" className="story-section">
      <div className="story-image" role="img" aria-label="Misty mountain trail at Taizijian" /><div className="story-copy"><p className="eyebrow light">Featured story · 01</p><h2>Into the Mist<br />of Taizijian</h2><p>Before sunrise, the mountain disappeared into cloud. We kept climbing—not toward a view, but into a landscape reduced to breath, stone and silence.</p><div className="story-facts"><span>12 photographs</span><span>6 min read</span><span>Spring 2025</span></div><a className="text-link light-link" href="#contact">Read the story <span>→</span></a></div>
    </section>
    <section id="about" className="section about-section">
      <div><p className="eyebrow">About</p><h2>Finding stillness<br />in a moving world.</h2></div><div className="about-copy"><p className="lead">I’m Xingxing, an independent photographer drawn to mountain weather, unfamiliar streets and honest human moments.</p><p>This site is a growing visual notebook—part archive, part travel journal. I photograph to remember not only how a place looked, but how it felt to stand there.</p><p className="signature">Xingxing Gao</p></div>
    </section>
    <footer id="contact"><p className="eyebrow light">Contact</p><h2>Let’s make something<br />worth remembering.</h2><a className="email" href="mailto:hello@example.com">hello@example.com <span>↗</span></a><div className="footer-bottom"><p>© 2026 Xingxing Gao</p><div><a href="#">Instagram</a><a href="#">Unsplash</a><a href="#home">Back to top ↑</a></div></div></footer>
  </main>;
}
