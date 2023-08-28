const React = require("react");

function New() {
  return (
    <form action="/logs" method="POST">
      LOG Title :<input type="text" name="title" placeholder="Title" />
      Entry:<textarea name="entry" placeholder="Entry"></textarea>
      <label>
        Ship is Broken: <input type="checkbox" name="shipIsBroken" />
      </label>
      <input type="submit" value="Create Log" />
    </form>
  );
}

module.exports = New;
