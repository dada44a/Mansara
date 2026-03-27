import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/contact", "routes/Contact.tsx"),
    route("/products", "routes/Product.tsx"),
    route("/products/:id", "routes/ProductDetail.tsx"),
    route("/cart", "routes/Cart.tsx"),
    route("/checkout", "routes/Checkout.tsx"),
    route("/todos", "routes/Todos.tsx"),
] satisfies RouteConfig;
