import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

import { GcdsPagination } from '@cdssnc/gcds-components-react'

import RecipesList from '../Components/RecipesList'
import recipes from '../data/recipes.json'

const Recipes = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const recipesPerPage = 4
  const totalPages = Math.ceil(recipes.length / recipesPerPage)

  // Handle page changes
  const onPageChange = (pageNumber) => {
    const selectedPage = pageNumber.target.innerHTML

    if (selectedPage.indexOf("Previous") !== -1) {
      const previousPage = parseFloat(currentPage) - 1

      setCurrentPage(previousPage)
    } else if (selectedPage.indexOf("Next") !== -1) {
      const nextPage = parseFloat(currentPage) + 1

      setCurrentPage(nextPage)
    } else {
      setCurrentPage(selectedPage)
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Helmet>
        <title>Recipes</title>
      </Helmet>

      <h1 className="lg:mt-500 mt-300 mb-400">Recipes</h1>

      <RecipesList
        recipes={recipes}
        currentPage={currentPage}
        recipesPerPage={recipesPerPage}
      />

      <GcdsPagination
        display="list"
        label="List pagination"
        type="list"
        totalPages={totalPages}
        currentPage={currentPage}
        pageChangeHandler={onPageChange}
      />
    </div>
  );
};

export default Recipes;