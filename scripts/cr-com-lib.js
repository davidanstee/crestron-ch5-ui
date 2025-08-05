window.CrComLib = {
  publishEvent: function(type, join, value) {
    console.log('Simulated publishEvent:', type, join, value);
  },
  subscribeState: function(type, join, callback) {
    console.log('Simulated subscribeState:', type, join);
    if (callback) callback('Simulated Value');
  }
};