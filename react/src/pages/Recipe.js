import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { GcdsDetails } from '@cdssnc/gcds-components-react'

const Recipe = ({ recipes }) => {
  const { url } = useParams()
  const recipe = recipes.find(recipe => recipe.url.toString() === url)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!recipe) {
    return <div>recipe not found.</div>
  }

  return (
    <section>
      <h2 className="lg:mt-500 mt-300 mb-400">{recipe.title}</h2>

      <img
        className="lg:container-md mb-400"
        src={require(`../img/cupcakes/${recipe.url}.jpg`)}
        alt={recipe.image.description}
      />

      <GcdsDetails detailsTitle="Allergy considerations">
        <p className="mb-400">This recipe contains eggs and flour.</p>
        <ul className="container-md list-disc">
          <li className="mb-100">Use apple sauce or mashed bananas if you are allergic to eggs.</li>
          <li className="mb-100">Use gluten free flour if you are allergic to gluten.</li>
        </ul>
      </GcdsDetails>

      <h3 className="mt-500 mb-400">Details</h3>
      <ul className="container-md list-disc">
        <li className="mb-100">Prep time: {recipe.details.prep}</li>
        <li className="mb-100">Cook time: {recipe.details.cook}</li>
      </ul>

      <h3 className="mt-500 mb-400">Ingredients</h3>
      <ul className="container-md list-disc">
        {recipe.content.ingredients.map((ingredient, index) => (
          <li className="mb-100" key={index}>{ingredient}</li>
        ))}
      </ul>

      <h3 className="mt-500 mb-400">Instructions</h3>
      <ul className="container-md list-disc mb-400">
        {recipe.content.instructions.map((instruction, index) => (
          <li className="mb-100" key={index}>{instruction}</li>
        ))}
      </ul>
    </section>
  );
};

export default Recipe;