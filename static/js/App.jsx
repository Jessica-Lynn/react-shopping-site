function App() {
  const [melons, setMelons] = React.useState({});

  React.useEffect(() => {
    fetch("/api/melons")
      .then((response) => response.json())
      .then((result) => {
        setMelons(result);
      });
  }, []);

  const [shoppingCart, setShoppingCart] = React.useState({});

  return (
    <ReactRouterDOM.BrowserRouter>
      <Navbar logo="/static/img/watermelon.png" brand="Ubermelon"/>
      <div className="container-fluid">
        <ReactRouterDOM.Route exact path="/">
          <Homepage />
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route exact path="/shop">
          <AllMelonsPage melons={melons} />
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route exact path="/cart">
          <ShoppingCartPage />
        </ReactRouterDOM.Route>
      </div>
    </ReactRouterDOM.BrowserRouter>
  );
}

function addMelonToCart(melonCode) {
  setShoppingCart((currentShoppingCart) => {
    const newShoppingCart = Object.assign({}, currentShoppingCart);

    // code to update cart here

    return newShoppingCart;
  })
}

ReactDOM.render(<App />, document.querySelector("#root"));
