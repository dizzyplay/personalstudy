function el(str) {
  return document.getElementById(str);
}

function makeEl(el, evl) {
  const e = document.createElement(el);
  if (evl) {
    e.addEventListener('click', evl);
  }
  return function(text) {
    e.innerText = text;
    return e;
  };
}

const fn = function() {
  alert(arguments[0]);
};

function append(el, list) {
  for (const a of list) {
    el.appendChild(a);
  }
}

$('#user-list').append(
  map(users, u => {
    const button = $('<button>').text(u.name);
    button.click(() => {
      if (confirm(`${u.name} 님을 팔로우 하시겠습니까?`)) {
        follow(u);
      }
    });
    return button;
  }),
);

function follow(user) {
  $.post('/follow', {user_id: user.id}, function() {
    alert(`이제 ${user.name} 님의 소식을 받아볼수있습니다.`);
  });
  console.log(user);
}

$('#user-list').append(
  map(users, user =>
    $('<button>')
      .text(user.name)
      .click(() => console.log(user.name)),
  ),
);

// 함수를 인자로 받아 대신 실행하는 함수
