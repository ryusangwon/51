function course_list_click() {
  location.href="mypage_course_list.html";
}

function regist_mentor_click() {
  location.href="mypage_regist_mentor.html";
}

function lol_info_click() {
  location.href="mypage_lol_info.html";
}

function is_checked(checkbox) {
  const regist_button = document.getElementById('regist_button');

  regist_button.disabled = checkbox.checked ? false : true;
}