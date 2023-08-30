import "./styles.css";

export default function App() {
  function RoleOutput() {
    const input = [
      [45, 12],
      [55, 21],
      [19, -2],
      [104, 20]
    ];
    const roles = [];
    input.forEach((a) => {
      if (a[0] >= 55 && a[1] >= 7) roles.push("Senior");
      else roles.push("Open");
    });

    console.log(roles);
  }

  function openOrSenior() {
    const data = [
      [45, 12, 3],
      [55, 21, 9],
      [19, -2, 8],
      [104, 20, 1]
    ];
    const ret = data.map(([age, handicap, num]) =>
      age > 54 && handicap > 7 && num > 0 ? "Senior" : "Open"
    );

    console.log(ret);
  }

  function openOrSenior45() {
    const data = [
      [45, 12, 3],
      [55, 21, 9],
      [19, -2, 8],
      [104, 20, 1]
    ];
    const ret = data.map(([, , num]) => (num > 3 ? "Senior" : "Open"));

    console.log(ret);
  }

  function openOrSenior1(data) {
    return data.map(function (d) {
      return d[0] >= 55 && d[1] > 7 ? "Senior" : "Open";
    });
  }

  return (
    <div className="App">
      <button style={{ width: 100, heigth: 50 }} onClick={openOrSenior}>
        {" "}
        click me{" "}
      </button>
    </div>
  );
}
