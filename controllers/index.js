 const firstPersonFunction = (req, res, next) => {
     res.json('Ingrid Torrecilla');
 };

 const secondPersonFunction = (req, res, next) => {
     res.json('Odette Flores');
 };

 module.exports = { firstPersonFunction, secondPersonFunction };