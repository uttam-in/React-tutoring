import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("forms", "routes/form-handling.tsx"),
] satisfies RouteConfig;
