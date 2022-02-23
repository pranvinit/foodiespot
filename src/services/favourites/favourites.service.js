import AsyncStorage from "@react-native-async-storage/async-storage";

// storing favorites list locally
export const storeFavourites = async (favourites) => {
  try {
    const jsonFavourites = JSON.stringify(favourites);
    await AsyncStorage.setItem("@favourites", jsonFavourites);
  } catch (e) {
    console.log(e);
  }
};

// reteriving favourites list
export const getFavourites = async () => {
  try {
    const jsonFavourites = await AsyncStorage.getItem("@favourites");
    if (jsonFavourites !== null) {
      return JSON.parse(jsonFavourites);
    }
  } catch (e) {
    console.log(e);
  }
};
