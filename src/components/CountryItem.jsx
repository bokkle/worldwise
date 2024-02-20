import styles from './CountryItem.module.css';

function CountryItem({ country }) {
  console.log(country)
  return (
    <li className={styles.countryItem} key={country.id}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
