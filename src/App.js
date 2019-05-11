import React from "react";
import Header from "./Header";
import Panel from "./Panel";

export default function App() {
  return (
    <>
      <Header />
      <Panel
        title="Doa Iftitah"
        translation="Allah Maha Besar dengan dengan kebesaran yang tidak terduga, dan segala pujian bagi Allah
        dengan pujian yang sangat banyak, dan Maha Suci Allah pada pagi dan petang hari,
        sesungguhnya aku hadapkan mukaku kepada (Allah) yang menciptakan langit dan bumi dengan
        kepatuhan dan aku bukanlah dari kaum yang menyekutukan Allah, sesungguhnya shalatku ibadahku
        hidupku dan matiku hanyalah milik Allah, Tuhan pemilik alam. Tidak ada sekutu bagi-Nya dan
        demikianlah aku diperintahkan dan aku termasuk dari golongan kaum muslimin."
      />

      <Panel
        title="Doa Qunut"
        translation="Ya Allah tunjukkanlah saya sebagaimana mereka yang sudah Engkau berikan petunjuk.
        Dan kasihkanlah kesehatan kepadaku sebagaimana mereka yang Engkau sudah kasih kesehatan.
        Dan peliharalah aku sebagaimana orang yang telah Engkau pelihara.
        Dan berilah keberkahan bagiku pada segala apa yang Engkau sudah karuniakan.
        Dan lindungi aku dari segala bahaya kejahatan yang Engkau sudah pastikan.
        Maka sesungguhnya Engkaulah yang menghukum dan bukan kena hukum.
        Maka sesungguhnya tidak hina orang yang Engkau pimpin.
        Dan tidak mulia orang yang mana Engkau memusuhinya.
        Maha Suci Engkau wahai Tuhan kami dan Maha tinggi Engkau."
      />
    </>
  );
}
