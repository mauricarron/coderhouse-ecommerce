import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BuyerForm = ({ formValues, setFormValues, createOrder }) => {
  const [isEmailValidated, setIsEmailValidated] = useState(false);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (formValues.email !== "" && formValues.email === formValues.email2) {
      setIsEmailValidated(true);
    }
  }, [formValues]);

  return (
    <form onSubmit={createOrder}>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputFullName">Nombre Completo</label>
          <input
            name="name"
            type="text"
            className="form-control"
            id="inputFullName"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPhone">Teléfono</label>
          <input
            name="phone"
            type="tel"
            className="form-control"
            id="inputPhone"
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email"
          name="email"
          className="form-control"
          id="inputEmail"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="inputEmailCheck">Confirmar Email</label>
        <input
          type="email"
          name="email2"
          className="form-control"
          id="inputEmailCheck"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <span className="fas fa-arrow-left mr-2 text-success"></span>
          Seguir Comprando
        </Link>
        <button
          type="submit"
          className="btn btn-success"
          disabled={!isEmailValidated}
        >
          Terminar Compra
        </button>
      </div>
    </form>
  );
};

export default BuyerForm;
