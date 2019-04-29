
class Slot extends React.Component {
  render() {
    const {fruit1, fruit2, fruit3} = this.props;
    const winner = (fruit1===fruit2) && (fruit2===fruit3);
    const styles = {fontSize: "50px", backgroundColor: "purple", maxWidth: "100%", textAlign: "center", border: "4px solid #3ec4dd", borderRadius: "5px",margin: "0 30%", padding: "2%"}

    return (
      <div className="Slot">
        <p style={styles}>
        {fruit1}{fruit2}{fruit3}
        </p>
        <p className={winner ? "Slot__winner" : "Slot__loser"}>{winner ? "Winner!(^_-)/":"Loser (;_;)"}</p>
      </div>
    )
  }
} 