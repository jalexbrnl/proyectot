function consumoApi() {
    var edad = document.getElementById('edad').value;
    var genero = document.getElementById('genero').value;
    var hipertenso = document.getElementById('hipertenso').value;
    var corazon = document.getElementById('corazon').value;
    var casado = document.getElementById('casado').value;
    var trabajo = document.getElementById('trabajo').value;
    var residencia = document.getElementById('residencia').value;
    var glucosa = document.getElementById('glucosa').value;
    var imc = document.getElementById('imc').value;
    var fumador = document.getElementById('fumador').value;

    //Endpoint http://127.0.0.1:5000/???
    var datos = {
        'edad': edad,
        'genero': edad,
        'hipertenso': hipertenso,
        'corazon': corazon,
        'casado': casado,
        'trabajo': trabajo,
        'residencia': residencia,
        'glucosa': glucosa,
        'imc': imc,
        'fumador': fumador,
    }
    fetch('http://127.0.0.1:5000/prediccion', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(datos)
    })
        .then(response => response.json())
        .then(data => {
            alert(data.prediction)
        })
        .catch((error) => {
            alert('Error:', error);
        });
