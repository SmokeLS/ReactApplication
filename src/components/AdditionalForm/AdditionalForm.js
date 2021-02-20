import React from "react";
import "./AdditionalForm.css";

function AdditionalForm(props) {
  const { 0: firstName, 1: lastName, 2: description, 3: address } = props;

  return (
    <div className="addional-form">
      <div>
        Выбран пользователь
        <b className="ml-1">
          {firstName} {lastName}
        </b>
      </div>
      <div>Описание:</div>
      <textarea value={description ? description : "No info"} readOnly />
      <div>
        Адрес проживания:{" "}
        <b>{address ? Object.values(address)[0] : "No info"}</b>
      </div>
      <div>
        Город: <b>{address ? Object.values(address)[1] : "No info"}</b>
      </div>
      <div>
        Провинция/штат: <b>{address ? Object.values(address)[2] : "No info"}</b>
      </div>
      <div>
        Индекс: <b>{address ? Object.values(address)[3] : "No info"}</b>
      </div>
    </div>
  );
}

export default AdditionalForm;
