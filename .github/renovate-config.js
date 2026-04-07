module.exports = {
  allowScripts: true,
  allowedCommands: [
    "^make update-date$",
    "^uv run python updater.py$"
  ],
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
