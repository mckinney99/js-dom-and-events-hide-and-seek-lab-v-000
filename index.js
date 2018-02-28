function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const num = document.querySelectorAll('.ranked-list')
  for (let i = 0; i < num.length; i++ ) {
    num[i].innerHTML = (i + n)
  }
}

function deepestChild(){
  return document.querySelector('grand-node div div div div div div')

}
