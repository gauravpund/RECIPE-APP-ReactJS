import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../../context";

const Details = () => {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorite,
    favoritesList,
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
      );
      const data = await response.json();
      console.log("Data recipe=" + data);
      if (data?.data) {
        setRecipeDetailsData(data?.data);
      }
    }
    getRecipeDetails();
  }, []);

  return (
    <div className="container mx-auto py-10 px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="row-start-1 lg:row-auto">
        <div className="h-96 overflow-hidden rounded-xl group relative shadow-lg">
          <img
            src={recipeDetailsData?.recipe?.image_url}
            alt="recipe"
            className="w-full h-full object-cover block group-hover:scale-105 duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
          <span className="absolute bottom-3 left-3 text-white text-sm bg-black/70 px-2 py-1 rounded">
            {recipeDetailsData?.recipe?.publisher}
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h3 className="font-bold text-3xl truncate text-black">
          {recipeDetailsData?.recipe?.title}
        </h3>
        <button
          onClick={() => handleAddToFavorite(recipeDetailsData?.recipe)}
          className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider inline-block shadow-md bg-cyan-700 hover:bg-cyan-800 text-white">
          {favoritesList &&
          favoritesList.length > 0 &&
          favoritesList.findIndex(
            (item) => item.id === recipeDetailsData?.recipe?.id
          ) !== -1
            ? "Remove from favorites"
            : "Add to favorites"}
        </button>
        <div>
          <span className="text-2xl font-semibold text-black">Ingredients</span>
          <ul className="flex flex-col gap-3 mt-3">
            {recipeDetailsData?.recipe?.ingredients.map((ingredient, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-lg font-medium text-gray-800">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-lg font-medium text-gray-800">
                  {ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Details;
