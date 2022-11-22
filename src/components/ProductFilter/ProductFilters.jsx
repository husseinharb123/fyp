import "./ProductFilters.scoped.css";
import {Link} from "react-router-dom";
export default function ProductFilters (){


  return (
    <aside className="product-sidebar show-filter bg-white">
      <div className="title">
        <div className="heading-3">Filters</div>

        <div className="clear-wrapper">
          <Link 
            className="clear-filter"

          >
            Clear
          </Link>
          <button
            className="btn btn-floating btn-secondary"

          >
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div className="filters">
        <div className="filter-wrapper">
          <div className="filter-title">
            Price: &#8377;
          </div>
          <div className="filter-value">
            <div className="filter-price">
              <span>&#8377; 0</span>
              <span> &#8377; 1500 </span>
            </div>
            <input
              type="range"
              list="steplist"
              min="0"
              max="1500"
              step="300"

            />
            <datalist id="steplist">
              <option>0</option>
              <option>300</option>
              <option>600</option>
              <option>900</option>
              <option>1200</option>
              <option>1500</option>
            </datalist>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Category</div>
          <div className="filter-value filter-category">
            <label>
              <input
                type="checkbox"
                value="men"
                
              />{" "}
              Men
            </label>
            <label>
              <input
                type="checkbox"
                value="women"
                
              />{" "}
              Women
            </label>
            <label>
              <input
                type="checkbox"
                value="men & women"
                
              />{" "}
              Men & Women
            </label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Rating</div>
          <div className="filter-value filter-rating">
            <label>
              <input
                type="radio"
                name="rating"
                
              />{" "}
              4 <i className="fa fa-solid fa-star"></i> & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                
              />{" "}
              3 <i className="fa fa-solid fa-star"></i> & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                
              />{" "}
              2 <i className="fa fa-solid fa-star"></i> & above
            </label>
            <label>
              <input
                type="radio"
                name="rating"
                
              />{" "}
              1 <i className="fa fa-solid fa-star"></i> & above
            </label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Sort By</div>
          <div className="filter-value filter-sort">
            <label>
              <input
                type="radio"
                name="sort"
                
        
              />{" "}
              Price - High to Low
            </label>
            <label>
              <input
                type="radio"
                name="sort"
                
              />{" "}
              Price - Low to High
            </label>
          </div>
        </div>

        <div className="filter-wrapper">
          <div className="filter-title">Others</div>
          <div className="filter-value filter-category">
            <label>
              <input
                type="checkbox"
                
              />{" "}
              In Stock
            </label>
            <label>
              <input
                type="checkbox"
                
              />{" "}
              Fast Delivery
            </label>
          </div>
        </div>
      </div>
    </aside>
  );
};

