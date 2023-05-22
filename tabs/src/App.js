import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Tabs</h1>
      <div>
        <button>HTML</button>
        <button>CSS</button>
        <button>JavaScript</button>
      </div>
      <div>
        <p>
          HyperText Markup Language (HTML) is the basic scripting language used
          by web browsers to render pages on the world wide web. HyperText
          allows a user to click a link and be redirected to a new page
          referenced by that link.
        </p>
        <p>
          Cascading Style Sheets (CSS) is a stylesheet language used to describe
          the presentation of a document written in HTML or XML (including XML
          dialects such as SVG, MathML or XHTML). CSS describes how elements
          should be rendered on screen, on paper, in speech, or on other media.
        </p>
        <p>
          JavaScript is a cross-platform, object-oriented scripting language
          used to make webpages interactive (e.g., having complex animations,
          clickable buttons, popup menus, etc.). There are also more advanced
          server side versions of JavaScript such as Node.
        </p>
      </div>
    </div>
  );
}

export default App;
