import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/features", "routes/features.tsx"),
  route("/demo", "routes/demo.tsx"),
  route("/contact", "routes/contact.tsx"),
] satisfies RouteConfig;
