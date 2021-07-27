import React, {useState, useEffect } from 'react';
import {useSelector} from 'react-redux'

var AddToCart = (props) => {
  const skus = useSelector(state => state.updateStyleReducer.selectedStyle.skus)

  const [sizeSelect, setSize] = useState("Size"); // size select is set on submit
  const [qtySelect, setQty] = useState("Qty"); // selected qty used to store qty
  const skusElems = Object.keys(skus).map(sku =>
    <option
      key={sku}
      value={sku}>
        {skus[sku].size}
    </option>
  );
  let qtys = [];
  useEffect(() => {
    if (sizeSelect !== "Size") {
      console.log(sizeSelect + " has " + skus[sizeSelect].quantity)
      qtys = [];
      for (var i=1; i<skus[sizeSelect].quantity+1; i++) {
        qtys.push(<option value={i}> {i} </option>)
      }
      console.log(qtys)
    } else {
      qtys = [];
    }
  }, [sizeSelect])

  return (
    <section id="addToCart">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          console.log(sizeSelect, qtySelect)
        } }>
      <select onChange={(e) => {
        e.preventDefault()
        setSize(e.target.value)
        }}
      name="sizeSelect">
        {skusElems}
      </select>
      <select
        name="qtySelect"
        onChange={(e) => {
          e.preventDefault()
          setQty(e.target.value)
          }}>
        {qtys}
      </select>
      <button type="submit" class="btn-md">Add to Cart</button>
      </form>
    </section>
  )
}

export default AddToCart;