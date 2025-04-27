let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      // toggles[i].style.color = "#0084e9";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}

$(document).ready(function () {
  $(".swiper").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: false,
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 2,
        },
      },
      {
        dots: false,
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// Readmore

const parentContainer = document.querySelectorAll(".read-more-container");
parentContainer.forEach((parentContainer) => {
  parentContainer.addEventListener("click", (event) => {
    const current = event.target;

    const isReadMoreBtn = current.className.includes("read-more-btn");

    if (!isReadMoreBtn) return;

    const currentText =
      event.target.parentNode.querySelector(".read-more-text");

    currentText.classList.toggle("read-more-text--show");

    current.textContent = current.textContent.includes("Read More")
      ? "Read Less..."
      : "Read More...";
  });
});

// Dropdown input color change

function changeColor(e) {
  var txt = e.value;
  e.style.color = "black";
}

// secdule date

// $(document).ready(function () {
//   $("#date-range12")
//     .dateRangePicker({
//       singleMonth: true,
//       inline: true,
//       container: "#date-range12-container",
//       alwaysOpen: true,
//     })
//     .bind("datepicker-change", function (event, obj) {
//       var dateing = obj.value;
//       console.log(dateing);
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("Script is running...");
//   var dateInput = document.getElementById("date-range12");
//   console.log("Input element:", dateInput);
//   console.log("Value of the input element:", dateInput.value);
// });

// let radioButtons = document.querySelectorAll('input[name="check"]');

// radioButtons.forEach(function (radioButton) {
//   radioButton.addEventListener("change", function () {
//     console.log("Selected value:", radioButton.value);
//     var timVal = radioButton.value;
//   });
// });

// let dateDiv = document.querySelectorAll(".btbx");

// dateDiv.forEach(function (dateDi) {
//   dateDi.addEventListener("click", function () {
//     dateDiv.forEach(function (rb) {
//       rb.classList.remove("selected");
//     });
//     dateDi.classList.add("selected");
//   });
// });

// var divElement = document.querySelector(".accordion-body.datedtl");

// var textContent = divElement.textContent.trim();
// textContent = `<p>This is the value of you date :${dateing} and time: ${timVal}</p>`;
// console.log(textContent);

// ===========================
//Read more read less

// $(document).ready(function () {
//   $(".hidebx").fadeOut(); // Fade out the elements by default
//   $(".hidebtn").click(function () {
//     $(".hidebx").fadeToggle("slow", function () {
//       // Update button text based on element visibility
//       $(this).is(":visible")
//         ? $(".hidebtn").text("Hide all sessions")
//         : $(".hidebtn").text("Show all sessions");
//     });
//   });
// });

//=============================

$(document).ready(function () {
  var timVal = "";

  $("#date-range12")
    .dateRangePicker({
      singleDate: true,
      singleMonth: true,
      format: "DD-MM-YYYY",
      inline: true,
      container: "#date-range12-container",
      alwaysOpen: true,
    })
    .bind("datepicker-change", function (event, obj) {
      var dateing = obj.value;
      console.log(dateing);

      updateTextContent(dateing, timVal);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  var dateInput = document.getElementById("date-range12");
  console.log("Input element:", dateInput);
  console.log("Value of the input element:", dateInput.value);
});

let radioButtons = document.querySelectorAll('input[name="check"]');

radioButtons.forEach(function (radioButton) {
  radioButton.addEventListener("change", function () {
    console.log("Selected value:", radioButton.value);
    timVal = radioButton.value;

    var dateingElement = document.getElementById("date-range12");
    var dateing = dateingElement.value;

    updateTextContent(dateing, timVal);
  });
});

let dateDiv = document.querySelectorAll(".btbx");

dateDiv.forEach(function (dateDi) {
  dateDi.addEventListener("click", function () {
    dateDiv.forEach(function (rb) {
      rb.classList.remove("selected");
    });
    dateDi.classList.add("selected");
  });
});

function updateTextContent(dateing, timVal) {
  var divElement = document.querySelector(".datedtl");

  var textContent = divElement.textContent.trim();
  textContent = `<p>Schedule your school tour on ${dateing} and at ${timVal}</p>`;
  console.log(textContent);

  var divElement = document.querySelector(".accordion-body.datedtl");

  divElement.innerHTML = textContent;
}

// Validate from

function validateFormone() {
  var pname = document.getElementById("pnameone").value;
  var cname = document.getElementById("cnameone").value;
  var age = document.getElementById("ageone").value;
  var gender = document.getElementById("genderone").value;
  var phone = document.getElementById("phoneone").value;
  var email = document.getElementById("emailone").value;
  var dateVal = document.getElementById("date-range12").value;
  var timeChecked = document.querySelector('input[name="check"]:checked');

  // Validate Date
  if (dateVal.trim() === "") {
    document.getElementById("date-error").innerHTML = "Please select a date.";
    return false;
  } else {
    document.getElementById("date-error").innerHTML = "";
  }

  // Validate Time
  if (!timeChecked) {
    document.getElementById("time-error").innerHTML = "Please select a time.";
    return false;
  } else {
    document.getElementById("time-error").innerHTML = "";
  }

  // Rest of the validation logic...

  if (pname.trim() === "") {
    document.getElementById("pname-errorone").innerHTML =
      "Please enter Parent's Name.";
    return false;
  } else {
    document.getElementById("pname-errorone").innerHTML = "";
  }

  if (cname.trim() === "") {
    document.getElementById("cname-errorone").innerHTML =
      "Please enter Child's Name.";
    return false;
  } else {
    document.getElementById("cname-errorone").innerHTML = "";
  }

  var ageValue = parseInt(age, 10);
  if (isNaN(ageValue) || ageValue < 1 || ageValue > 6) {
    document.getElementById("age-errorone").innerHTML =
      "Please enter a valid age between 1 and 6.";
    return false;
  } else {
    document.getElementById("age-errorone").innerHTML = "";
  }

  // Validate Child's Gender
  if (gender.trim() === "") {
    document.getElementById("gender-errorone").innerHTML =
      "Please select Child's Gender.";
    return false;
  } else {
    document.getElementById("gender-errorone").innerHTML = "";
  }

  // Validate Phone
  if (phone.trim() === "" || !/^[6-9]\d{9}$/.test(phone)) {
    document.getElementById("phone-errorone").innerHTML =
      "Please enter a valid 10-digit phone number.";
    return false;
  } else {
    document.getElementById("phone-errorone").innerHTML = "";
  }

  // Validate Email
  if (email.trim() === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    document.getElementById("email-errorone").innerHTML =
      "Please enter a valid email address.";
    return false;
  } else {
    document.getElementById("email-errorone").innerHTML = "";
  }

  // If all validations pass, you can submit the form
  return true;
}
