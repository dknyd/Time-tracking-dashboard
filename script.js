const daily = document.querySelectorAll('.daily');
const weekly = document.querySelectorAll('.weekly');
const monthly = document.querySelectorAll('.monthly');

const buttonDaily = document.querySelector('.d');
const buttonWeekly = document.querySelector('.w');
const buttonMonthly = document.querySelector('.m');

const buttons = [buttonDaily, buttonWeekly, buttonMonthly]

buttonDaily.addEventListener('click', function() {
  daily.forEach(i => i.classList.remove('hidden')); 
  weekly.forEach(i => i.classList.add('hidden'));
  monthly.forEach(i => i.classList.add('hidden'));
  buttons.forEach(i => i.style.color = '');
  buttonDaily.style.color = 'white'
})

buttonWeekly.addEventListener('click', function() {
  daily.forEach(i => i.classList.add('hidden')); 
  weekly.forEach(i => i.classList.remove('hidden'));
  monthly.forEach(i => i.classList.add('hidden'));
  buttons.forEach(i => i.style.color = '');
  buttonWeekly.style.color = 'white'
})

buttonMonthly.addEventListener('click', function() {
  daily.forEach(i => i.classList.add('hidden')); 
  weekly.forEach(i => i.classList.add('hidden'));
  monthly.forEach(i => i.classList.remove('hidden'));
  buttons.forEach(i => i.style.color = '');
  buttonMonthly.style.color = 'white'
})

