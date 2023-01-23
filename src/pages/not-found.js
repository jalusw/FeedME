const render = async () => `
  <main id="main" tabindex="0">
    <div class="not-found">
      <h1 class="not-found-code">404</h1>
      <p class="not-found-description">We're sorry, but the page you were looking for could not be found. Please check the URL and try again.</p>
      <a class="btn btn--outline" href="/#/">
        <span class="text text--slate">
          Back To Home
        </span>
      </a>
    </div>
  </main>
`;

export default { render };
