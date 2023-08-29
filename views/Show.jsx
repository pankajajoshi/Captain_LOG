const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <div>
        <header style={styles.header}>
          <h1>Show Page</h1>
        </header>
        <body style={styles.body}>
          <p>Title: {log.title}</p>
          <p>Entry: {log.entry}</p>
          <p>
            Maintenance needed:{" "}
            {log.shipIsBroken
              ? "Ship requires maintenance"
              : "Ship is running smoothly, no maintenance required"}
          </p>

          <div style={styles.formContainer}>
            <a href={`/logs/${log._id}/edit`} style={styles.editLink}>
              <button style={styles.editButton}>Edit</button>
            </a>
            <form
              action={`/logs/${log._id}?_method=DELETE`}
              method="POST"
              style={styles.deleteForm}
            >
              <input type="submit" value="Delete" style={styles.deleteButton} />
            </form>
          </div>
        </body>
      </div>
    );
  }
}

const styles = {
  header: {
    padding: "20px",
    background: "biege",
    fontSize: "3rem",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    background: "biege",
    fontSize: "2rem",
    backgroundColor: "lightcoral",
  },
  formContainer: {
    margin: "20px",
  },
  editLink: {
    textDecoration: "none",
  },
  editButton: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
    marginRight: "10px",
  },
  deleteForm: {
    display: "inline-block",
  },
  deleteButton: {
    backgroundColor: "red",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    border: "none",
    cursor: "pointer",
  },
};

module.exports = Show;
