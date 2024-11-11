function consumoAPI() {
    name_user = document.getElementById("nombre").value
    last_name_user = document.getElementById("apellido").value
    age_user = document.getElementById("edad").value
    fetch('http://127.0.0.1:5000/enviar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            name: name_user,
            last_name: last_name_user,
            age: age_user
        })
    })
    .then(res => res.json())
    .then(data => alert(`Respuesta:  ${data.datos}, Nombre: ${data.name}, Apellido: ${data.last_name}, Edad: ${data.age}`))
    .catch(err => console.error('Error:', err));
}
