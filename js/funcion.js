function alertaEnviado() {
    Swal.fire(
        'Cotización registrada!',
        'La cotización N° 00001 fue ingresada de forma correcta',
        'success',
    )
}

function alertaModificar() {
    Swal.fire(
        'Cotización modificada!',
        'La cotización N° 00001 fue modificada de forma correcta',
        'success',
    )
}

function alertaGuardarContr() {
    Swal.fire(
        'Registro guardado!',
        'El contratista fue registrado de forma correcta',
        'success',
    )
}

function alertaGuardarProv() {
    Swal.fire(
        'Registro guardado!',
        'El Proveedor fue registrado de forma correcta',
        'success',
    )
}

$("#dataTable").dataTable({
    language: {
        sProcessing: "Procesando...",
        sLengthMenu: "Mostrar _MENU_ Registros",
        sZeroRecords: "No se encontraron resultados",
        sEmptyTable: "Ningún pedido disponible en esta Consulta",
        sInfo:
            "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        sInfoEmpty: "Mostrando registros del 0 al 0 de un total de 0 registros",
        sInfoFiltered: "(filtrado de un total de _MAX_ registros)",
        sInfoPostFix: "",
        sSearch: "Buscar:",
        sUrl: "",
        sInfoThousands: ",",
        sLoadingRecords: "Cargando...",
        oPaginate: {
            sFirst: "Primero",
            sLast: "Último",
            sNext: "Siguiente",
            sPrevious: "Anterior",
        },
        oAria: {
            sSortAscending:
                ": Activar para ordenar la columna de manera ascendente",
            sSortDescending:
                ": Activar para ordenar la columna de manera descendente",
        },
        buttons: {
            copy: "Copiar",
            colvis: "Visibilidad",
        },
    },
});


function Login() {
    var done = 0;
    var usuario = document.login.exampleUser.value;
    var password = document.login.exampleInputPassword.value;
    if (usuario == "proveedor" && password == "12345") {
        window.location = "../html/index.html";
    }
    if (usuario == "admin" && password == "12345") {
        window.location = "../html/index_admin.html";
    }
    if (usuario == "" && password == "") {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'No fueron ingresados los datos de forma correcta, por favor validar!'
        })
    }
}

document.oncontextmenu = function () { return false }
