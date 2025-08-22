let numbers  = [3, 7, 12, 18, 25, 30, 42];
let numberListDisplay = document.querySelector('.number-list')
let output  = document.querySelector('.output')


function showNumbers() {
   numberListDisplay.textContent = '';
  for (i = 0; i < numbers.length; i++) {
    const numSpaceDiv = document.createElement('div');
    numSpaceDiv.className = 'num';
    numSpaceDiv.textContent = numbers[i];
    numberListDisplay.appendChild(numSpaceDiv)
}
}


 showNumbers();


 const evenBtn = document.getElementById('evenBtn')
 const sumBtn = document.getElementById('sumBtn')
 const reverseBtn = document.getElementById('reverseBtn')
 
 evenBtn.addEventListener('click', function showEven(){
 let result = 'even numbers are: ' 
  for (i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result += numbers[i] + ' '
    }
  }
   output.textContent = result
 })

 sumBtn.addEventListener('click' , function sumNum() {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
    output.textContent ="Sum of numbers is: " + sum
 })

 reverseBtn.addEventListener('click' , function reverseNum(){
 output.textContent="Reversed numbers: "
  for (i = numbers.length - 1; i >= 0; i--) {
      output.textContent +=  numbers[i] + " "
  }
    
 } )

const checkBtn = document.getElementById('checkBtn');
const addNumBtn = document.getElementById('addBtn');
const removeBtn = document.getElementById('removeBtn')

checkBtn.addEventListener('click' , function checkNum(){
let found = false;
  for (i = 0; i < numbers.length; i++) {
  if (Number(document.getElementById('checkInput').value) === numbers[i] )  {
 found = true;
 break;
}
}
if (found) {
  output.textContent = "Its in the LIST"
} else {
  output.textContent = "Try Again"
}
})


addNumBtn.addEventListener('click', function AddNum(){
    numbers.push(Number(document.getElementById('addInput').value)) 
    output.textContent = 'Number Added'
    showNumbers();

}) 

removeBtn.addEventListener('click' ,  function removeNum() {
    numbers.pop()
    output.textContent = 'Number Removed'

    showNumbers();

})

