export function remove() {
  let element = document.getElementsByClassName('card');
  for (var i = element.length; i--; ) {
    element[i].remove();
  }
}