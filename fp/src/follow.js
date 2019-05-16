function el(str){
  return document.getElementById(str)
}

function makeEl(el,evl){
  const e =  document.createElement(el)
  if(evl){
    e.addEventListener('click',evl)
  }
  return function(text){
    e.innerText = text
    return e;
  }
}

const fn = function(){
  alert(arguments[0])
}

function append(el,list){
  for(const a of list){
    el.appendChild(a)
  }
}



append(el('user-list'),map(users,u=>makeEl('button',fn.bind(null,u.name))(u.name)))

const button = $('<button>').text('test')

$('#user-list').append(map(users,u=>makeEl('button')(u.name)))
