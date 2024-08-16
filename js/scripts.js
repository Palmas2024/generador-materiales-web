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
function openForm(formName) {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Limpia el contenido previo

    if (formName === 'aceites') {
        formContainer.innerHTML = `
            <form id="aceitesForm" onsubmit="return validateAceitesForm()">
                <label for="viscosidad">Viscosidad:</label>
                <input type="text" id="viscosidad" name="viscosidad" required><br>

                <label for="marca">Marca:</label>
                <input type="text" id="marca" name="marca" required><br>

                <label for="presentacion">Presentación:</label>
                <input type="text" id="presentacion" name="presentacion" required><br>

                <button type="submit">Generar Descripción</button>
            </form>
        `;
    } else if (formName === 'confecciones') {
        formContainer.innerHTML = `
            <form id="confeccionesForm" onsubmit="return validateConfeccionesForm()">
                <label for="suministro">Suministro:</label>
                <input type="text" id="suministro" name="suministro" required><br>

                <label for="material">Material:</label>
                <input type="text" id="material" name="material" required><br>

                <label for="talla">Talla:</label>
                <input type="text" id="talla" name="talla" required><br>

                <button type="submit">Generar Descripción</button>
            </form>
        `;
    }
}

function validateAceitesForm() {
    const viscosidad = document.getElementById('viscosidad').value;
    const marca = document.getElementById('marca').value;
    const presentacion = document.getElementById('presentacion').value;

    if (!viscosidad || !marca || !presentacion) {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Puedes añadir más validaciones aquí según sea necesario
    return true;
}

function validateConfeccionesForm() {
    const suministro = document.getElementById('suministro').value;
    const material = document.getElementById('material').value;
    const talla = document.getElementById('talla').value;

    if (!suministro || !material || !talla) {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    // Puedes añadir más validaciones aquí según sea necesario
    return true;
}
function openForm(formName) {
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = ''; // Limpia el contenido previo

    if (formName === 'aceites') {
        formContainer.innerHTML = `
            <form id="aceitesForm" onsubmit="return validateAceitesForm()">
                <label for="viscosidad">Viscosidad:</label>
                <input type="text" id="viscosidad" name="viscosidad" required><br>

                <label for="marca">Marca:</label>
                <input type="text" id="marca" name="marca" required><br>

                <label for="presentacion">Presentación:</label>
                <input type="text" id="presentacion" name="presentacion" required><br>

                <button type="submit">Generar Descripción</button>
            </form>
        `;
    } else if (formName === 'confecciones') {
        formContainer.innerHTML = `
            <form id="confeccionesForm" onsubmit="return validateConfeccionesForm()">
                <label for="suministro">Suministro:</label>
                <input type="text" id="suministro" name="suministro" required><br>

                <label for="material">Material:</label>
                <input type="text" id="material" name="material" required><br>

                <label for="talla">Talla:</label>
                <input type="text" id="talla" name="talla" required><br>

                <button type="submit">Generar Descripción</button>
            </form>
        `;
    } else if (formName === 'lubricantes') {
        formContainer.innerHTML = `
            <form id="lubricantesForm" onsubmit="return validateLubricantesForm()">
                <label for="tipoLubricante">Tipo de Lubricante:</label>
                <input type="text" id="tipoLubricante" name="tipoLubricante" required><br>

                <label for="viscosidadLubricante">Viscosidad:</label>
                <input type="text" id="viscosidadLubricante" name="viscosidadLubricante" required><br>

                <label for="cantidadLubricante">Cantidad:</label>
                <input type="text" id="cantidadLubricante" name="cantidadLubricante" required><br>

                <button type="submit">Generar Descripción</button>
            </form>
        `;
    }
    // Añadir más grupos aquí
}

function validateLubricantesForm() {
    const tipoLubricante = document.getElementById('tipoLubricante').value;
    const viscosidadLubricante = document.getElementById('viscosidadLubricante').value;
    const cantidadLubricante = document.getElementById('cantidadLubricante').value;

    if (!tipoLubricante || !viscosidadLubricante || !cantidadLubricante) {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    return true;
}function validateAceitesForm() {
    const viscosidad = document.getElementById('viscosidad').value;
    const marca = document.getElementById('marca').value;
    const presentacion = document.getElementById('presentacion').value;

    if (!viscosidad || !marca || !presentacion) {
        alert('Por favor, completa todos los campos.');
        return false;
    }

    const descripcion = `Aceite de ${marca}, Viscosidad: ${viscosidad}, Presentación: ${presentacion}`;
    alert(`Descripción Generada: ${descripcion}`);
    
    return false; // Evitar el envío del formulario
}

// Repite para otros formularios

