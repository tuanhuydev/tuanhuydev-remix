import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/StandardLayout.tsx", [
    index("routes/Home.tsx"),
    route("privacy", "routes/Privacy.tsx"),
  ]),

  // Add new routes here
] satisfies RouteConfig;
