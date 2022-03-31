// Sort an array of objects in ascending order by key-value pair
const contactsData = [{ "id": 1, "first_name": "Evelin", "last_name": "Minchindon", "phone": "(841) 4526843" },
{ "id": 2, "first_name": "Pebrook", "last_name": "Murrthum", "phone": "(801) 9609340" },
{ "id": 3, "first_name": "Arman", "last_name": "Llewellyn", "phone": "(295) 2479575" },
{ "id": 4, "first_name": "Sawyer", "last_name": "Clempton", "phone": "(363) 4946732" },
{ "id": 5, "first_name": "Brandy", "last_name": "Creus", "phone": "(392) 6441829" },
{ "id": 6, "first_name": "Marcia", "last_name": "Redmile", "phone": "(999) 2151161" },
{ "id": 7, "first_name": "Myles", "last_name": "Sparrowe", "phone": "(228) 3244125" },
{ "id": 8, "first_name": "Yule", "last_name": "Lummis", "phone": "(218) 3785408" },
{ "id": 9, "first_name": "Melina", "last_name": "Scholfield", "phone": "(964) 9076201" },
{ "id": 10, "first_name": "Oliy", "last_name": "Goggin", "phone": "(704) 2164565" }];

const sortData = (arr) => {
  arr = arr.sort((a, b) => {
    if (a.first_name < b.first_name) return -1;
    if (a.first_name > b.first_name) return 1;
    return 0;
  })
  return arr;
}

console.log(sortData(contactsData));
