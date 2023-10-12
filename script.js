(()=>{
const btn = document.querySelector('[data-form-btn]')
const createTask=(evento)=>{
    evento.preventDefault();
    const input = document.querySelector('[data-form-input]');
    const input2 = document.querySelector('[data-form-input2]');
    const input3 = document.querySelector('[data-form-input3]');
    const input4 = document.querySelector('[data-form-input4]');
    const input5 = document.querySelector('[data-form-input5]');

    /*console.log(input.value);
    console.log(input2.value);
    console.log(input3.value);
    console.log(input4.value);
    console.log(input5.value);
    */

    const value = input.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const value4 = input4.value;
    const value5 = input5.value;

    const list = document.querySelector('[data-list]');
    const task = document.createElement('tr');

    const taskdescription = document.createElement('div');
    const taskcontent = document.createElement('td');
    

    task.innerText = "Nombre: "+value+" | "+" Precio: "+value2+" | "+" Cantidad: "+value3+" | "+" Descripcion: "+value4+" | "+" Hora Entrega: "+value5;

    taskcontent.appendChild(task);
    taskcontent.appendChild(taskdescription);
    list.appendChild(taskcontent);
}
btn.addEventListener('click',createTask);
})();