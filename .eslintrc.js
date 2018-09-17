module.exports = {
  extends: [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  plugins: [
    "prettier"
  ],
  parser: "babel-eslint",
  globals: {
    window: false,
    document: false
  },
  rules: {
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true
      }
    ],

    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/destructuring-assignment": "off",
    "react/jsx-filename-extension": [
      "error",
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],

    "jsx-a11y/label-has-for": "off",
    // This rule currently has a bug
    "jsx-a11y/label-has-associated-control": "off",
    "jsx-a11y/accessible-emoji": "off",
  }
};
