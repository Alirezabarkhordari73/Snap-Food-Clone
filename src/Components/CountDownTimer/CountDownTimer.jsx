import React from "react";
import { useEffect } from "react";
import { BsClock } from "react-icons/bs";

const CountDownTimer = () => {
  var countDownDate = new Date(2024, 11, 24, 10, 33, 30, 0).getTime();

  const countDownFunction = () => {
    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      var distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      document.getElementById("demo").innerHTML =
        hours + ":" + minutes + ":" + seconds;

      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
      }
    }, 1000);
  };
  useEffect(() => {
    countDownFunction();
  }, []);

  return (
    <div className=" w-[150px] flex justify-center items-center gap-3">
      <div
        id="demo"
        className="text-white text-[1.4rem] tracking-[3px] font-semibold"
      />
      <BsClock className="text-[1.4rem] text-white" />
    </div>
  );
};

export default CountDownTimer;
