<?php
// Configurações do banco de dados

$host = getenv('DB_HOST');
$usuario = getenv('DB_USER');
$senha = getenv('DB_PASSWORD');
$banco = 'usuarios';
// Conexão com o banco de dados
$conexao = mysqli_connect($host, $usuario, $senha, $banco);

// Verifica se houve erro na conexão
if (mysqli_connect_errno()) {
    echo "Falha ao conectar ao banco de dados: " . mysqli_connect_error();
}

// Processar o formulário quando for enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Consulta SQL para verificar se o usuário existe
    $sql = "SELECT * FROM usuario_comum WHERE nome_de_usuario = '$username' AND senha_criptografada = '$password'";
    $resultado = mysqli_query($conexao, $sql);


    // Verifica se a consulta retornou algum resultado
    if (mysqli_num_rows($resultado) == 1) {
        // Redireciona para a tela de painel de controle
        echo "<script>window.location.href = '../../api/index.php';</script>";
        // Usuário autenticado com sucesso
        echo "Login realizado com sucesso!";

        exit(); // Certifique-se de terminar a execução do script após o redirecionamento
    } else {
        // Usuário inválido
        echo "Nome de usuário ou senha incorretos.";
    }

    // Fecha a conexão com o banco de dados
    mysqli_close($conexao);
}
?>