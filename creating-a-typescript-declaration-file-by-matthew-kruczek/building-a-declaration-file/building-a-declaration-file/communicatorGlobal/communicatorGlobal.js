// (function (window) {
//     if (typeof (window.communicatorGlobal) === 'undefined') {
//         window.communicatorGlobal = function (message) {
//             return "<h1>" + message + "</h1>";
//         };
//     }
// })(window);

// (function (window) {
//     function communicatorGlobal() {
//         var _communicatorGlobal = {};
//         // This emulates a simple method on a TS Class
//         _communicatorGlobal.greet = function (message) {
//             return "<h1>" + message + "</h1>";
//         };
//         return _communicatorGlobal;
//     }

//     if (typeof (window.communicatorGlobal) === 'undefined') {
//         window.communicatorGlobal = communicatorGlobal();
//     }
// })(window);

(function (window) {
  function communicatorGlobal() {
    var _communicatorGlobal = {};
    // Adding a subclass
    _communicatorGlobal.Settings = function (message) {
      this.message = message;
    };
    // New up the class with a default
    _communicatorGlobal.settings = new _communicatorGlobal.Settings("default");
    // This emulates a simple method on a TS Class
    _communicatorGlobal.greet = function () {
      return "<h1>" + _communicatorGlobal.settings.message + "</h1>";
    };
    return _communicatorGlobal;
  }

  if (typeof window.communicatorGlobal === "undefined") {
    window.communicatorGlobal = communicatorGlobal();
  }
})(window);
