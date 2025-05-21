document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const form = e.target;
  const data = new FormData(form);
  const action = form.action;

  const xhr = new XMLHttpRequest();
  xhr.open("POST", action, true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      try {
        const result = JSON.parse(xhr.responseText);
        if (result.result === "Success") {
          window.location.href = "https://prt.mn/7DPYKrqd_";
        } else {
          alert("Ошибка при отправке данных.");
        }
      } catch (err) {
        console.error("Невозможно разобрать ответ:", err);
      }
    } else {
      console.error("Ошибка HTTP:", xhr.status);
    }
  };

  xhr.onerror = function () {
    console.error("Ошибка при запросе");
  };

  xhr.send(data);
});

$(".buy_course_btn").on("click", function (e) {
  e.preventDefault(); // Отключаем стандартное поведение якоря

  const target = $($(this).attr("href")); // Находим целевой блок по якорю
  if (target.length) {
    const offset = $(window).height() / 2 - target.outerHeight() / 2; // Вычисляем смещение для центрирования
    const scrollToPosition = target.offset().top - offset; // Позиция прокрутки

    $("html, body").animate(
      {
        scrollTop: scrollToPosition,
      },
      800
    ); // Длительность скролла в миллисекундах
  }
});

//show course block
$("#btn_course").on("click", function () {
  $(".drop_list").fadeToggle("fast");
  console.log("click");
});
$("#offerta").on("click", function () {
  $("#offerta_visib").fadeIn("fast");
  $(".overlay").fadeIn("fast");
});
$(".overlay").on("click", function () {
  $("#offerta_visib").fadeOut("fast");
  $(".overlay").fadeOut("fast");
});
$("#close_modal_policy").on("click", function () {
  $("#offerta_visib").fadeOut("fast");
  $(".overlay").fadeOut("fast");
});

$("#polyci").on("click", function () {
  $("#visib_policy_two").fadeIn("fast");
  $("#overlay_two").fadeIn("fast");
});
$("#overlay_two").on("click", function () {
  $("#visib_policy_two").fadeOut("fast");
  $("#overlay_two").fadeOut("fast");
});
$(".close_modal_policy").on("click", function () {
  $("#visib_policy_two").fadeOut("fast");
  $("#overlay_two").fadeOut("fast");
});
