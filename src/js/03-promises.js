// Напиши скрипт, який на 
// момент сабміту форми викликає функцію
//  createPromise(position, delay) стільки разів,
//   скільки ввели в поле amount. Під час кожного виклику 
//   передай їй номер промісу (position), що створюється, 
//   і затримку, враховуючи першу затримку (delay),
//  введену користувачем, і крок (step).

// Доповни код функції createPromise таким чином, щоб вона повертала один проміс, 
// який виконується або відхиляється через delay часу. Значенням промісу повинен бути об'єкт,
//  в якому будуть властивості position і delay зі значеннями однойменних параметрів.
//   Використовуй початковий код функції для вибору того, що потрібно зробити з промісом -
//    виконати або відхилити.
import { Notify } from 'notiflix/build/notiflix-notify-aio';
const ref={
  submit:document.querySelector('.form')
}


ref.submit.addEventListener('submit',onSubmit)

function onSubmit(evt){
  evt.preventDefault();
  const amount=Number(evt.target.amount.value);
  let delay=Number(evt.target.delay.value);
  const step=Number(evt.target.step.value);
  for (let position = 1  ; position <= amount ; position+=1 ) {
     createPromise(position, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
      delay+=step;
      }
}

function createPromise(position, delay) {
   return new Promise ((res,rej)=>{
      const shouldResolve = Math.random() > 0.3;
      setTimeout(() => { 
         if (shouldResolve) {
        res({position, delay})
      } else {
        rej({position, delay})
  }}, delay);
 }) 
}

