import "../styles/Fonts.css";
import "../styles/Reset.css";
import "../styles/Cart.css";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Cart() {
  // const dispacth = useDispatch();
  const History = useHistory();
  const { carts } = useSelector((state) => state.productReducer);

  // const params = useParams();

  // useEffect(() => {
  //   dispatchEvent(findProduct(params.id));
  // }, []);

  return (
    <div className="container">
      <div className="d-flex justify-content-between align-items-center topBar">
        <div className="flex-grow-1 headerLeft">
          <h3>Your Shop Name</h3>
        </div>
        <div className="flex-shrink-0 headerRight">
          <div className="input-group">
            <input placeholder="search" className="form-control shadow-none border-0 border-bottom" />
            <button type="button" className="btn btn-default">
              <i className="fas fa-search fa-fw"></i>
            </button>
          </div>
          <a className="goBack" href="#" onClick={() => History.goBack()}>
            <p>GO BACK</p>
          </a>
        </div>
      </div>
      <div className="mainContainer">
        {carts.length ? (
          carts.map((product, id) => {
            return (
              <div className="card mb-2" key={id}>
                <div className="d-flex justify-content-start align-items-start">
                  <div className="me-3">
                    <img src={product?.image ? product.image : "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"} alt="" width="175vw" className="card-img-left"></img>
                  </div>
                  <div className="card-body">
                    <div className="color mb-2">warna : {product.color}</div>
                    <div className="productName mb-2">nama item :{product.name}</div>
                    <div className="price mb-2">harga :{product.price}</div>
                    <div className="mb-2">
                      Qty :
                      <input className="price " value={product.qty} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <h4 className="warn">Cart Masih Kosong</h4>
        )}
      </div>
      <button class="btn btn-primary">check out</button>
      <Footer />
    </div>
  );
}

export default Cart;
