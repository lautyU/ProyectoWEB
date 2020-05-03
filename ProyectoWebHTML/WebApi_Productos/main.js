//Lo que se ejecuta apenas termine de cargar la pagina
//$(document).ready(function () {}

$(function () {
    actualizarGrilla();

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

    //Establece el boton a Nuevo.
    $("#save").val("Nuevo");

    
});

function validar() {

    var validacion = true;

    if ($('#name').val() == "") {
        validacion = true;
    }
    
    if ($('#description').val() == "") {
        validacion = false;
    }

    if ($('#price').val() < 0) {
        validacion = false;
    }

    if ($('#stock').val() < 0) {
        validacion = false;
    }

    return validacion;
}

function actualizarGrilla() {
    var data = ajaxGET();
    construirGrilla(data);
}

function ajaxGET() {
    var result;

    $.ajax({
        url: 'https://localhost:44305/api/productos',
        type: 'GET',
        async: false
    }).done(function (data) {
        result = data;
    }).error(function (xhr, status, error) {
        alert(error);
        var s = status;
        var e = error;
    });
    return result; 
}

function construirGrilla(data) {
    var grd = $('#gridProductos');
    grd.html("");
    var tbl = $('<table border=1></table>');


    var header = $('<tr></tr>');
    header.append('<td>Id</td>');
    header.append('<td>Nombre</td>');
    header.append('<td>Descripcion</td>');
    header.append('<td>Precio</td>');
    header.append('<td>Stock</td>');

    tbl.append(header);


    for (d in data) {
        var row = $('<tr class="jqClickeable"></tr>');
        row.append('<td>' + data[d].Id + '</td>');
        row.append('<td>' + data[d].Nombre + '</td>');
        row.append('<td>' + data[d].Descripcion + '</td>');
        row.append('<td>' + data[d].Precio + '</td>');
        row.append('<td>' + data[d].Stock + '</td>');

        tbl.append(row);
    }

    grd.append(tbl);
    $('.jqClickeable').click(function () { mostrarElemento($(this)); });

}

function mostrarElemento(elem) {
    $('#id').val(elem.children().eq(0).text());
    $('#name').val(elem.children().eq(1).text());
    $('#description').val(elem.children().eq(2).text());
    $('#price').val(elem.children().eq(3).text());
    $('#stock').val(elem.children().eq(4).text());

    $('#save').val("Modificar");
}
