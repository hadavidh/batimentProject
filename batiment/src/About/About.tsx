import "./About.css";

export default function About() {
  return (
    <main className="about">
      {/* HERO */}
      <header className="about__hero">
        <div className="about__container">
          <div className="about__heroGrid">
            <div className="about__heroLeft">
              <div className="about__kicker">
                <span className="about__dot" aria-hidden="true" />
                Artisans & professionnels du bâtiment
              </div>

              <h1 className="about__title">BÂTIMENT NOVA</h1>
              <p className="about__subtitle">
                Plomberie • Chauffage • Rénovation • Dépannage • Travaux intérieurs
              </p>

              <div className="about__badges">
                <span className="about__badge">Plombier</span>
                <span className="about__badge">Chauffagiste</span>
                <span className="about__badge">Rénovation</span>
                <span className="about__badge">Dépannage 7j/7</span>
              </div>

              <div className="about__cta">
                <a className="about__btn about__btn--primary" href="/contact">
                  Demander un devis
                </a>
                <a className="about__btn about__btn--ghost" href="#services">
                  Voir nos services
                </a>
              </div>

              <div className="about__stats">
                <div className="about__stat">
                  <span className="about__statNum">+10</span>
                  <span className="about__statLabel">ans d’expérience (fictif)</span>
                </div>
                <div className="about__stat">
                  <span className="about__statNum">24–48h</span>
                  <span className="about__statLabel">délais d’intervention</span>
                </div>
                <div className="about__stat">
                  <span className="about__statNum">100%</span>
                  <span className="about__statLabel">devis détaillé</span>
                </div>
              </div>
            </div>

            <div className="about__heroRight" aria-hidden="true">
              {/* Carte visuelle (remplace le logo maison) */}
              <div className="about__heroCard">
                <div className="about__heroCardTop">
                  <div className="about__pill">Interventions</div>
                  <div className="about__pill about__pill--alt">Qualité</div>
                </div>

                <div className="about__heroIcons">
                  <div className="about__iconBox">
                    <span className="about__icon">🔧</span>
                    <span className="about__iconLabel">Plomberie</span>
                  </div>
                  <div className="about__iconBox">
                    <span className="about__icon">🔥</span>
                    <span className="about__iconLabel">Chauffage</span>
                  </div>
                  <div className="about__iconBox">
                    <span className="about__icon">🚿</span>
                    <span className="about__iconLabel">Salle de bain</span>
                  </div>
                  <div className="about__iconBox">
                    <span className="about__icon">🧰</span>
                    <span className="about__iconLabel">Dépannage</span>
                  </div>
                </div>

                <div className="about__heroNote">
                  <div className="about__heroNoteLine" />
                  <p className="about__muted">
                    Entreprise fictive — page “About” pour projet React.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QUI SOMMES-NOUS */}
      <section className="about__section">
        <div className="about__container">
          <div className="about__grid">
            <article className="about__card">
              <h2 className="about__h2">Qui sommes-nous ?</h2>
              <p className="about__p">
                <strong>Bâtiment Nova</strong> est une entreprise (fictive) d’artisans
                spécialisés en <strong>plomberie</strong> et <strong>chauffage</strong>,
                avec une approche professionnelle : diagnostic clair, intervention propre,
                finitions soignées.
              </p>
              <p className="about__p">
                Nous intervenons aussi sur la <strong>rénovation intérieure</strong> :
                salle de bain, cuisine, réseaux d’eau, radiateurs, chauffe-eau,
                entretien et mises aux normes.
              </p>

              <ul className="about__bullets">
                <li>Conseil & diagnostic avant travaux</li>
                <li>Devis transparent, sans surprise</li>
                <li>Travail propre + protection du chantier</li>
                <li>Suivi & SAV sérieux</li>
              </ul>
            </article>

            <aside className="about__card about__card--info">
              <h2 className="about__h2">Informations</h2>

              <div className="about__infoList">
                <div className="about__infoRow">
                  <span className="about__label">Entreprise</span>
                  <span className="about__value">Bâtiment Nova (fictif)</span>
                </div>
                <div className="about__infoRow">
                  <span className="about__label">Zone</span>
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
                  <span className="about__value">Lun–Sam • 8h–19h</span>
                </div>
              </div>

              <div className="about__chips">
                <span className="about__chip">Intervention rapide</span>
                <span className="about__chip">Travail garanti</span>
                <span className="about__chip">Matériaux pro</span>
                <span className="about__chip">Finitions</span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="about__section about__section--alt" id="services">
        <div className="about__container">
          <div className="about__sectionHead">
            <h2 className="about__h2">Nos services</h2>
            <p className="about__p about__muted">
              Des prestations adaptées aux particuliers et aux professionnels (fictif).
            </p>
          </div>

          <div className="about__cards">
            <article className="about__serviceCard">
              <div className="about__serviceIcon">🔧</div>
              <h3 className="about__h3">Plomberie</h3>
              <p className="about__p">
                Fuites, robinetterie, WC, évacuations, réseaux d’eau, remplacement de
                chauffe-eau.
              </p>
              <ul className="about__miniList">
                <li>Recherche de fuite</li>
                <li>Remplacement joints/mitigeurs</li>
                <li>Création/extension réseau</li>
              </ul>
            </article>

            <article className="about__serviceCard">
              <div className="about__serviceIcon">🔥</div>
              <h3 className="about__h3">Chauffage / Chauffagiste</h3>
              <p className="about__p">
                Entretien, dépannage, radiateurs, purge, équilibrage, installation et
                mise en service.
              </p>
              <ul className="about__miniList">
                <li>Diagnostic chauffage</li>
                <li>Remplacement radiateurs</li>
                <li>Optimisation performance</li>
              </ul>
            </article>

            <article className="about__serviceCard">
              <div className="about__serviceIcon">🚿</div>
              <h3 className="about__h3">Rénovation salle de bain</h3>
              <p className="about__p">
                Création/modernisation : douche, baignoire, meuble vasque, faïence,
                étanchéité, finitions.
              </p>
              <ul className="about__miniList">
                <li>Conception & préparation</li>
                <li>Pose & raccordements</li>
                <li>Finitions propres</li>
              </ul>
            </article>

            <article className="about__serviceCard">
              <div className="about__serviceIcon">🧰</div>
              <h3 className="about__h3">Dépannage</h3>
              <p className="about__p">
                Intervention rapide selon urgence : fuite, chauffe-eau en panne,
                robinet cassé, problème de pression.
              </p>
              <ul className="about__miniList">
                <li>Disponibilité 7j/7 (fictif)</li>
                <li>Solutions temporaires + durables</li>
                <li>Compte rendu après passage</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="about__footer">
        <div className="about__container about__footerRow">
          <p className="about__footerText">
            © {new Date().getFullYear()} Bâtiment Nova — contenu fictif.
          </p>
          <a className="about__footerLink" href="/contact">
            Contact / devis
          </a>
        </div>
      </footer>
    </main>
  );
}
