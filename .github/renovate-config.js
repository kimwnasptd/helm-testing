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
    "^uv run python updater.py$"
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
          "make update-date"
        ],
        fileFilters: [
          "date.info"
        ],
        executionMode: "branch"
      }
    }
  ]
};
