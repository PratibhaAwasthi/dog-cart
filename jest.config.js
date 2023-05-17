module.exports = {
  // Other Jest configuration options...
  transform: {
    // Match CSS files and transform them using css-jest
    "^.+\\.css$": "jest-css-modules-transform",
    // Include other transform options if needed
  },
};
