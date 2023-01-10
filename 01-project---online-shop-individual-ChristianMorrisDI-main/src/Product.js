// import { checkout } from "./services/checkout"; Commented out to show that I did try use this.

const Product = ({ name, image, description, price }) => {
  const onClick = () => {
    alert("https://buy.stripe.com/test_28ocPady7eL4aly8ww");
    //checkout((Product.priceId)) Tried putting the button in its own file and still no luck"
    //please don't count these comments as excess code, they are there so I can receive feedback on what I did wrong. Thanks! :)
  };

  return (
    <div>
      {name}
      <br></br>
      <img src={image} alt={name} />
      <br></br>
      {description}
      <br></br>
      {price}
      <br></br>
      {<button onClick={onClick}>Buy now for {price}</button>}
      <br></br>
      <br></br>
    </div>
  );
};

export default Product;
