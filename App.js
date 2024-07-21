// BASIC REACT
const h = React.createElement("h1", {}, "Hello React");
// (h) - It's an object
// React.createElement("", {}, ""); - creates an object
// ("h1",{},"") - Props
// {} - attributes to tag. Ex: {id: "heading"} - For h1 tag in browser, id becomes heading
// "Hello React" - children

console.log(h);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(h);
// takes object(h) & creates <h1> tag that browser understands, puts it under "root"

// NESTED (COMPLEX) HTML STRUCTURE

/* <div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
  </div>
</div> */
//  For above structure,
const parent1 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child1" },
    React.createElement("h1", {}, "I'm h1 tag")
  )
);
root.render(parent1);

// Siblings :
/* <div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div> */
//  For above structure,
const parent2 = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);
root.render(parent2);

// TWO NESTED CHILDS (COMPLEX)
/* <div id="parent">
  <div id="child1">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
  <div id="child2">
    <h3>I'm h3 tag</h3>
    <h4>I'm h4 tag</h4>
  </div>
</div> */
//  For above structure,
const parent3 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", {}, "I'm h3 tag"),
    React.createElement("h4", {}, "I'm h4 tag"),
  ]),
]);
root.render(parent3);

// Note: "render()" - WORKED ONLY FOR THE LAST ONE (LATEST)
