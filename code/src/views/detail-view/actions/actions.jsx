import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../../core/store/reducer/products/products.thunk';
import './actions.scss';

function Actions() {
  const dispatch = useDispatch();
  const { productSelected } = useSelector((state) => state.products);

  const [colorSelected, setColorSelected] = useState(null);
  const [storageSelected, setStorageSelected] = useState(null);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  function handleChangeColor(event) {
    setColorSelected(parseInt(event.target.value, 10));
  }

  function handleChangeStorage(event) {
    setStorageSelected(parseInt(event.target.value, 10));
  }

  function handleAddProductToCart() {
    dispatch(
      addProductToCart(productSelected.id, colorSelected, storageSelected),
    );
  }

  useEffect(() => {
    if (productSelected) {
      setStorageSelected(productSelected.options.storages[0].code);
      setColorSelected(productSelected.options.colors[0].code);
    }
  }, productSelected);

  useEffect(() => {
    // Si tenemos los dos valores seleccionados, activamos el button
    if (colorSelected && storageSelected) {
      setButtonDisabled(false);
    }
  }, [colorSelected, storageSelected]);

  return (
    <div className="actions">
      <div className="actions__select">
        <div className="actions__select--color">
          <label>Color</label>
          <select value={colorSelected} onChange={handleChangeColor}>
            {productSelected.options.colors.map((storage) => (
              <option key={storage.code} value={storage.code}>
                {storage.name}
              </option>
            ))}
          </select>
        </div>
        <div className="actions__select--storage">
          <label>Almacenamiento</label>
          <select value={storageSelected} onChange={handleChangeStorage}>
            {productSelected.options.storages.map((storage) => (
              <option key={storage.code} value={storage.code}>
                {storage.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="actions__add">
        <button
          className="button"
          onClick={handleAddProductToCart}
          disabled={buttonDisabled}
        >
          Añadir
        </button>
      </div>
    </div>
  );
}

export default Actions;
