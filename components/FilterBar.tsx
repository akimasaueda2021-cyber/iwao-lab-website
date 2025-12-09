// components/FilterBar.tsx
type FilterBarProps = {
    category: string;
    year: string;
    query: string;
    categories: string[];
    years: string[];
    onCategoryChange: (value: string) => void;
    onYearChange: (value: string) => void;
    onQueryChange: (value: string) => void;
  };
  
  const FilterBar = ({
    category,
    year,
    query,
    categories,
    years,
    onCategoryChange,
    onYearChange,
    onQueryChange,
  }: FilterBarProps) => {
    return (
      <div className="filter-bar">
        <select
          className="filter-select"
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
        >
          <option value="">すべてのカテゴリ</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
  
        <select
          className="filter-select"
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
        >
          <option value="">すべての年度</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}年度
            </option>
          ))}
        </select>
  
        <input
          className="filter-input"
          type="search"
          placeholder="キーワードで検索"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
        />
      </div>
    );
  };
  
  export default FilterBar;



