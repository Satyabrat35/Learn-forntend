/*<body>
  <div id="root" class="container"></div>
</body>
add this to ur html code
*/
const CARS = [
 { year: 2013, model: "A", price: 32000 },
 { year: 2011, model: "B", price: 4400 },
 { year: 2016, model: "B", price: 15500 }
];

const TRUCKS = [
 { year: 2014, model: "D", price: 18000 },
 { year: 2013, model: "E", price: 5200  }
];

const CONVERTIBLES = [
 { year: 2009, model: "F", price: 2000 },
 { year: 2010, model: "G", price: 6000 },
 { year: 2012, model: "H", price: 12500 },
 { year: 2017, model: "M", price: 50000 }
];
 
function Header() {
  return(
    <div>
      <h2>Welcome to React Transportation</h2>
      The best place to buy vehicles online
      <h2>Choose Options</h2>
      <div>
        New Only 
        <input id="coding" name="interest" value="coding" checked="checked" type="checkbox" />
      </div>
      <div>
        <p>Select Type
          <select>
            <option value="All" selected="selected">All</option>
            <option value="Cars">Cars</option>
            <option value="Trucks">Trucks</option>
            <option value="Convertibles">Convertibles</option>
          </select>
        </p>
      </div>
    </div>
  );  
}

function CarItem(props) {
  return (
    <ul>
      <table>
        <tbody><tr>
          <th>Year</th>
          <th>Model</th>
          <th>Price</th>
          <th>Buy</th>
        </tr><tr>
        </tr><tr>
          <td>{props.item.year}</td>
          <td>{props.item.model}</td>
          <td>${props.item.price}</td>
          <td><button>Buy Now</button></td>
        </tr></tbody>
      </table>
    </ul>
  );  
}

function CarList(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      { props.items.map( item => {
        return <CarItem item={item} />
      })}
    </div>
  );  
}

function Body() {
  return (
    <div>
      <CarList items={CARS} title="Cars" />
      <CarList items={TRUCKS} title="Trucks" />
      <CarList items={CONVERTIBLES} title="Convertibles" />
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Body />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)
