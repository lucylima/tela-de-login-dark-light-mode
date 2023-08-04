const mode = document.getElementById("lua-icon");

mode.addEventListener('click', () => {
    const form = document.getElementById('login-form');
    

    if (mode.classList.contains('fa-moon')){
        mode.classList.remove('fa-moon');
        mode.classList.add('fa-sun');
        
        form.classList.add("darkmode");
        return;
    }

    mode.classList.add('fa-moon');
    mode.classList.remove('fa-sun');
    form.classList.remove('darkmode')
});