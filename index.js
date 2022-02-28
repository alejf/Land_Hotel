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


app.get('/intra', (req, res) => {
  const query = req.query;
  

  /////
  axios.get('http://127.0.0.1:8082/habitaciones')
  .then(response => {
    const apiResponse = response.data;
  
   res.render ('intra',{
    habitaciones: apiResponse.habitaciones

   });


    console.log (apiResponse);
 
  }).catch(error => {
    console.log(error);
  });



});

app.get('/temperatura', (req, res) => { 
    res.sendFile(path.join(__dirname, 'temperatura.js'));

});

app.get('/habitaciones', (req, res) => {
  res.json({
    habitaciones: [
      {
        id: 1,
        nombre: 'Habitacion 1',
        descripcion: 'Habitacion 1',
        camas: '2 individuales',
        huespedes: 'max 2',
        balcon: 'si',
        disponible: 'si',

      },
      {
        id: 2,
        nombre: 'Habitacion 2',
        descripcion: 'Habitacion 2',
        camas: '1 Queen',
        huespedes: 'max 2',
        balcon: 'no',
        disponible: 'no',
      },
      {
        id: 3,
        nombre: 'Habitacion 3',
        descripcion: 'Habitacion 3',
        camas: '1 king size',
        huespedes: 'max 3',
        balcon: 'no',
        disponible: 'si',
      },
      {
        id: 4,
        nombre: 'Habitacion 4',
        descripcion: 'Habitacion 4',
        camas: '2 matrimoniales',
        huespedes: 'max 4',
        balcon: 'no',
        disponible: 'no',
      }
    ]
  });
});

app.get('/habitaciones/:id', (req, res) => {
  const {id} = req.params;
  res.json({
    habitaciones: [
      {
        id: 1,
        nombre: 'Habitacion 1',
        descripcion: 'Habitacion 1',
        camas: '2 individuales',
        huespedes: 'max 2',
        balcon: 'si',
        disponible: 'si',

      },
      {
        id: 2,
        nombre: 'Habitacion 2',
        descripcion: 'Habitacion 2',
        camas: '1 Queen',
        huespedes: 'max 2',
        balcon: 'no',
        disponible: 'no',
      },
      {
        id: 3,
        nombre: 'Habitacion 3',
        descripcion: 'Habitacion 3',
        camas: '1 king size',
        huespedes: 'max 3',
        balcon: 'no',
        disponible: 'si',
      },
      {
        id: 4,
        nombre: 'Habitacion 4',
        descripcion: 'Habitacion 4',
        camas: '2 matrimoniales',
        huespedes: 'max 4',
        balcon: 'no',
        disponible: 'no',
      }
    ]
  });
}); 

app.get('/bebida/:id', (req, res) => {
  const {id} = req.params;
  console.log(id);

 /////
 axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='+id)
 .then(response => {
   const apiResponse = response.data;
 // let lugar = apiResponse.location.name;
  res.render ('bebida',{
   drinks: apiResponse.drinks

  });


   console.log (apiResponse);
  
 }).catch(error => {
   console.log(error);
 });


}); 




    


app.listen(port, () => console.log(`Example app listening on port ${port}!`));
