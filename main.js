const input = document.querySelector('input');
const btn = document.querySelector('.task>button');
btn.addEventListener('click', addList);
input.addEventListener('click', (e) => {
    (e.keyCode === 13 ? addList(e) : null);
})

function addList(e) {
    const notcompleted = document.querySelector('.notcompleted');
    const completed = document.querySelector('.completed');
    const newLi = document.createElement('li');
    const checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa fa-check"></i>';
    const editBtn = document.createElement('button');
    editBtn.innerHTML = '<i class="fa fa-edit"></i>';
    const delBtn = document.createElement('button');
    delBtn.innerHTML = '<i class="fa fa-trash"></i>';

    if (input.value !== ' ') {
        newLi.textContent = input.value;
        input.value = '';
        notcompleted.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);
    }
    checkBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
        completed.appendChild(parent);
        checkBtn.style.display = 'none';
    });
    delBtn.addEventListener('click', function() {
        const parent = this.parentNode;
        parent.remove();
    });
}