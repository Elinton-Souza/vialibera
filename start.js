const prompt = require("prompt-sync")()
const fs = require("fs")

console.log("BackpackEngine V2")
let nome = prompt("Coloque o nome do arquivo: ")

let load = `
start src/${nome}.html
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
`

let erro = `
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Erro</title>
</head>
<body>
    <h1>Erro</h1>
    <p>O arquivo ${nome}.html não existe, por favor crie ou inicie o Backpack Engine e escreva um arquivo existente.</p>
</body>
</html>
`
if (fs.existsSync(`./src/${nome}.html`)) {
	fs.writeFileSync("startConfig.bat", load)
} else {
let load = `
start erro.html
start iniciar.bat
exit
`
    fs.writeFileSync("erro.html", erro)
    fs.writeFileSync("startConfig.bat", load)
}