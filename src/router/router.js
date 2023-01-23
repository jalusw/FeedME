import routes from "./routes";

const extractPath = () => window.location.hash.slice(1);

const extractRoute = (path) => {
  /* eslint-disable-next-line no-unused-vars */
  const [_, resource, argument, verb] = path.split("/");
  // prettier-ignore
  return `/${resource || ""}${argument ? "/:parameter" : ""}${ verb ? "/verb" : "" }`;
};

const extractArgument = (path) => path.split("/")[2];

const getPage = (route) => routes[route] || routes[404];

const renderPage = async (page, argument) => {
  const appWrapper = document.getElementById("app-wrapper");
  appWrapper.innerHTML = await page.render();
  await page?.postRender(argument);
};

const handleRoute = async () => {
  const path = extractPath();
  const route = extractRoute(path);
  const page = getPage(route);
  const argument = extractArgument(path);
  renderPage(page, argument);
};

export default handleRoute;
