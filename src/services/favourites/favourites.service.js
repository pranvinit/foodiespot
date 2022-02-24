import AsyncStorage from "@react-native-async-storage/async-storage";

// storing favorites list locally
export const storeFavourites = async (user, favourites) => {
  try {
    const jsonFavourites = JSON.stringify(favourites);
    await AsyncStorage.setItem(`@${user.uid}_favourites`, jsonFavourites);
  } catch (e) {
    console.log(e);
  }
};

// reteriving favourites list
export const getFavourites = async (user) => {
  try {
    const jsonFavourites = await AsyncStorage.getItem(
      `@${user.uid}_favourites`
    );
    if (jsonFavourites !== null) {
      return JSON.parse(jsonFavourites);
    }
  } catch (e) {
    console.log(e);
  }
};
