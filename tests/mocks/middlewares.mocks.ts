const mockReq: any = {
  query: "",
  body: "",
  params: "",
};

const mockRes: any = {
  send: jest.fn(() => mockRes),
  status: jest.fn(() => mockRes),
  json: jest.fn(() => mockRes),
};

export {
  mockReq,
  mockRes,
};
