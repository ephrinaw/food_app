import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Quick and quality Road side kitchen!</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        Locally sourced ingrediants cooked with pro chefs just-in-time! Quality ingrediants
         are used to perect the taste.
      </p>
    </section>
  );
};

export default MealsSummary;