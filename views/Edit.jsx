const React = require("react");

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div style={styles.container}>
        <header style={styles.header}>Edit Page</header>
        <body style={styles.body}>
          <form
            action={`/logs/${log._id}?_method=PUT`}
            method="POST"
            style={styles.form}
          >
            <p>
              <h1>
                Title: <input type="text" name="title" value={log.title} />
              </h1>
            </p>
            <p>
              <h1>
                Entry: <input type="textarea" name="entry" value={log.entry} />
              </h1>
            </p>
            {log.shipIsBroken ? (
              <p>
                <h1>Maintenance needed: </h1>
                <input type="checkbox" name="shipIsBroken" defaultChecked />
              </p>
            ) : (
              <p>
                Maintenance needed:{" "}
                <input type="checkbox" name="shipIsBroken" />
              </p>
            )}
            <a href={"/logs"}>
              <button style={styles.backButton}>Back</button>
            </a>
            <input
              type="submit"
              name="submit"
              value="Confirm Changes"
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
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "70%",
    background: "bisque",
    fontSize: "1rem",
    marginTop: "10%",
  },
  header: {
    fontSize: "4rem",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "lightblue",
  },
  form: {
    width: "70%",
  },
  backButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "1rem",
    marginTop: "10px",
  },
  submitButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "1rem",
    marginTop: "10px",
  },
};

module.exports = Edit;
