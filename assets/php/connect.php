<?php
// Configurações do banco de dados
// $host = 'newsletter-exemplifiqui.c1iccz3gz8vt.us-east-1.rds.amazonaws.com:3306';
$host = getenv('DB_HOST');
// $usuario = 'admin'; //REMOVER AS CREDENCIAIS ANTES DE DAR PUSH NO REPOSITÓRIO.
$usuario = getenv('DB_USER');
// $senha = 'Mini1000'; //REMOVER AS CREDENCIAIS ANTES DE DAR PUSH NO REPOSITÓRIO.
$senha = getenv('DB_PASSWORD');
$banco = 'exemplifiqui'; //REMOVER AS CREDENCIAIS ANTES DE DAR PUSH NO REPOSITÓRIO.
// SUBSTITUIR AS VARIÁVEIS DE AMBIENTE PELAS CREDENCIAIS DO BANCO PARA EXECUTAR LOCALMENTE
?>