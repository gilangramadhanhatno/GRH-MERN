import React, { useState } from "react";

import "./SelectBahan.scss";

export default function SelectBahan(props) {
  const [bahanState, setBahanState] = useState("Pilih Bahan");

  return (
    <div className="container align-items-center">
      <select
        className="custom-select"
        value={bahanState}
        onChange={(e) => {
          const selectedBahan = e.target.value;
          setBahanState(selectedBahan);
        }}
      >
        {props.data.map((jenisBahan) => {
          return <option value={jenisBahan.bahan}>{jenisBahan.bahan}</option>;
        })}
      </select>
    </div>
  );
}
