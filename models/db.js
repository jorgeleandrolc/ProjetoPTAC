const Sequelize = require('sequelize');
const sequelize = new Sequelize('fdbscmuv','fdbscmuv','Jzzkt79nXsgvzxGRBD4HaA8taYm-k9Yf',{
  host:'kesavan.db.elephantsql.com',
  dialect:'postgres',
    define: {
    charset:'utf8',
    collate: 'utf8_general_cli',
    timestamps: true
    },
  logging:false
})

// 

sequelize.authenticate().then(function (err) {
  console.log('conexao com sucesso!');

}).catch(function(err){
  console.log("Não rodou")
})

