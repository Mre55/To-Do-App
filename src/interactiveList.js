export default function interactive(e) {
  if (e.target.checked) {
    e.target.parentElement.classList.add('complete');
  } else {
    e.target.parentElement.classList.remove('complete');
  }
}
