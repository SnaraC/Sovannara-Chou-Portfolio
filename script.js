var navLinks = document.getElementById('navLinks');

function showMenu() {
  navLinks.style.right = '0';
}

function hideMenu() {
  navLinks.style.right = '-200px';
}

const inputs = document.querySelectorAll('.input');

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}

function myFunction() {
  var phide = document.getElementById('p-hide');
  var btnText = document.getElementById('myBtn');

  if (phide.style.display === 'none') {
    phide.style.display = 'inline';
    btnText.innerHTML = 'Read less';
  } else {
    phide.style.display = 'none';
    btnText.innerHTML = 'Read more';
  }
}
