import "./About.css";

export default function About() {
  return (
    <main className="about">
      {/* Hero */}
      <header className="about__hero">
        <div className="about__heroInner">
          <div className="about__brand">
            {/* Logo SVG inline (pas besoin de fichier image) */}
            <div className="about__logo" aria-hidden="true">
              <svg viewBox="0 0 64 64" role="img">
                <path d="M10 28 L32 12 L54 28 V54 H10 Z" />
                <path d="M22 54 V34 H42 V54" className="about__logoDoor" />
                <path d="M16 28 L32 18 L48 28" className="about__logoRoof" />
              </svg>
            </div>

            <div className="about__brandText">
              <h1 className="about__title">BÂTIMENT NOVA</h1>
              <p className="about__subtitle">
                Construction • Rénovation • Gros œuvre • Finitions
              </p>
            </div>
          </div>

          <div className="about__cta">
            <a className="about__btn about__btn--primary" href="/contact">
              Demander un devis
            </a>
            <a className="about__btn about__btn--ghost" href="#missions">
              Voir nos missions
            </a>
          </div>
        </div>
      </header>

      {/* Content grid */}
      <section className="about__section">
        <div className="about__grid">
          {/* Card: Who we are */}
          <article className="about__card">
            <h2 className="about__h2">Qui sommes-nous ?</h2>
            <p className="about__p">
              <strong>Bâtiment Nova</strong> est une entreprise fictive spécialisée
              dans la construction et la rénovation, avec une approche orientée qualité,
              sécurité et respect des délais.
            </p>
            <p className="about__p">
              Notre équipe réunit des profils complémentaires (maçonnerie, second œuvre,
              coordination de chantier) pour livrer des projets propres, durables et
              conformes aux normes.
            </p>

            <ul className="about__bullets">
              <li>Devis clair & détaillé</li>
              <li>Suivi de chantier structuré</li>
              <li>Matériaux sélectionnés</li>
              <li>Garantie & conformité</li>
            </ul>
          </article>

          {/* Card: Company info */}
          <aside className="about__card about__card--info">
            <h2 className="about__h2">Informations</h2>

            <div className="about__infoList">
              <div className="about__infoRow">
                <span className="about__label">Raison sociale</span>
                <span className="about__value">Bâtiment Nova (fictif)</span>
              </div>
              <div className="about__infoRow">
                <span className="about__label">Zone d’intervention</span>
                <span className="about__value">Île-de-France & alentours</span>
              </div>
              <div className="about__infoRow">
                <span className="about__label">Téléphone</span>
                <span className="about__value">+33 1 70 00 00 00</span>
              </div>
              <div className="about__infoRow">
                <span className="about__label">Email</span>
                <span className="about__value">contact@batiment-nova.fr</span>
              </div>
              <div className="about__infoRow">
                <span className="about__label">Horaires</span>
                <span className="about__value">Lun–Ven • 8h–18h</span>
              </div>
            </div>

            <div className="about__badges">
              <span className="about__badge">Sécurité chantier</span>
              <span className="about__badge">Qualité</span>
              <span className="about__badge">Délais</span>
              <span className="about__badge">Transparence</span>
            </div>
          </aside>
        </div>
      </section>

      {/* Missions */}
      <section className="about__section about__section--alt" id="missions">
        <div className="about__sectionHead">
          <h2 className="about__h2">Nos missions (fictives)</h2>
          <p className="about__p about__muted">
            Exemple de prestations typiques pour une entreprise de bâtiment.
          </p>
        </div>

        <div className="about__cards">
          <article className="about__missionCard">
            <div className="about__icon">🏗️</div>
            <h3 className="about__h3">Gros œuvre</h3>
            <p className="about__p">
              Fondations, dalles, murs porteurs, ouvertures, renforts structurels.
            </p>
          </article>

          <article className="about__missionCard">
            <div className="about__icon">🧱</div>
            <h3 className="about__h3">Rénovation</h3>
            <p className="about__p">
              Remise à neuf d’appartements/maisons, optimisation d’espace, modernisation.
            </p>
          </article>

          <article className="about__missionCard">
            <div className="about__icon">🛠️</div>
            <h3 className="about__h3">Second œuvre</h3>
            <p className="about__p">
              Placo, isolation, plomberie, électricité, menuiserie, sols & peinture.
            </p>
          </article>

          <article className="about__missionCard">
            <div className="about__icon">📐</div>
            <h3 className="about__h3">Gestion de chantier</h3>
            <p className="about__p">
              Planning, coordination, contrôle qualité, compte-rendus et réception.
            </p>
          </article>
        </div>
      </section>

      {/* Footer mini */}
      <footer className="about__footer">
        <p className="about__footerText">
          © {new Date().getFullYear()} Bâtiment Nova — page fictive pour projet React.
        </p>
      </footer>
    </main>
  );
}
