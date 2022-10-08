/*
if (process.env.NODE_ENV === "production") {
   use minified verion for production
  module.exports = require("pdfjs-dist/build/pdf.worker.min.js");
} else {
  module.exports = require("pdfjs-dist/build/pdf.worker.js");
}
*/

import worker from "react-pdf/dist/esm/pdf.worker.entry";

export default worker;
