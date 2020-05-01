//Lo que se ejecuta apenas termine de cargar la pagina
//$(document).ready(function () {}

$(function () {
    //actualizarGrilla();

    $("#save").click(function () {
        if (validar() === true) {
            alert("Guardado");
        } else {
            alert("Se deben completar todos los campos");
        }
    });

    $("#cancel").click(function () {
        alert("Cancelado");
    });

    $("#delete").click(function () {

        alert("Eliminado");
    });

    function validar() {
        
        var validacion = true;

        if (document.getElementById('name').value.length < 2) {
            validacion = true;
        }

        if (document.getElementById('description').value.length < 4) {
            validacion = false;
        }

        if (document.getElementById('price').value < 0) {
            validacion = false;
        }

        if (document.getElementById('stock').value == '') {
            validacion = false;
        }

        return validacion;
    }
})