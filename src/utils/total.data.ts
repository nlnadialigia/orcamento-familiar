
async function TotalData(data: any) {
  let totalData = 0;

  for (let i = 0; i < data.length; i++) {
    const element = data[i];
    totalData += element.value;
  }

  return totalData;
}

export { TotalData };

