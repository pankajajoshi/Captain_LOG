const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1>New Page</h1>
        </header>
        <body>
          <form action="/logs" method="POST" style={styles.form}>
            <label>
              <h2>Title:</h2>
            </label>
            <input type="text" name="title" style={styles.input} /> <br />
            <label>
              <h2>Entry:</h2>
            </label>
            <textarea name="entry" style={styles.input} /> <br />
            <label>
              <input
                type="checkbox"
                name="shipIsBroken"
                style={styles.checkbox}
              />{" "}
              <h2>shipIsBroken</h2>
            </label>{" "}
            <br />
            <input
              type="submit"
              name="submit"
              value="Submit"
              style={styles.submitButton}
            />
          </form>
        </body>
      </div>
    );
  }
}

const styles = {
  container: {
    background: "lightblue",
  },
  header: {
    padding: "20px",
    background: "#f2f2f2",
    fontSize: "2rem",
  },
  form: {
    padding: "20px",
  },
  body: {
    alignItems: "center",
    marginTop: "200px",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  checkbox: {
    marginRight: "5px",
  },
  submitButton: {
    backgroundColor: "green",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  },
};

module.exports = New;
