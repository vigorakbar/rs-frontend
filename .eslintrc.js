module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true,
        "jest": true,
      },
      "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/forbid-prop-types": 0,
        "react/require-default-props": 0
      },
      "settings": {
        "import/resolver": {
          "node": {
            "paths": ["src"]
          }
        },
        "import/no-extraneous-dependencies": ["error", {"devDependencies": true}]
      },
    "parser": "babel-eslint",
    "plugins": [
      "react",
      "jest",
    ]
};