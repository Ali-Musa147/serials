$(function () {
  $(".floating-wpp").floatingWhatsApp({
    phone: "972547043581",
    popupMessage: "I'm not a Bot :)",
    showPopup: true,
    position: "right", // left or right
    autoOpen: true, // true or false
    autoOpenTimeout: 10000,
    message: "Hello, I want to ask about",
    //headerColor: 'orange', // enable to change msg box color
    headerTitle: "Whatsapp Message Box",
  });
});

document.getElementById("checkMeBtn").addEventListener("click", listener);

function listener(e) {
  if (document.getElementById("spec-enter").value === "") {
    inputRequired(e);
  } else {
    fetch(
      `/checkSerial/${
        document.getElementById("spec-enter").value
      }`,
      { method: "PUT" }
    )
      .then((response) => {
        console.log(response);
        return response.json(); //to convert the json response to object. stringify is not used in fetch
      }) // extracting the object that was injected to the **new** incoming res from the backend
      .then((data) => {
        flipping();

        if (data.success) {
          createSuccessMsg(data);
        } else {
          createFailMsg();
        }
        document
          .getElementById("checkMeBtn")
          .addEventListener("click", listener);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    loading();
  }
}

/*helper functions */

function inputRequired(event) {
  event.preventDefault();
  document.getElementById("spec-enter").setAttribute("placeholder", "REQUIRED");
  document.getElementById("checkMeBtn").disabled = true;
  document
    .getElementById("spec-enter")
    .classList.add("animate__animated", "animate__swing", "animate__repeat-1");
  setTimeout(() => {
    document.getElementById("spec-enter").setAttribute("placeholder", "XXXXXXXX");
    document
      .getElementById("spec-enter")
      .classList.remove(
        "animate__animated",
        "animate__swing",
        "animate__repeat-1"
      );
    document.getElementById("checkMeBtn").disabled = false;
  }, 3000);
}

function loading() {
  console.log("connecting");

  document.querySelector(
    ".spec-bottom_form"
  ).innerHTML = `<img src="images/loading1.gif" alt="#">`;
}

function flipping() {
  document
    .getElementById("authBox")
    .classList.add(
      "animate__animated",
      "animate__flipInY",
      "animate__repeat-1"
    );

  setTimeout(() => {
    document
      .getElementById("authBox")
      .classList.remove(
        "animate__animated",
        "animate__flipInY",
        "animate__repeat-1"
      );
  }, 2000);
}

function createSuccessMsg(data) {
  document.getElementById("authBox").innerHTML = `<div class="cont">
              <h3> <span class="multi spec-spanAuth">Authenticate your Product</span>
                  <!-- <br> Responsive Landing Page 2019</h3> -->
              <p id="spec-p2"><h2>Yor product is original and safe to use, last time checked <strong> ${
                data.data.date ? `on  ${data.data.date}` : `is Now`
              }
  </strong>. You may want to check more:</h2></p>
            </h3></div>
            <div class="bottom_form spec-bottom_form">
              <input class="enter" id="spec-enter" placeholder="XXXXXXXX" type="text" name="enterSerial">
              <button id="checkMeBtn" type="button" class="sub_btn spec-sub_btn">CHECK ME</button>
            </div>`;
}

function createFailMsg() {
  document.getElementById("authBox").innerHTML = `<div class="cont">
                        <h3> <span class="multi spec-spanAuth">Authenticate your Product</span>
                            <!-- <br> Responsive Landing Page 2019</h3> -->
                        <p id="spec-p2"><h2>Your Product is <strong>NOT</strong> legit, or serial was entered wrong. You may want to check more:</h2></p>
                     </h3></div>
                     <div class="bottom_form spec-bottom_form">
                        <input class="enter" id="spec-enter" placeholder="XXXXXXXX" type="text" name="enterSerial">
                        <button id="checkMeBtn" type="button" class="sub_btn spec-sub_btn">CHECK ME</button>
                     </div>`;
}
