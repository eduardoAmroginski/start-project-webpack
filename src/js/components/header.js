const header = () => {

    const headerElement = document.createElement("header");
    const h1Element = document.createElement("h1");

    document.body.appendChild(headerElement);

    headerElement.innerHTML = `<h1>Teste de Webpack</h1>`

    

}

export default header();