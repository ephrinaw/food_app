import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Quick and quality Road side kitchen!</h2>
      <p>
      Welcome to our roadside kitchen, where we pride ourselves on using fresh, 
      local ingredients to bring you delicious meals and snacks on the go. 
      Our menu features a variety of sandwiches, burgers, and other casual fare made with
      ingredients sourced from local farms and producers. We believe in supporting our community
      and showcasing the abundance of tasty, high-quality products that our region has to offer.
      Our burgers are made with locally raised, grass-fed beef, topped with crisp, garden-grown 
      vegetables and served on a freshly baked bun.
      Whether you're just passing through or a regular
      member of the community, we hope you'll stop by and enjoy a meal with us. 
      Thank you for supporting local businesses like ours!
      </p>
    </section>
  );
};

export default MealsSummary;