// CardContainer.jsx

const m = require("mithril");

const CardContainer = {
  view: ({ children }) => {
    return (
      <div class="card-container">
        {children}
      </div>
    )
  }
};

export default CardContainer;