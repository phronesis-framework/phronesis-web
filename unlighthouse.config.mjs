/** @type {import('unlighthouse/config').UserConfig} */
const config = {
  // Point directly at the default-locale page so we don't include the
  // root-to-locale 307 redirect or the trailing-slash 308 redirect in the
  // performance budget.
  site: "http://localhost:3000/en",
  scanner: {
    urls: ["/en"],
    samples: 1,
    device: "mobile",
    throttle: true,
  },
  puppeteerOptions: {
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
  },
  ci: {
    budget: {
      performance: 95,
      accessibility: 100,
      "best-practices": 95,
      seo: 95,
    },
  },
};

export default config;
