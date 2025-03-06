import type { Route } from "./+types/Privacy";

export function meta({}: Route.MetaArgs) {
  return [{ title: "tuanhuydev" }, { name: "description", content: "Privacy" }];
}

export default function Privacy() {
  return <>Privacy</>;
}
