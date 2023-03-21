const app = () => {
    window.addEventListener('load', () => {
        const form = document.getElementById('new-task-form');
        const input = document.getElementById('new-task-input');
        const tasks__list = document.getElementById('tasks');
        
        form.addEventListener('submit', e => {
            e.preventDefault();
            const task = input.value;
            if(!task){
                alert('Please fill ou the task');
                return;
            }
            
            const task__el = document.createElement('div');
            task__el.classList.add('task');
            
            const task__content__el = document.createElement('div');
            task__el.classList.add('content');
            
            task__el.appendChild(task__content__el);
            
            const task__input__el = document.createElement('input');
            task__input__el.classList.add('text');
            task__input__el.type = 'text';
            task__input__el.value = task;
            task__input__el.setAttribute('readonly', 'readonly');
            task__content__el.appendChild(task__input__el);

            const task__actions__el = document.createElement('div');
            task__actions__el.classList.add('actions');

            const task__edit__el = document.createElement('button');
            task__edit__el.classList.add('edit');
            task__edit__el.innerHTML = 'edit';

            const task__delete__el = document.createElement('button');
            task__delete__el.classList.add('delete');
            task__delete__el.innerHTML = 'delete';

            task__actions__el.appendChild(task__edit__el);
            task__actions__el.appendChild(task__delete__el);
            
            task__el.appendChild(task__actions__el);

            tasks__list.appendChild(task__el);
            input.value = '';

            task__edit__el.addEventListener('click', () => {
            
                if(task__edit__el.innerHTML.toLowerCase() == 'edit') {
                    task__input__el.removeAttribute('readonly');
                    task__input__el.focus();
                    task__edit__el.innerText = 'Save';
                } else {
                    task__input__el.setAttribute('readonly', 'readonly');
                    task__edit__el.innerHTML = 'edit';

                }
            })
            task__delete__el.addEventListener('click', () => {
                tasks__list.removeChild(task__el);
            })
        })
    })
  
}
app();