// Exemple d'utilisation de la bibliothèque br_uncompress pour une exécution
// dans le browser

load("br_uncompress.js")

var result = brUncompress(
  3,
  [
    {
      taglbl: 2,
      resol: 1.0,
      sampletype: 12,
      lblname: "Foobar"
    }
  ],
  "$10$27$00$80$03$93$20$18$00$80$10$81$83$07$0d$45$85$10$05"
)

print(JSON.stringify(result))

result = brUncompress(
      3,
      [
        {
          taglbl: 0,
          resol: 1,
          sampletype: 10
        },
        {
          taglbl: 1,
          resol: 1,
          sampletype: 10
        },
        {
          taglbl: 2,
          resol: 1,
          sampletype: 7
        },
        {
          taglbl: 3,
          resol: 1,
          sampletype: 7
        },
        {
          taglbl: 4,
          resol: 1,
          sampletype: 6
        }
      ],
      "523000800310050AE1DEC124B41F680FEC01003802237B00008EC01080009DB08C8819AF126440382419100ED903"
    )

print(JSON.stringify(result))
