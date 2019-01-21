module.exports = {
    "extends": "airbnb",
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true
      },
      "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      },
      "settings": {
        "import/resolver": {
          "node": {
            "paths": ["src"]
          }
        },
      },
};