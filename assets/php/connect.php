<?php
// Configurações do banco de dados
// $host = 'aws.connect.psdb.cloud';
// $usuario = 'o6hpbqzg0eoxsn3nwrar'; //REMOVER AS CREDENCIAIS ANTES DE DAR PUSH NO REPOSITÓRIO.
// $senha = 'pscale_pw_ER9ns7YXMm93xQ0QMKJqITB913bwdvk1JCUFj7R0rE1'; //REMOVER AS CREDENCIAIS ANTES DE DAR PUSH NO REPOSITÓRIO.
$banco = 'exemplifiqui-db'; //REMOVER AS CREDENCIAIS ANTES DE DAR PUSH NO REPOSITÓRIO.



$host = getenv('DB_HOST');
$usuario = getenv('DB_USER');
$senha = getenv('DB_PASSWORD');
// SUBSTITUIR AS VARIÁVEIS DE AMBIENTE PELAS CREDENCIAIS DO BANCO PARA EXECUTAR LOCALMENTE
?>