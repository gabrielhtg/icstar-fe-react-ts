module.exports = {
  apps: [
    {
      script: "yarn start",
    },
  ],

  deploy: {
    production: {
      user: "root",
      host: "146.190.88.113",
      ref: "origin/main",
      repo: "git@github.com:gabrielhtg/icstar-fe-react-ts.git",
      path: "/root/icstar/frontend/",
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && npm install && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
  },
};
