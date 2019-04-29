class App extends React.Component {
  render() {
    const fruits = ["🍒","🍑", "🍇"];

    let fruit1 = fruits[Math.floor(Math.random()* fruits.length)];
    let fruit2 = fruits[Math.floor(Math.random()* fruits.length)];
    let fruit3 = fruits[Math.floor(Math.random()* fruits.length)];

    return (
    <div>
      <h1 className="Slot__title">SLOT MACHINE</h1>
      <Slot 
      fruit1 = {fruit1}
      fruit2 = {fruit2}
      fruit3 = {fruit3}
      />
      <Slot 
      fruit1 = {fruit2}
      fruit2 = {fruit3}
      fruit3 = {fruit1}
      />
      <Slot
      fruit1 = {fruit3}
      fruit2 = {fruit1}
      fruit3 = {fruit2}
      />
    </div>
    )
  }
} 

ReactDOM.render(<App/>, document.getElementById("root"));