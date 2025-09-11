import React from "react";
import "./App.css";
import './index.css';

const imageList = [
  "/images/Casetta-felice-1.jpg",
  "/images/Casetta-felice-12.jpg",
  "/images/Casetta-felice-73.jpg",
  "/images/Casetta-felice-29.jpg",
  "/images/Casetta-felice-54.jpg",
  "/images/Casetta-felice-55.jpg",
  "/images/Casetta-felice-80.jpg",
  "/images/Casetta-felice-85.jpg",
  "/images/Casetta-felice-106.jpg",

];

// 👉 Componente per lo sfondo
const BackgroundImage = () => (
  <div
    style={{
      backgroundImage: "url('/logoCasettaFelice.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',       // riempie tutto lo schermo su mobile
      backgroundAttachment: 'scroll',// compatibile con Safari mobile
      opacity: 0.1,
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      pointerEvents: 'none',
    }}
  />
);


const App = () => {
  return (
    <div style={{ position: 'relative' }}>
      <BackgroundImage />

      <header>
        <div style={{ fontFamily: 'Brush Script MT' }}>
          B&B Casetta Felice
        </div>
        <nav>
          <a href="#home">Home</a>
          <a href="#gallery">Galleria</a>
          <a href="#map">Dove siamo</a>
          <a href="#contact">Contatti</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="overlay">
          <div className="hero-content">
            <h1>Benvenuti a Casetta Felice</h1>
            <a href="#contact" className="btn-primary" style={{ borderRadius: '2rem' }}>Prenota ora</a>
          </div>
        </div>
      </section>

      <div className="container">
        <h2 style={{ fontFamily: 'Brush Script MT' }}>La nostra struttura</h2>
        <p className="description" style={{ fontFamily: 'Pompiere, sans-serif', fontWeight: '400', fontStyle: 'normal' }}>
          Benvenuti a Casetta Felice<br />
          Nel cuore di Rocca di Neto, lungo il corso principale del paese, Casetta Felice è una casa recentemente ristrutturata pensata per offrire comfort e tranquillità.<br /><br />
          L’appartamento, disponibile in esclusiva per gli ospiti, dispone di due camere da letto (una matrimoniale e una doppia), un’ampia cucina con soggiorno e un bagno. Gli ambienti sono spaziosi e curati, ideali per soggiorni in famiglia o tra amici.<br /><br />
          A pochi passi troverete supermercati, negozi e servizi, oltre alla fermata del pullman per Crotone. Il parcheggio privato garantisce la massima comodità.<br /><br />
          A Casetta Felice ogni ospite si gestisce in autonomia, sentendosi davvero a casa.<br />
          Siamo felici di aprire le porte della nostra casa e ci fa piacere sapere che i suoi spazi continuano a vivere attraverso le storie di chi li abita, anche solo per qualche giorno.
        </p>

        <h2 style={{ fontFamily: 'Brush Script MT' }} id="gallery">Galleria fotografica</h2>
        <div className="gallery">
          {imageList.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Casetta Felice ${index + 1}`}
              loading="lazy"
            />
          ))}
        </div>

        <h2 style={{ fontFamily: 'Brush Script MT' }} id="map">Dove siamo</h2>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1675.556516735604!2d17.008442080767825!3d39.184459713039494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1340449da370c8af%3A0x458baf58643f6dfc!2sViale%20Aldo%20Moro%2C%20122%2C%2088821%20Rocca%20di%20Neto%20KR!5e0!3m2!1sen!2sit!4v1751722370151!5m2!1sen!2sit"
            width="100%"
            height="320"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mappa B&B Casetta Felice"
          ></iframe>
        </div>

        <h2 style={{ fontFamily: 'Brush Script MT' }} id="contact">Contatti</h2>
        <form action="#" method="post">
          <input type="text" name="name" placeholder="Il tuo nome" required />
          <input type="email" name="email" placeholder="La tua email" required />
          <textarea name="message" rows="5" placeholder="Il tuo messaggio" required></textarea>
          <button type="submit">Invia</button>
        </form>
      </div>

      <footer style={{ fontFamily: 'Brush Script MT' }}>
        <div>© 2025 B&B Casetta Felice - Tutti i diritti riservati</div>
        <div style={{ marginTop: "10px" }}>
          <i>
            <a
              href="https://www.facebook.com/profile.php?id=61577070107831&sk=about"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", marginRight: "15px", textDecoration: "none" }}
            >
              Facebook
            </a>
          </i>
          <a
            href="https://www.instagram.com/casetta.felice?utm_source=ig_web_button_share_sheet&igsh=MzFqa2lyMXVjazhr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;
