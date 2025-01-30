// Aside HTML donde estará el Pop Up de SingUp.
const singUpAside = document.getElementById('singUp-PopUp');

// Icon de user en el Home que activara el Pop Up del SingUp.
const singUp_Btn =  document.getElementById("SingUp-PopUp-Btn");

// Icon escucha el evento click y y ejecuta el código HTML para abrir el Pop Up.
singUp_Btn.addEventListener('click', (e) => {
    e.preventDefault()

    singUpAside.style.display = 'flex';
    const singUpForm = document.createElement('section');
    singUpForm.classList.add('popup-content');

    singUpForm.innerHTML = `
           <span class="material-symbols-rounded close" id="closeSingUp_popUp">close</span>
            <h2 class="title">Formulario de Signup</h2>
            <form class="singUp-Form" id="signupForm">
                <table>
                    <tr>
                        <td><input type="text" id="nombre" name="nombre" placeholder="Nombre" required></td>
                    </tr>
                    <tr>
                        <td><div id="nombreError" class="error-message"></div></td>
                    </tr>
                    <tr>
                        <td><input type="text" id="apellido" name="apellido" placeholder="Apellido" required></td>
                    </tr>
                    <tr>
                        <td><div id="apellidoError" class="error-message"></div></td>
                    </tr>
                    <tr>
                        <td><input type="email" id="correo" name="correo" placeholder="Correo electrónico" required></td>
                    </tr>
                    <tr>
                        <td><div id="correoError" class="error-message"></div></td>
                    </tr>
                    <tr>
                        <td><input type="text" id="usuario" name="usuario" placeholder="Nombre de usuario" required></td>
                    </tr>
                    <tr>
                        <td><div id="usuarioError" class="error-message"></div></td>
                    </tr>
                    <tr>
                        <td><input type="submit" value="Enviar"></td>
                    </tr>
                </table>
            </form>
    `;
    singUpAside.appendChild(singUpForm);

    // Elimina el icon btn de la pantalla.
    singUp_Btn.style.display = 'none';
})

// Evento de Icon X para cerrar el modal
singUpAside.addEventListener('click', (e) => {
    e.preventDefault()
    if(e.target.classList.contains('close')){
        singUpAside.style.display = 'none';

        // Restablece el icon que activa el Pop Up.
        singUp_Btn.style.display = 'inline-block';
    }
})