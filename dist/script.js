function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var audioURL = "https://www.thinkelearn.com/wp-content/uploads/2021/05/16900_1461333025.mp3";

class Clock extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "startCountdown",





























































    () => {
      this.intervalID = setInterval(this.tick, 1000);
      this.setState({ started: true });
    });_defineProperty(this, "stopCountdown",

    () => {
      clearInterval(this.intervalID);
      this.setState({ started: false });
    });_defineProperty(this, "tick",







    () => {
      if (this.state.started === false) return;
      if (this.state.m === 0 && this.state.s === 0 && this.state.label === 'Session') {
        this.setState({ label: 'Break', m: this.state.break });
        this.playAudio();
      } else if (this.state.m === 0 && this.state.s === 0 && this.state.label === 'Break') {
        this.setState({ label: 'Session', m: this.state.session });
        this.playAudio();
      } else if (this.state.s === 0) {
        this.setState(state => {return { m: state.m - 1, s: 59 };});
      } else {
        this.setState(state => {return { s: state.s - 1 };});
      }
    });this.state = { break: 5, session: 25, label: 'Session', started: false, m: 25, s: 0 };this.resetClock = this.resetClock.bind(this);this.startStop = this.startStop.bind(this);this.decrementBreak = this.decrementBreak.bind(this);this.incrementBreak = this.incrementBreak.bind(this);this.decrementSession = this.decrementSession.bind(this);this.incrementSession = this.incrementSession.bind(this);}resetClock() {this.stopCountdown();this.loadAudio();this.setState({ break: 5, session: 25, label: 'Session', started: false, m: 25, s: 0 });}decrementBreak() {if (this.state.break > 1) {this.setState(state => {return { break: state.break - 1 };});}}incrementBreak() {if (this.state.break < 60) {this.setState(state => {return { break: state.break + 1 };});}}decrementSession() {if (this.state.session > 1) {this.setState(state => {return { session: state.session - 1, m: state.m - 1 };});}}incrementSession() {if (this.state.session < 60) {this.setState(state => {return { session: state.session + 1, m: state.m + 1 };});}}startStop() {!this.state.started ? this.startCountdown() : this.stopCountdown();}

  playAudio() {
    document.getElementById("beep").play();
  }

  loadAudio() {
    document.getElementById("beep").load();
  }

  render() {
    //console.log(this.state);
    return /*#__PURE__*/(
      React.createElement("div", { id: "clock", className: "container" }, /*#__PURE__*/
      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col text-center" },
      this.state.label === "Session" ? /*#__PURE__*/
      React.createElement("i", { class: "fas fa-bell fa-3x" }) : /*#__PURE__*/
      React.createElement("i", { class: "far fa-bell fa-3x" }))), /*#__PURE__*/


      React.createElement("div", { className: "row justify-content-evenly" }, /*#__PURE__*/
      React.createElement("div", { id: "break-label", className: "col text-center" }, "Break Length"), /*#__PURE__*/
      React.createElement("div", { id: "session-label", className: "col text-center" }, "Session Length")), /*#__PURE__*/

      React.createElement("div", { className: "row justify-content-evenly" }, /*#__PURE__*/
      React.createElement("div", { className: "col text-center" }, /*#__PURE__*/
      React.createElement("i", { id: "break-decrement", className: "fas fa-arrow-down p-2", onClick: this.decrementBreak }), /*#__PURE__*/
      React.createElement("span", { id: "break-length" }, this.state.break), /*#__PURE__*/
      React.createElement("i", { id: "break-increment", className: "fas fa-arrow-up p-2", onClick: this.incrementBreak })), /*#__PURE__*/

      React.createElement("div", { className: "col text-center" }, /*#__PURE__*/
      React.createElement("i", { id: "session-decrement", className: "fas fa-arrow-down p-2", onClick: this.decrementSession }), /*#__PURE__*/
      React.createElement("span", { id: "session-length" }, this.state.session), /*#__PURE__*/
      React.createElement("i", { id: "session-increment", className: "fas fa-arrow-up p-2", onClick: this.incrementSession }))), /*#__PURE__*/


      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "timer-label", className: "col text-center" }, this.state.label)), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { id: "time-left", className: "col text-center" },
      this.state.m.toString().padStart(2, '0'), ":",

      this.state.s.toString().padStart(2, '0'))), /*#__PURE__*/


      React.createElement("div", { className: "row justify-content-center" }, /*#__PURE__*/
      React.createElement("div", { className: "col-1 text-center" },
      this.state.started ? /*#__PURE__*/
      React.createElement("i", { id: "start_stop", className: "fas fa-pause", onClick: this.startStop }) : /*#__PURE__*/
      React.createElement("i", { id: "start_stop", className: "fas fa-play", onClick: this.startStop })), /*#__PURE__*/


      React.createElement("div", { className: "col-1 text-center" }, /*#__PURE__*/
      React.createElement("i", { id: "reset", className: "fas fa-sync-alt", onClick: this.resetClock }))), /*#__PURE__*/


      React.createElement("div", null, /*#__PURE__*/React.createElement("audio", { id: "beep", src: audioURL }))));


  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(Clock, null),
document.getElementById('root'));