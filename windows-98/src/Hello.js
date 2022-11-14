function Hello() {
  return (
    <div className="Hello">
      <div className="window">
        <div className="title-bar">
          <div className="title-bar-text">
            My First VB4 Program
          </div>

          <div className="title-bar-controls">
            <button aria-label="Minimize"></button>
            <button aria-label="Maximize"></button>
            <button aria-label="Close"></button>
          </div>
        </div>
        <div className="window-body">
          <p>Hello, world!</p>
          <section className="field-row">
            <button>OK</button>
            <button>Cancel</button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Hello;