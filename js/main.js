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
          const currentPath = window.location.pathname;
          if (currentPath === "/" || currentPath === "/index.html") {
            window.location.href = "https://prt.mn/7DPYKrqd_";
          } else if (currentPath === "/tai_chi.html") {
            window.location.href = "https://prt.mn/DC82FfqAwSt";
          }
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
  e.preventDefault();

  const target = $($(this).attr("href"));
  if (target.length) {
    const offset = $(window).height() / 2 - target.outerHeight() / 2;
    const scrollToPosition = target.offset().top - offset;

    $("html, body").animate(
      {
        scrollTop: scrollToPosition,
      },
      800
    );
  }
});

//show course block
$("#btn_course").on("click", function () {
  $(".drop_list").fadeToggle("fast");
});

$(window).on("pageshow", function (event) {
  $(".drop_list").hide();
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
$("#close_modal_policy2").on("click", function () {
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
$(".close_modal_policy2").on("click", function () {
  $("#visib_policy_two").fadeOut("fast");
  $("#overlay_two").fadeOut("fast");
});

// Слайдер на відгуки

const slider = document.querySelector(".wrapp_feedback_items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e) => {
  isDown = true;
  slider.classList.add("active");
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener("mouseleave", () => {
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  isDown = false;
});
slider.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
});

// Заборона на копіювання тексту в відгуках
slider.addEventListener("copy", (e) => {
  e.preventDefault();
});

// Анімований список
let consumerList = document.querySelector(".consumer_list");
let blockYinTop = document.querySelectorAll(".block_yin_top");
let blockYin = document.querySelectorAll(".second_list");
let aboutBtn = document.querySelectorAll(".about_btn");
let resultBtn = document.querySelectorAll(".result_btn");
let feedbackList = document.querySelector(".wrapp_feedback_items");

function isInViewport(element) {
  if (!element) return false;
  const rect = element.getBoundingClientRect();
  const windowHeight =
    window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const visibleHeight =
    Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

  if (windowWidth >= 1280) {
    return visibleHeight >= 100;
  } else {
    return visibleHeight >= 50;
  }
}

if (consumerList) {
  if (isInViewport(consumerList)) {
    for (let i = 0; i < consumerList.children.length; i++) {
      consumerList.children[i].style.opacity = "1";
    }
  } else {
    window.addEventListener("scroll", () => {
      if (isInViewport(consumerList)) {
        consumerList.classList.add("anim-fade-in");
      }
    });
  }
}

if (feedbackList) {
  if (isInViewport(feedbackList)) {
    for (let i = 0; i < feedbackList.children.length; i++) {
      feedbackList.children[i].style.opacity = "1";
    }
  } else {
    window.addEventListener("scroll", () => {
      if (isInViewport(feedbackList)) {
        feedbackList.classList.add("anim-fade-in");
      }
    });
  }
}

blockYin.forEach((blockYinItem) => {
  let childrenCount = blockYinItem.children.length;

  if (isInViewport(blockYinItem)) {
    for (let i = 0; i < childrenCount; i++) {
      blockYinItem.children[i].style.opacity = "1";
    }
    resultBtn.forEach((btn) => (btn.style.opacity = "1"));
  }
});

window.addEventListener("scroll", () => {
  blockYin.forEach((blockYinItem) => {
    if (isInViewport(blockYinItem)) {
      blockYinItem.classList.add("anim-fade-in");
      resultBtn.forEach((btn) => btn.classList.add("btn-anim"));
    }
  });
});

blockYinTop.forEach((blockYinTopItem) => {
  let childrenCount = blockYinTopItem.children.length;

  if (isInViewport(blockYinTopItem)) {
    for (let i = 0; i < childrenCount; i++) {
      blockYinTopItem.children[i].style.opacity = "1";
    }
    aboutBtn.forEach((btn) => (btn.style.opacity = "1"));
  }
});

window.addEventListener("scroll", () => {
  blockYinTop.forEach((blockYinTopItem) => {
    if (isInViewport(blockYinTopItem)) {
      blockYinTopItem.classList.add("anim-fade-in");
      aboutBtn.forEach((btn) => btn.classList.add("btn-anim"));
    }
  });
});
// Відкладене завантаження відео для ортимізації

document.querySelectorAll(".lazy-video").forEach((video) => {
  video.addEventListener("click", () => {
    const videoId = video.dataset.videoId;
    const iframe = document.createElement("iframe");
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}?autoplay=1`
    );
    iframe.setAttribute("allowfullscreen", "");
    iframe.className = "video_placeholder video_iframe";
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    video.innerHTML = "";
    video.appendChild(iframe);
  });
});

// Відкриття меню на фокусі

const btnCourse = document.getElementById("btn_course");

function handleKeydown(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    btnCourse.click();
    btnCourse.removeEventListener("keydown", handleKeydown);
  }
}

btnCourse.addEventListener("keydown", handleKeydown);
