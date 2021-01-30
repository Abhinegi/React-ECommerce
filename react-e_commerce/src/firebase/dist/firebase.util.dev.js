"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createUserProfileDocument = exports["default"] = exports.signInWithGoogle = exports.firestore = exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

require("firebase/firestore");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var config = {
  apiKey: "AIzaSyDLV0TAtbVenLKKMsZmSsBoRLUVo75g2I0",
  authDomain: "game-frikis-db.firebaseapp.com",
  projectId: "game-frikis-db",
  storageBucket: "game-frikis-db.appspot.com",
  messagingSenderId: "946268207178",
  appId: "1:946268207178:web:5a71211c60f5e11a2bceb3",
  measurementId: "G-QK9GBQXRGZ"
};

_app["default"].initializeApp(config);

var auth = _app["default"].auth();

exports.auth = auth;

var firestore = _app["default"].firestore();

exports.firestore = firestore;
var provider = new _app["default"].auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

var signInWithGoogle = function signInWithGoogle() {
  return auth.signInWithPopup(provider);
};

exports.signInWithGoogle = signInWithGoogle;
var _default = _app["default"];
exports["default"] = _default;

var createUserProfileDocument = function createUserProfileDocument(user, additionalData) {
  var userRef, snapshot, email, displayName, createdOn;
  return regeneratorRuntime.async(function createUserProfileDocument$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (user) {
            _context.next = 2;
            break;
          }

          return _context.abrupt("return");

        case 2:
          _context.next = 4;
          return regeneratorRuntime.awrap(firestore.doc("Users/" + user.uid));

        case 4:
          userRef = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(userRef.get());

        case 7:
          snapshot = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(snapshot);

        case 10:
          if (_context.sent.exists) {
            _context.next = 21;
            break;
          }

          email = user.email, displayName = user.displayName;
          createdOn = new Date();
          _context.prev = 13;
          _context.next = 16;
          return regeneratorRuntime.awrap(userRef.set(_objectSpread({
            email: email,
            displayName: displayName,
            createdOn: createdOn
          }, additionalData)));

        case 16:
          _context.next = 21;
          break;

        case 18:
          _context.prev = 18;
          _context.t0 = _context["catch"](13);
          console.log("error while storing data ", _context.t0);

        case 21:
          return _context.abrupt("return", userRef);

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[13, 18]]);
};

exports.createUserProfileDocument = createUserProfileDocument;