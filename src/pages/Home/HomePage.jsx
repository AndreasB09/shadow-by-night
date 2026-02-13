import './HomePage.css';

function HomePage() {
    return (
      <div className="homepage">
        <header className="homepage-header">
          <h1>Shadow by Night</h1>
        </header>
        <section className="intro">
          <p>
            Time has forgotten how to move. This was once a city of stability, a
            domain others looked to when their own faltered. The nights
            continue. Titles are honored. Elysium is held beneath careful light.
            Neon flickers over streets that empty too early. But something
            essential has stalled. Authority no longer advances. Decisions are
            delayed until they no longer matter. Rivalries simmer instead of
            burn. The Tower remains in control, yet it cannot move forward.
          </p>
          <p>
            At the heart stands the Prince. The title remains but the throne
            hangs on a wall. He is present, yet absent. He no longer speaks. He
            no longer moves. The city has adjusted itself around that stillness.
            Power has become an exhibition. Revered. Untouchable. Unmovable. A
            work of art no one dares to question, and no one can compel to act.
          </p>
          <p>The symbol remains.</p>
          <p>And that is the problem.</p>
          <p>
            The Regent speaks in place of the crown and calls it continuity.
            Others call it stability and continue their quiet consolidations.
            Some have already adapted. They remember past upheavals and know how
            to thrive when institutions rot. Beyond the court, the Movement
            gathers the restless, and the Thin-Blooded slip through the cracks.
          </p>
          <p>
            Endless debate has replaced action. Everyone agrees the city
            endures. No one agrees it survives. And the longer nothing changes,
            the greater the spark when it does.
          </p>
        </section>
        <p>
          <a href="/clan#npc-name" className="npc-link">
            Check out this character
          </a>
        </p>
      </div>
    );
}

export default HomePage;