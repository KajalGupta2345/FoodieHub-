// AboutSection.jsx
export default function AboutSection() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto mt-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-extrabold text-orange-400 mb-4">
          About Recipe Share
        </h2>
        <div className="w-96 h-1 bg-orange-400 mx-auto mb-6 rounded"></div>

        {/* Tagline */}
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          RecipeShare is a community-driven platform where every home cook can share 
          their favorite dishes and explore new recipes from others.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center ">
            <span className="text-5xl mb-3">🍲</span>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Add Your Recipe</h3>
            <p className="text-gray-700">
              Quickly upload ingredients, steps, and photos from your kitchen.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center ">
            <span className="text-5xl mb-3">🥗</span>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Discover Recipes</h3>
            <p className="text-gray-700">
              Browse and try dishes shared by other home cooks in our community.
            </p>
          </div>

          <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center ">
            <span className="text-5xl mb-3">💬</span>
            <h3 className="text-xl font-bold text-orange-400 mb-2">Get Feedback</h3>
            <p className="text-gray-700">
              Rate, comment, and interact with other cooks to improve your dishes.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="/create-recipe"
            className="bg-orange-400 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:bg-orange-500 transition"
          >
            ➕ Add Your Recipe Now
          </a>
        </div>

        {/* Dish Collage / Images */}
         <h3 className="text-4xl font-extrabold text-orange-400 mb-4 mt-10">
          Popular Dishes
        </h3>
          <div className="w-96 h-1 bg-orange-400 mx-auto mb-6 rounded"></div>
        <div className="grid grid-cols-2 gap-4 mt-12 sm:grid-cols-4">
          <img
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/06/burger-with-melted-cheese.jpg.webp"
            alt="Dish 1"
            className="w-full h-32 sm:h-48 object-cover rounded-lg"
          />
          <img
            src="https://www.foodiesfeed.com/wp-content/uploads/2023/08/crunchy-pizza-rolls.jpg.webp"
            alt="Dish 2"
            className="w-full h-32 sm:h-48 object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2022/03/19/12/33/side-dish-7078451_1280.jpg"
            alt="Dish 3"
            className="w-full h-32 sm:h-48 object-cover rounded-lg"
          />
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/19/00/bread-1836411_1280.jpg"
            alt="Dish 4"
            className="w-full h-32 sm:h-48 object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}


