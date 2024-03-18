
function darClick() {

    const classMenu = 'fas fa-bars fa-lg';
    const classX = 'fas fa-times fa-lg';
    const iconButtonMenu = document.getElementById("iconButtonMenu");
    const divMenu = document.getElementById("menu");
    const divMenuDesplegable = document.createElement("div");
    const divMenuContenido = document.createElement("div");
    const containerMenu = document.createElement("div");
    const divButtons = document.createElement("div");
    const button1 = document.createElement("input");
    const button2 = document.createElement("input");

    const elementosMenu = ['Productos', 'Soluciones', 'Recursos', 'Empresa', 'Precios'];

    if (iconButtonMenu.className === classMenu) {
        iconButtonMenu.className = classX;
        divMenuContenido.className = "menuContenido";
        divMenuDesplegable.className = "menuDesplegable";
        containerMenu.className = "containerMenu";

        divButtons.className = "divButtons";

        elementosMenu.forEach((e, index) => {
            const elem = document.createElement("p");
            const icon = document.createElement("i");
            const divItem = document.createElement("div");
            if (index == 0) {
                divItem.id = "labelMenu";
                divItem.addEventListener("click", () => {
                    submenu();
                });
                icon.id = "iconSubmenu";
            }
            divItem.className = "itemMenu";
            elem.innerHTML = e;
            icon.className = "fas fa-plus";
            divItem.appendChild(elem);
            divItem.appendChild(icon);
            divMenuDesplegable.appendChild(divItem);
        });
        containerMenu.appendChild(divMenuDesplegable);
        button1.type = "button";
        button2.type = "button";
        button1.value = "Prueba gratuita";
        button1.id = "buttonPruebaGratis";
        button2.id = "buttonIniciarSesion";
        button2.value = "Iniciar sesión";
        divButtons.appendChild(button1);
        divButtons.appendChild(button2);
        divMenuDesplegable.appendChild(divButtons);
        divMenuContenido.appendChild(containerMenu);
        divMenu.appendChild(divMenuContenido);

        const itemSubmenu = document.getElementById("labelMenu");
        const divSubmenu = document.createElement("div");
        divSubmenu.id = "divSubmenu";
        divSubmenu.className = "divSubmenuClosed";
        for(let i=0; i<3; i++){
            //console.log("entreee "+i);
            const containerSubmenu = document.createElement("div");
            const elementSubmenu = document.createElement("div");
            const label = document.createElement("p");
            const icon = document.createElement("i");
            label.innerHTML = "Atlas, plataforma de datos para desarrolladores";
            icon.className = "fas fa-plus";
            elementSubmenu.className = "elementSubmenu";
            elementSubmenu.appendChild(label);
            elementSubmenu.appendChild(icon);
            divSubmenu.appendChild(containerSubmenu);
            containerSubmenu.appendChild(elementSubmenu);
        }
        itemSubmenu.parentNode.insertBefore(divSubmenu, itemSubmenu.nextSibling);
    } else {
        iconButtonMenu.className = classMenu;
        divMenu.innerHTML = "";
    }


}

function submenu() {
    const iconOpen = "fas fa-plus";
    const iconClosed = "fas fa-times";
    const divSubmenu = document.getElementById("divSubmenu");

    const iconSubmenu = document.getElementById("iconSubmenu");
    if (iconSubmenu.className == "fas fa-plus") {
        iconSubmenu.className = iconClosed;
        divSubmenu.className = "divSubmenuOpen";
    } else {
        iconSubmenu.className = iconOpen;
        divSubmenu.className = "divSubmenuClosed";
    }

}