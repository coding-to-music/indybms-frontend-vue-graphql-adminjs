const GetSuggestions = async (searchText) => {
  let result;
  try {
    const rawResult = await searchLocation(searchText);
    result = rawResult.map((res) => {
      return {
        id: res.place_id,
        value: res.description,
      };
    });
  } catch (err) {
    console.log("An error occurred", err);
    result = null;
  }
  return result;
};

const searchLocation = async (val) => {
  let promise = await new Promise((resolve, reject) => {
    var displaySuggestions = (predictions, status) => {
      if (status !== google.maps.places.PlacesServiceStatus.OK) {
        reject(status);
      }
      resolve(predictions);
    };

    var service = new google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      {
        input: val,
        types: ["geocode"],
      },
      displaySuggestions
    );
  }).catch(function (err) {
    throw err;
  });

  return promise;
};

export { GetSuggestions };
