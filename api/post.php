<?php



if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Verifica se o formulário foi submetido

    // Verifica se os campos obrigatórios estão definidos no POST
    if (isset($_POST['titulo']) && isset($_POST['imagem_url']) && isset($_POST['conteudo'])) {
        $titulo = $_POST['titulo'];
        $imagem_url = $_POST['imagem_url'];
        $conteudoHtml = $_POST['conteudo'];

        require_once('../assets/php/connect.php'); // Substitua pelo caminho correto

        $conn = new mysqli($host, $usuario, $senha, $banco);

        if ($conn->connect_error) {
            die('Erro na conexão com o banco de dados: ' . $conn->connect_error);
        }

        // Preparar a instrução SQL com marcadores de posição
        $sql = "INSERT INTO conteudo_site (titulo_post, imagem_post, conteudo_post) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sss", $titulo, $imagem_url, $conteudoHtml);


        // Executar a instrução SQL
        if ($stmt->execute()) {
            // Redirecionar para a mesma página após o envio
            echo '<script>window.location = "' . $_SERVER['PHP_SELF'] . '";</script>';
            exit(); // Certifique-se de sair após o redirecionamento
        } else {
            echo "Erro ao enviar os dados: " . $stmt->error;
        }

        // Fechar a conexão
        $stmt->close();
        $conn->close();
    } else {
        echo "Campos obrigatórios não estão definidos no POST.";
    }
} else {
    echo "O formulário não foi submetido.";
}
?>