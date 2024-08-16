function openForm(formName) {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Limpia el contenido previo

    if (formName === 'aceites') {
        formContainer.innerHTML = `
            <form id="aceitesForm">
                <label for="viscosidad">Viscosidad:</label>
                <input type="text" id="viscosidad" name="viscosidad"><br>

                <label for="marca">Marca:</label>
                <input type="text" id="marca" name="marca"><br>

                <label for="presentacion">Presentación:</label>
                <input type="text" id="presentacion" name="presentacion"><br>

                <button type="submit">Generar Descripción</button>
            </form>
        `;
    } else if (formName === 'confecciones') {
        formContainer.innerHTML = `
            <form id="confeccionesForm">
                <label for="suministro">Suministro:</label>
                <input type="text" id="suministro" name="suministro"><br>

                <label for="material">Material:</label>
                <input type="text" id="material" name="material"><br>

                <label for="talla">Talla:</label>
                <input type="text" id="talla" name="talla"><br>

                <button type="submit">Generar Descripción</button>
            </form>
        `;
    }
}
