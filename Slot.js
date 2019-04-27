
class Slot extends React.Component {
  render() {
    const {fruit1, fruit2, fruit3} = this.props;
    const winner = (fruit1===fruit2) && (fruit2===fruit3);

    return (
      <div>
        <p>{fruit1}{fruit2}{fruit3}</p>
        <p>{winner ? "Winner!(^_-)/":"Loser (;_;)"}</p>
      </div>
    )
  }
} 