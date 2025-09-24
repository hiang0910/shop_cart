import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, clearCart } from "./features/cartSlice";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);

  // ✅ Danh sách sản phẩm tĩnh (ảnh đặt trong thư mục src/assets/products/)
  const products = [
    {
      id: 1,
      name: "Combo 2 áo mặc nhà bé trai",
      price: 199,
      image: "/src/assets/products/product3.webp",
    },
    {
      id: 2,
      name: "Quần mặc nhà bé gái họa tiết kẻ",
      price: 499,
      image: "/src/assets/products/product4.webp",
    },
    {
      id: 3,
      name: "Quần mặc nhà bé gái họa tiết kẻ",
      price: 299,
      image: "/src/assets/products/product5.webp",
    },
    {
      id: 4,
      name: "Áo phông bé trai",
      price: 120,
      image: "/src/assets/products/product6.webp",
    },
    {
      id: 5,
      name: "Áo body bé trai",
      price: 159,
      image: "/src/assets/products/product7.webp",
    },
  ];

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>🛒 Shopping Cart</h1>
        <div className="cart-info">Giỏ hàng: {cart.length} sp</div>
      </header>

      <main className="main">
        {/* Danh sách sản phẩm */}
        <section className="product-list">
          <h2>Sản phẩm</h2>
          <div className="grid">
            {products.map((p) => (
              <div className="card" key={p.id}>
                <img src={p.image} alt={p.name} />
                <h3>{p.name}</h3>
                <p>{p.price} $</p>
                <button onClick={() => dispatch(addToCart(p))}>
                  Thêm vào giỏ
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Giỏ hàng */}
        <section className="cart">
          <h2>Giỏ hàng</h2>
          {cart.length === 0 ? (
            <p>Chưa có sản phẩm nào.</p>
          ) : (
            <>
              <ul>
                {cart.map((c) => (
                  <li key={c.id}>
                    {c.name} - {c.price} $
                    <button
                      onClick={() => dispatch(removeFromCart(c.id))}
                      className="remove-btn"
                    >
                      Xóa
                    </button>
                  </li>
                ))}
              </ul>
              <p>
                <b>Tổng tiền: {total} $</b>
              </p>
              <button onClick={() => dispatch(clearCart())}>Xóa hết</button>
            </>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Shopping Cart Demo - Made with React + Redux</p>
      </footer>
    </div>
  );
}

export default App;
