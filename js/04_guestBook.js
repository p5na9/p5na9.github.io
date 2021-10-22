const displayGuestbook = () => {
    const guestbooks = JSON.parse(localStorage.getItem("guestbooks"));
    guestbooks.reverse(); // 원본배열
    console.log(guestbooks);
    let elems = document.getElementsByClassName("foo");

    const $tbody = $("#tb-guestbook tbody");
    $tbody.empty();
    $.each(guestbooks, (i, {username, content, datetime}) => {
      $tbody.append(`<tr>
  <td>${i + 1}</td>
  <td>${username}</td>
  <td>${content}</td>
  <td>${formatDatetime(datetime)}</td>
</tr>`);
    });
  };

  const formatDatetime = (millis) => {
    const d = new Date(millis);
    const f = (n) => n >= 10 ? n : "0" + n;
    return `${d.getFullYear()}/${f(d.getMonth() + 1)}/${f(d.getDate())} ${f(d.getHours())}:${f(d.getMinutes())}`;
  };

  const saveGuestbook = () => {
    const $username = $(username);
    const $content = $(content);

    if($username.val() == ""  || $content.val() == "")
      return;

    // 1. 사용자입력값을 Guesbook객체생성
    const gb = new Guestbook($username.val(), $content.val());

    // 2. localStorage에 추가 : 배열로 관리
    const guestbooks = JSON.parse(localStorage.getItem("guestbooks")) || [];
    guestbooks.push(gb);

    console.log(guestbooks);

    localStorage.setItem("guestbooks", JSON.stringify(guestbooks));

    // 3.초기화
    $username.val('');
    $content.val('');

    // 방명록 목록보기
    displayGuestbook();
  };

  class Guestbook {
    constructor(username, content){
      this.username = username;
      this.content = content;
      this.datetime = Date.now(); // unix time 밀리초
    }
  }