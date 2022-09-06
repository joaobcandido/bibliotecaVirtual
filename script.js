//seleção de elementos
const bibliotecaForm = document.querySelector("#biblioteca-form");
const formControl = document.querySelector("#form-control");
const bibliotecaInputTitulo = document.querySelector("#biblioteca-input-titulo");
const bibliotecaInputDescrisao = document.querySelector("#biblioteca-input-descrisao");
const bibliotecaList = document.querySelector("#biblioteca-list");
const biblioteca = document.querySelector("#biblioteca");


//funçoes
const save = function(text){
    const livro = document.createElement("div")
    livro.classList.add("biblioteca");

    const livroTitulo = document.createElement("h3");
    livroTitulo.innerText =  text;
    livro.appendChild(livroTitulo);

    bibliotecaList.appendChild(livro);
   

    const editBtn = document.createElement("button");
    editBtn.classList.add("editar-biblioteca");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    console.log(editBtn)
    biblioteca.appendChild(editBtn);
    
    const btnDelete = document.createElement("button");
    btnDelete.classList.add("remove-biblioteca");
    btnDelete.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    biblioteca.appendChild(btnDelete);

    // bibliotecaList.appendChild(biblioteca);
    bibliotecaList.appendChild(biblioteca);
    console.log(biblioteca);






    bibliotecaInputTitulo.value = "";




};


    


//enventos
bibliotecaForm.addEventListener("submit", function(e){
    e.preventDefault();
    console.log("valor do botão", e)
    const inputValue = bibliotecaInputTitulo.value ;
   
    

    if(inputValue){
       
        save (inputValue);
    }
   
   
    
});
