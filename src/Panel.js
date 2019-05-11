import React from "react";

export default function Panel({ title, translation }) {
  return (
    <div className="panel">
      <h2 className="title">{title}</h2>
      <span className="subtitle">Dibaca sebelum bacaan Al-Fatihah, pada rakaat pertama</span>
      <p>{translation}</p>
    </div>
  );
}
