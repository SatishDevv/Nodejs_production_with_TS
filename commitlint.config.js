

// This configuration file is for commitlint, which is a tool that checks if your commit messages meet the conventional commit format.
// The configuration specifies the rules for commit messages, including the types of commits allowed, the case of the subject line, and the maximum line lengths for the header, body, and footer.
// The rules are defined in the "rules" object, where each rule has a severity level (2 for error, 1 for warning, 0 for off) and additional options.
// The "type-enum" rule specifies the allowed types of commits, such as "feat" for new features, "fix" for bug fixes, and "docs" for documentation changes.
// The "subject-case" rule enforces the case of the subject line, while the "header-max-length", "body-max-line-length", and "footer-max-line-length" rules enforce the maximum line lengths for the respective sections of the commit message.
// The configuration is set to use the "@commitlint/config-conventional" preset, which is a popular set of rules for conventional commits.

export default  {
  extends: ["@commitlint/cli", "@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "build", // changes affecting the build system (npm, webpack, etc.)
        "chore", // changes to the build process or auxiliary tools and libraries such as documentation generation
        "ci",   // continuous integration changes
        "docs", // documentation only changes
        "feat", // a new feature
        "improvement", // an improvement to an existing feature
        "merge", // merge branches
        "fix",  // a bug fix
        "perf", // a code change that improves performance
        "refactor", // a code change that neither fixes a bug nor adds a feature
        "revert",   // revert a previous commit
        "style",    // changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc.)
        "test", // adding missing tests or correcting existing tests
      ],
    ],
    "subject-case": [
      2,
      "never",
      ["sentence-case", "start-case", "pascal-case", "upper-case"],
    ],
    "header-max-length": [2, "always", 72],
    "body-max-line-length": [2, "always", 100],
    "footer-max-line-length": [2, "always", 100],
  },
};

