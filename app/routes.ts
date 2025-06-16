import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/features", "routes/features.tsx"),
  route("/features/master", "routes/feature/feature-master.tsx"),
  route("/features/auth", "routes/feature/feature-auth.tsx"),
  route("/features/reports", "routes/feature/feature-report.tsx"),
  route("/features/feature", "routes/feature/feature-features.tsx"),
  route("/demo", "routes/demo.tsx"),
  route("/contact", "routes/contact.tsx"),
  route("/prism-sfa-policy/", "routes/privacy-policy.tsx"),
] satisfies RouteConfig;
