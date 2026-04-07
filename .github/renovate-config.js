module.exports = {
  // Global settings
  endpoint: "https://api.github.com/",
  repositories: ["kimwnasptd/helm-testing"],
  onboarding: false,
  prHourlyLimit: 0,
  prConcurrentLimit: 0,

  enabledManagers: [
    "helmv3"
  ],

  allowScripts: true,
  allowedCommands: [
    "^make update-date$",
    "^uv run python updater.py$",
    "^uvx cowsay$"
  ],

  // PR Settings
  packageRules: [
    {
      matchManagers: ["helmv3"],
      matchPaths: ["charts/my-app/**"],
      enabled: true
    },
    {
      postUpgradeTasks: {
        commands: [
          "make update-date",
          "make hello",
        ],
        fileFilters: [
          "date.info"
        ],
        executionMode: "branch"
      }
    }
  ]
};
