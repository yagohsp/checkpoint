const getDocReference = async (reference, object) => {
  const data = await reference.get();
  return object ? data : data?.data();
};

export { getDocReference };
