<?php
require_once('connect.php');

// Configurações de conexão com o PlanetScale
$hostURL = $host;
$databaseName = $banco;
$user = $usuario;
$dbP = $senha;


$dsn = 'mysql:host=' . $hostURL . ';dbname=' . $databaseName . ';port=3306';
$options = array(
    PDO::MYSQL_ATTR_SSL_CA => '/etc/ssl/cert.pem',
    PDO::MYSQL_ATTR_SSL_VERIFY_SERVER_CERT => false,
);

// Conexão com o banco de dados usando PDO
try {
    $db = new PDO($dsn, $user, $dbP, $options);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $error) {
    echo "Falha ao conectar ao banco de dados: " . $error->getMessage();
}

// Processar o formulário quando for enviado
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Captura os dados do formulário
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Consulta SQL para verificar se o usuário existe
    $sql = "SELECT * FROM usuario_comum WHERE nome_de_usuario = :username AND senha_criptografada = :password";
    $stmt = $db->prepare($sql);
    $stmt->bindParam(':username', $username, PDO::PARAM_STR);
    $stmt->bindParam(':password', $password, PDO::PARAM_STR);
    $stmt->execute();

    // Verifica se a consulta retornou algum resultado
    if ($stmt->rowCount() == 1) {
        // Usuário autenticado com sucesso
        echo "Login realizado com sucesso!";
        // Redireciona para a tela de painel de controle
        echo "<script>window.location.href = '../../api/control-panel.php';</script>";

        exit(); // Certifique-se de terminar a execução do script após o redirecionamento
    } else {
        // Usuário inválido
        echo "<script src='../assets/js/error.js'></script>";
        $error_message = "Nome de usuário ou senha incorretos.";
    }
}

// Não é mais necessário fechar a conexão explicitamente com PDO, pois é fechada automaticamente quando o script termina.
?>