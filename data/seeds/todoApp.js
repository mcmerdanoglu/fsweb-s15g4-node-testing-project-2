/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

const defaultGorevler = [
  { Adi: "C# öğren", Aciklama: "C# öğrenerek iş bulma olasılığını artır" },
];
const defaultTasklar = [
  {
    Adi: "En az 1 yazılım dilini çok iyi öğren",
    Aciklama: "1 yazılım dili ile ilgili bolca pratik yap",
    GorevId: 1,
  },
  {
    Adi: "Anlamadığın yerleri not al",
    Aciklama: "Daha sonra bunları araştırarak çöznmeye çalış",
    GorevId: 1,
  },
];

exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("Tasklar").truncate();
  await knex("Gorevler").truncate();

  await knex("Gorevler").insert(defaultGorevler);
  await knex("Tasklar").insert(defaultTasklar);
};
