//jshint esversion:6

exports.getTime = function () {

    const today = new Date();

    const options = {
        
    };

    return today.toLocaleString();

};

exports.getDate = function() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: 'Asia/Singapore',
    hour12: false
  };

    return today.toLocaleDateString("en-SG", options);

};

exports.getDay = function () {

  const today = new Date();

  const options = {
    weekday: "long"
  };

  return today.toLocaleDateString("en-US", options);

};
