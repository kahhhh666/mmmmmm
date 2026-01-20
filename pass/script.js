//pegando elemento do dom
const divlistar = document.getElementById("list")

let item = []


function add() {


    let ite = document.getElementById("item").value

    if (ite !== "") {
        item.push(ite);
        //document.getElementById("list").innerHTML = item.join("<br>");
        document.getElementById("item").value = "";

        listarItens()
    }
    
}


const listarItens = () => {
    divlistar.innerHTML = ''

    item.forEach((elem, i) => {
        
        const divItens = document.createElement("div")

        const imgRemove = document.createElement("img")
        imgRemove.setAttribute("src", "imagens/remover.png")
        imgRemove.setAttribute("title","remover")

        imgRemove.addEventListener("click", evt => {
            removeItem(i)
        })
        
        divItens.append(elem)
        divItens.append(imgRemove)
        
        divlistar.append(divItens)
        
    })
}

function removeItem(pos) {
    item.splice(pos, 1)

    listarItens()
    
}