import { useQuery } from "@urql/vue";

const executeQuery = async (query, variables) => {
  try {
    const result = await useQuery({
      query: query,
      variables: variables,
    });
    return {
      data: result.data.value,
      error: result.error,
    };
  } catch (err) {
    return {
      data: null,
      error: err.message,
    };
  }
};

const executeMutation = async (mutationObj, variables) => {
  try {
    const result = await mutationObj.executeMutation(variables);
    return {
      data: result.data.value,
      error: result.error,
    };
  } catch (err) {
    return {
      data: null,
      error: err.message,
    };
  }
};

export { executeQuery, executeMutation };
