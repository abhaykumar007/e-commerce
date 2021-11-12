import React from "react";

export default function LeftNavBar() {
  return (
    <div className="leftNavBar">
      <div className="header">
        <strong>
          <a href="">FILTER</a>
        </strong>

        <a href="">CLEAR ALL</a>
      </div>

      {/* categories */}
      <div className="categories">
        <div className="first">
          <strong>
            <a href="">CATEGORIES</a>
          </strong>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">Kurtas</a>
          <a href="">(7317)</a>
        </div>
        <div className="component">
          <input type="checkbox" />
          <a href="">Kurta Sets</a>
          <a href="">(31)</a>
        </div>
      </div>

      {/* Brand */}
      <div className="categories">
        <div className="first brand">
          <strong>
            <a href="">BRAND</a>
          </strong>

          <i className="fas fa-search"></i>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">Anouk</a>
          <a href="">(698)</a>
        </div>
        <div className="component">
          <input type="checkbox" />
          <a href="">HERE&NOW</a>
          <a href="">(532)</a>
        </div>
        <div className="component">
          <input type="checkbox" />
          <a href="">Vishudh</a>
          <a href="">(490)</a>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">Sangira</a>
          <a href="">(466)</a>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">AHIKA</a>
          <a href="">(434)</a>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">IMARA</a>
          <a href="">(404)</a>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">Karigari</a>
          <a href="">(378)</a>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">AURELIA</a>
          <a href="">(341)</a>
        </div>
      </div>

      {/* Price */}
      <div className="categories">
        <div className="first">
          <strong>
            <a href="">PRICE</a>
          </strong>
        </div>

        <div className="component">
          <input type="checkbox" />
          <a href="">Rs 239 to Rs 5180</a>
          <a href="">(32497)</a>
        </div>
        <div className="component">
          <input type="checkbox" />
          <a href="">Rs 5180 to Rs 10121</a>
          <a href="">(46)</a>
        </div>
      </div>

      <div className="categories">
        <div className="first">
          <strong>
            <a href="">DISCOUNT RANGE</a>
          </strong>
        </div>

        <div className="component">
          <input type="radio" />
          <a href="">10% and above</a>
        </div>
        <div className="component">
          <input type="radio" />
          <a href="">20% and above</a>
        </div>
        <div className="component">
          <input type="radio" />
          <a href="">30% and above</a>
        </div>
        <div className="component">
          <input type="radio" />
          <a href="">40% and above</a>
        </div>
        <div className="component">
          <input type="radio" />
          <a href="">50% and above</a>
        </div>
        <div className="component">
          <input type="radio" />
          <a href="">60% and above</a>
        </div>
        <div className="component">
          <input type="radio" />
          <a href="">70% and above</a>
        </div>
        <div className="component">
          <input type="radio" />
          <a href="">80% and above</a>
        </div>
      </div>
    </div>
  );
}
