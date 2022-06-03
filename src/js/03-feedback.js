//сделал переменные
const form = document.querySelector('.feedback-form');

// Сделал ключ для локального хранилища

const STORAGE_KEY = 'feedback-form-state';

// Вызов функции хранилища
getTextLocalStorage();

//Повесил слушатилей на форму
//Беру значения  из формы

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((name, value) => console.log(`${value} : ${name}`));
  form.reset();
  localStorage.removeItem(STORAGE_KEY);
});

//запюисываю текст в локальное хранилище

form.addEventListener('change', e => {
  const { name, value } = e.target;

  let saveData = JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {};
  saveData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(saveData));
});

//Получаю значение из хранилища

function getTextLocalStorage() {
  let saveData = localStorage.getItem(STORAGE_KEY);

  if (!saveData) return;

  saveData = JSON.parse(saveData);
  Object.entries(saveData).forEach(([name, value]) => {
    form.elements[name].value = value;
  });
  
}
