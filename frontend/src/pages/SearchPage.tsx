import { UseSearchRestaurants } from "@/api/RestaurantApi"
import CuisineFilter from "@/components/CuisinesFilter"
import PaginationSelector from "@/components/PaginationSelector"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import SearchResultCard from "@/components/SearchResultCard"
import SearchResultInfo from "@/components/SearchResultInfo"
import { useState } from "react"
import { useParams } from "react-router-dom"

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[];
}

const SearchPage = () => {
  const { city } = useParams()

  const [searchState, setSearchState] = useState<SearchState>({
    searchQuery: "",
    page: 1,
    selectedCuisines: [],
  })

  const [isExpanded, setIsExpanded] = useState<boolean>(false)

  const { results, isLoading } = UseSearchRestaurants(searchState, city)
  
  const setSelectedCuisines = (selectedCuisines: string[]) => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedCuisines,
      page: 1,
    }))
  }

  const setPage = (page: number) => {
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }))
  }

  const setSearchQuery = (searchFormData: SearchForm) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }))
  }

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: "",
      page: 1,
    }))
  }

  if(isLoading) {
    <span>Loading...</span>
  }

  if(!results?.data || !city) {
    return <span>No results found</span>
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
      <div id="cuisines-list">
        <CuisineFilter 
          selectedCuisines={searchState.selectedCuisines} 
          onChange={setSelectedCuisines} 
          isExpanded={isExpanded}
          onExpandedClick={() => setIsExpanded((prev) => !prev)}
        />
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar searchQuery={searchState.searchQuery} onSubmit={setSearchQuery} placeHolder="Search by cuisine or restaurant name" onReset={resetSearch} />
        <SearchResultInfo total={results.pagination.total} city={city} />
        {results.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} />
        ))}
        <PaginationSelector 
          page={results.pagination.page}
          pages={results.pagination.pages} 
          onPageChange={setPage}
        />
      </div>
    </div>
  )
}

export default SearchPage