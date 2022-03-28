import 'dotenv/config';
import {MongoClient} from 'mongodb';

const uri = `${process.env.URI_TEST}`

let connection: MongoClient;
let db: {collection: (arg0: string) => any;};

beforeAll(async () => {
  connection = await MongoClient.connect(uri);
  db = connection.db();
});

beforeEach(async () => {
  await db.collection('incomes').deleteMany({});
});

afterAll(async () => {
  await connection.close()
});

it('Should insert a income collection', async () => {
  const incomes = db.collection('incomes');

  const mockIncome = {
    _id: 'some-income-id',
    title: 'Any title',
    value: 5000,
    date: '25/01/2021'
  };

  await incomes.insertOne(mockIncome);

  const insertedIncome = await incomes.findOne({
    _id: 'some-income-id'
  })

  expect(insertedIncome).toEqual(mockIncome)
});





