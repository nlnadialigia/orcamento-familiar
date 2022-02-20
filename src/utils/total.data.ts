
async function TotalData(data: any) {
  let totalData = 0;

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    totalData += element.value;
  }

  return totalData;
}

// async function ExpensesByCategory(data:any, types:any) {
//   types.forEach(type => {
//     data.forEach(element => {
//       array
//     });
//   });
// }

export { TotalData };

