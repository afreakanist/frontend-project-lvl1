"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.userName = exports.greeting = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const greeting = 'Welcome to the Brain Games!';
exports.greeting = greeting;

const userName = () => {
  const name = _readlineSync.default.question('\nMay I have your name? ');

  console.log(`Hello, ${name}!`);
};

exports.userName = userName;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJncmVldGluZyIsInVzZXJOYW1lIiwibmFtZSIsInJlYWRsaW5lU3luYyIsInF1ZXN0aW9uIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsUUFBUSxHQUFHLDZCQUFqQjs7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHLE1BQU07QUFDNUIsUUFBTUMsSUFBSSxHQUFHQyxzQkFBYUMsUUFBYixDQUFzQiwwQkFBdEIsQ0FBYjs7QUFDQUMsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsVUFBU0osSUFBSyxHQUEzQjtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVhZGxpbmVTeW5jIGZyb20gJ3JlYWRsaW5lLXN5bmMnO1xuXG5leHBvcnQgY29uc3QgZ3JlZXRpbmcgPSAnV2VsY29tZSB0byB0aGUgQnJhaW4gR2FtZXMhJztcbmV4cG9ydCBjb25zdCB1c2VyTmFtZSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignXFxuTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGVsbG8sICR7bmFtZX0hYCk7XG59O1xuIl19