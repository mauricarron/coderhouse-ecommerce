import React from "react";

const BuyForm = () => {
  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputFullName">Nombre Completo</label>
          <input type="text" className="form-control" id="inputFullName" />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPhone">Teléfono</label>
          <input type="number" className="form-control" id="inputPhone" />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input type="email" className="form-control" id="inputEmail" />
      </div>
      <div className="form-group">
        <label htmlFor="inputEmailCheck">Confirmar Email</label>
        <input type="email" className="form-control" id="inputEmailCheck" />
      </div>
      <button type="submit" className="btn btn-success">
        Terminar Compra
      </button>
    </form>
  );
};

export default BuyForm;
