import { SingletonRouter } from "next/router";

const handleRedirection = (Router: SingletonRouter, route: string) => {
  Router.push(route);
};

export default handleRedirection;
