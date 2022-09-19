const express = require('express');
const app = express();
const hbs = require('express-handlebars');
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

//Configuração do Handlebars
app.engine('hbs', hbs.engine({
  extname: 'hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs', 'css');

app.use('/layouts/style.css', express.static(__dirname + '/layouts/stle.css'))

app.use(bodyParser.urlencoded({extended:false}));

//Rota inicial
//Renderizar o home.hbs para a aba dentro da tag {{{body}}} no layout
app.get('/', (req, res) => {
  res.render('home');
});

//Rota renderizada para o cad_users
app.get('/cad_users', (req, res) => {
  res.render('cad_users');
});

app.post('/insert_users', (req,res)=>{
  console.log(req.body);
});

//Rota renderizada 

//Ativar o sistema
app.listen(PORT, () => {
  console.log('Servidor rodando em http:localhost:' + PORT);
});
