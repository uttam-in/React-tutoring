import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("forms", "routes/form-handling.tsx"),
  route("bootstrap", "routes/bootstrap-from.tsx"),
  route("dashboard", "routes/bootstrap-dashboard.tsx"),
  route("posts", "routes/posts.tsx"),
] satisfies RouteConfig;
