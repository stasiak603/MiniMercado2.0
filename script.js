document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const email = document.getElementById("email").value;
    const agendamento = document.getElementById("agendamento").value;
    const servico = document.querySelector('input[name="servico"]:checked').value;

    if (nome && cpf && email && agendamento && servico) {
        alert(`Cadastro realizado com sucesso!\nServiço: ${servico}`);
    } else {
        alert("Preencha todos os campos obrigatórios.");
    }
});

const cpfInput = document.getElementById('cpf');
const erroCpf = document.getElementById('erro-Cpf');

cpfInput.addEventListener('input',() => {
    const cpfValue = cpfInput.value;
    
    if (cpfValue.lenght > 11) {
        erroCpf.style.display = 'block';
        cpfInput.classList.add('is-invalid');
    } else {
        erroCpf.style.display = 'none';
        cpfInput.classList.remove('is-invalid');
    }
});

document.getElementById('form-cadastro').addEventListener('submit', function (e) {
    if (cpfInput.value.length >11) {
        e.preventDefault();
        alert('O CPF não pode ter mais de 11 dígitos.');
    }
})