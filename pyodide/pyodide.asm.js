
var pyodide = (function() {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(pyodide) {
  pyodide = pyodide || {};



  return pyodide.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = pyodide;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return pyodide; });
else if (typeof exports === 'object')
  exports["pyodide"] = pyodide;