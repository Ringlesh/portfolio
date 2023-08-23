const themeToggleBtn = document.querySelectorAll('#theme-toggle');

console.log(themeToggleBtn)

//state
const theme =localStorage.getItem('theme');
console.log(theme);

// on mount
theme && document.body.classList.add(theme);

//handlers
const handleThemeToggle = () =>{
// known about toggle(' ')
document.body.classList.toggle('light-mode')

if(document.body.classList.contains('light-mode'))
{
  localStorage.setItem('theme','light-mode');

}
else
{
  localStorage.removeItem('theme')
  document.body.removeAttribute('class')
}
};

//event
themeToggleBtn.forEach(btn => btn.addEventListener('click',handleThemeToggle))

handleThemeToggle()