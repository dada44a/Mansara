import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/contact", "routes/Contact.tsx"),
    route("/products", "routes/Product.tsx"),
] satisfies RouteConfig;
