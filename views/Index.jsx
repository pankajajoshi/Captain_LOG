const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.heading}>Welcome to Captain's Log</h1>
          <h2>Index Page</h2>
          <nav>
            <a href="/logs/new" style={styles.addButton}>
              Add a New Log
            </a>
          </nav>
        </header>
        <div style={styles.body}>
          <ul style={styles.list}>
            {logs.map((log, i) => {
              return (
                <li key={i} style={styles.listItem}>
                  <a href={`/logs/${log._id}`} style={styles.link}>
                    {log.title}
                  </a>
                  <a href={`/logs/${log._id}`} style={styles.detailsButton}>
                    Details
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
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
    minHeight: "100vh",
    background: "lightblue",
    fontSize: "2rem",
  },
  header: {
    background: "orange",
    padding: "20px",
  },
  heading: {
    margin: "0",
    fontSize: "5rem",
    color: "blue",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "#333",
    marginRight: "10px",
  },
  list: {
    listStyle: "none",
    padding: "0",
  },
  listItem: {
    marginBottom: "10px",
  },
  addButton: {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "18px",
    textAlign: "center",
    margin: "0 auto",
  },
  detailsButton: {
    display: "inline-block",
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "4px",
    textDecoration: "none",
    fontSize: "14px",
    marginLeft: "10px",
  },
};

module.exports = Index;
