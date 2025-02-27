// reimplement JS map function using plain js
// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   function getFullName(item) {
//     return [item.firstname,item.lastname].join(" ");
//   }
// console.log(persons.map((person)=>{
//     return getFullName(persons);
// }))
// This logs Malcom Reynolds,Kaylee Frye,Jayne Cobb

function myMap(collection, iteratee, context) {
      const result = [];

      for (let i = 0; i < collection.length; i++) {
            const item = collection[i];
            result.push(iteratee.call(context, item, i, collection));
      }

      return result;

}

module.exports = { myMap };


