/**
 * Simulate the hover effect on kindle.
 * @param {string}} id Element ID
 */
function clickable (id) {
  document.getElementById(id).style.background = "black"
  document.getElementById(id).style.color = "white"
  setTimeout(function() {
    document.getElementById(id).style.background = "white"
    document.getElementById(id).style.color = "black"
  }, 100);
}

/**
 * Simulate the `a` link on kindle.
 * Because the `text-decoration: none;` does not work on kindle, this function is used to deal with it.
 * @param {string} path url path
 */
function goto (path) {
  document.location.href = path
}