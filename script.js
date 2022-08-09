//HOMEs
const ucHome = document.getElementById('itemHome');

function clearFundo(){
    document.getElementById("toggle").checked = false;
}

ucHome.addEventListener('click', clearFundo);

// SOBRE
const ucSobre = document.getElementById('itemSobre');

ucSobre.addEventListener('click', clearFundo);

//PROJETOS

ucProjetos = document.getElementById('itemProjetos');

ucProjetos.addEventListener('click', clearFundo);