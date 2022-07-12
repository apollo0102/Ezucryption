const config = {
  environment: "local",
  local: {
    API_URL: "http://3.133.86.244:3000/",
  },
  env: (): any => {
    return config.local;
  },
};

export default config;
