import logo from "./assets/images/logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main>
        <nav>
          <img src={logo} alt="Website logo"></img>
          <ul>
            <li>Home</li>
            <li>New</li>
            <li>Popular</li>
            <li>Trending</li>
            <li>Categories</li>
          </ul>
        </nav>
        <section className="title-cover">
          <h1>The Bright Future of Web 3.0?</h1>
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?{" "}
          </p>
          <button>Read more</button>
        </section>
        <section className="new-arrivals">
          <h2>New</h2>
          <article>
            <h3>Hydrogen VS Electric Cars</h3>{" "}
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </article>
          <article>
            <h3>The Downsides of AI Artistry</h3>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </article>
          <article>
            <h3>Is VC Funding Drying Up?</h3>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </article>
        </section>
        <section className="popular-articles">
          <article>
            <img></img>
            <h3>01</h3>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </article>
          <article>
            <img></img>
            <h3>02</h3>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </article>
          <article>
            <img></img>
            <h3>03</h3>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </article>
        </section>
        <footer>
          <div class="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Your Name Here</a>.
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
