const Button = (props) => {
  const { onClickChangeRace, race } = props;
  return (
    <button type="button" id={race} onClick={() => onClickChangeRace(race)}>
      {race}
    </button>
  );
};

export default Button;
