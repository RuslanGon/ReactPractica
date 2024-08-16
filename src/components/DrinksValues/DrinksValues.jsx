// drinks = {beer: 5, whiskey: 3, wine: 1}

const DrinksValues = ({drinks}) => {
  return (
    <ul>
        <li>Beer: {drinks.beer}</li>
        <li>Whiskey: {drinks.whiskey}</li>
        <li>Wino: {drinks.wine}</li>
    </ul>
  )
}

export default DrinksValues