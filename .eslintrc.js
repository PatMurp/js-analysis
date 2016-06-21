module.exports = {
  "env": {
    "node": true
  },
  "rules": {
    // enforce consistent spacing inside array brackets
    "array-bracket-spacing": [2, "never"],
    // enforce the use of variables within the scope they are defined
    "block-scoped-var": 2,
    // enforce consistent brace style for blocks
    "brace-style": [2, "1tbs"],
    // enforce camelcase naming convention
    "camelcase": 1,
    // enforce consistent spacing inside computed property brackets
    "computed-property-spacing": [2, "never"],
    // enforce consistent brace style for all control statements
    "curly": 2,
    // enforce at least one newline at the end of files
    "eol-last": 2,
    // require the use of === and !==
    "eqeqeq": [2, "smart"],
    // enforce a maximum depth that blocks can be nested
    "max-depth": [1, 3],
    // enforce a maximum line length
    "max-len": [1, 80],
    // enforce a maximum number of statements allowed in function blocks
    "max-statements": [1, 15],
    // require constructor function names to begin with a capital letter
    "new-cap": 1,
    // disallow extending native types
    "no-extend-native": 2,
    // disallow mixed spaces and tabs for indentation
    "no-mixed-spaces-and-tabs": 2,
    // disallow trailing whitespace at the end of lines
    "no-trailing-spaces": 2,
    // disallow unused variables
    "no-unused-vars": 1,
    // disallow the use of variables before they are defined
    "no-use-before-define": [2, "nofunc"],
    // enforce consistent spacing inside braces
    "object-curly-spacing": [2, "never"],
    // enforce the consistent use of either backticks, double, or single quotes
    "quotes": [2, "single", "avoid-escape"],
    // require semicolons instead of ASI
    "semi": [2, "always"],
    // enforce consistent spacing before and after keywords
    "keyword-spacing": [2, {"before": true, "after": true}],
    // enforce consistent spacing before or after unary operators
    "space-unary-ops": 2,

    // disallow use of eval()
    'no-eval': 2,
    // require use strict globally
    'strict': [2, 'global'],
    // specify the maximum cyclomatic complexity allowed in a program
    'complexity': [2, 10]
  }
};