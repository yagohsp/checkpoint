const getDocReference = async (reference) => {
  const data = await reference.get();
  return data?.data();
};

export { getDocReference };
