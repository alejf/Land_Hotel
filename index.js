const express = require('express');
const app = express();
const port = process.env.PORT || 8082;
const axios = require('axios');
app.set('view engine', 'hbs');



//app.use(express.static(__dirname + '/src'));







app.use(express.static('src'));   //midleware para servir archivos estaticos
app.get('/', (req, res) => {   
    res.sendFile(path.join(__dirname, 'index.html'));
  
});

app.get('/bar', (req, res) => {
    const query = req.query;
    

    /////
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
    .then(response => {
      const apiResponse = response.data;
    // let lugar = apiResponse.location.name;
     res.render ('bar',{
      drinks: apiResponse.drinks
  
     });


      console.log (apiResponse);
      console.log(`Current temperature in ${apiResponse.drinks.strDrink} is ${apiResponse.drinks.idDrink}℃`);
    }).catch(error => {
      console.log(error);
    });



});


app.get('/intranet', (req, res) => {
  const query = req.query;
  

  /////
  axios.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
  .then(response => {
    const apiResponse = response.data;
  // let lugar = apiResponse.location.name;
   res.render ('intranet',{
    drinks: apiResponse.drinks

   });


    console.log (apiResponse);
    console.log(`Current temperature in ${apiResponse.drinks.strDrink} is ${apiResponse.drinks.idDrink}℃`);
  }).catch(error => {
    console.log(error);
  });



});

app.get('/temperatura', (req, res) => { 
    res.sendFile(path.join(__dirname, 'temperatura.js'));

});




    


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
