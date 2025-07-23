export const processUserHandler = async (event) => {
  // console.log("Processing user data:", event);

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "User processed" }),
  };
};
