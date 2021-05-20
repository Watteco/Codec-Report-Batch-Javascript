// Exemple d'utilisation de la bibliothèque br_uncompress pour une exécution
// dans le browser

window.onload = () => {
	
	
  console.log("Test 1")
  document.querySelector("#result").textContent = JSON.stringify(
    brUncompress(
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
  )
 console.log("Test 2")
  document.querySelector("#result2").textContent = JSON.stringify(
    brUncompress(
      2,
      [
        {
          taglbl: 0,
          resol: 10,
          sampletype: 7
        },
        {
          taglbl: 1,
          resol: 100,
          sampletype: 6
        }
      ],
      "2002c06867cd81a2b44f204e02da79820b68e709423b",
      "2018-11-05T10:35:09.685Z"
    )
  )
  console.log("Test 3")
  document.querySelector("#result3").textContent = 
  JSON.stringify(brUncompress(
    1,
    [
      {
           taglbl: 0,
           resol: 1,
           sampletype: 12
      }
    ],
    "10000000404a481f000044a1d1a9d5e8353aad1042e83542afd10b8d5a557aa14aad2a21b47aa111420821d4a9d469f51aa14e2bb442af11eab442a8151abdd0aad20b8d5e23f41abd46e8b4ead46b06"
  ))
  console.log("Test 4")
  document.querySelector("#result4").textContent = 
  JSON.stringify(brUncompress(
    1,
    [
      {
           taglbl: 0,
           resol: 1,
           sampletype: 10
      },
	  {
           taglbl: 1,
           resol: 1,
           sampletype: 1
      }
    ],
    "201600206018180000007ae201726c922d59920520ad"
  ))
  console.log("Test 5")
  document.querySelector("#result5").textContent = 
  JSON.stringify(brUncompress(
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
  ))
// Payload: 322040c884854308b04f308df611942100f90649c908
// Argument: 	Label Size = 2 
			// Label = 0, Resolution = 10, Type = 7 (I16)
			// Label = 1, Resolution = 1, Type = 6 (U16)
			// Label = 2, Resolution = 1, Type = 6 (U16)
  console.log("Test 6")
  document.querySelector("#result6").textContent = 
  JSON.stringify(brUncompress(
    2,
    [
      {
           taglbl: 0,
           resol: 10,
           sampletype: 7,
		   divide: 100,
		   lblname: "temperature"
      },
	  {
           taglbl: 1,
           resol: 1,
           sampletype: 6,
		   divide: 100,
		   lblname: "humidity"
      },
	  {
           taglbl: 2,
           resol: 1,
           sampletype: 6,
		   divide: 1000,
		   lblname: "BatteryVoltage"
      }
    ],
    "322040c884854308b04f308df611942100f90649c908"
  ))
// Payload: 200700408118e86f5b19be1a58810c0e10000a1026422840002840980821840230a1000008218450803851800010420821841042082184104208a100002800120a10270a100042010050002484100116
// Argument: 	Label Size = 1 
		// Label = 0, Resolution = 0.00001, Type = 12 
		// Label = 1, Resolution = 100, Type = 6 
// ex : echo "..." | ./br_uncompress -a 1 0,0.00001,12 1,100,6
  console.log("Test 7")
  document.querySelector("#result7").textContent = 
  JSON.stringify(brUncompress(
    1,
    [
      {
           taglbl: 0,
           resol: 0.00001,
           sampletype: 12
      },
	  {
           taglbl: 1,
           resol: 100,
           sampletype: 6
      }
    ],
    "200700408118e86f5b19be1a58810c0e10000a1026422840002840980821840230a1000008218450803851800010420821841042082184104208a100002800120a10270a100042010050002484100116"
  ))
  
  console.log("Test 8")
  document.querySelector("#result8").textContent = 
  JSON.stringify(brUncompress(
    3,
    [
      {
           taglbl: 0,
           resol: 1,
           sampletype: 8
      },
	  {
           taglbl: 1,
           resol: 1,
           sampletype: 8
      },
	        {
           taglbl: 2,
           resol: 1,
           sampletype: 8
      },
	  {
           taglbl: 3,
           resol: 1,
           sampletype: 10
      },
	  {
           taglbl: 4,
           resol: 1,
           sampletype: 10
      },
	  {
           taglbl: 5,
           resol: 1,
           sampletype: 10
      }
  
    ],
    "52378085966c008093c768190080e02c700b286f836c56004651c23d000081b938b42fdf6060507052111a9ce682b0a8aa2a5555aa02a000e9eed6dd031e504637e00104a61d4030a02304020218"
  ))

   console.log("Test 9")
  document.querySelector("#result9").textContent = 
  JSON.stringify(brUncompress(
    3,

	[

	{

					 taglbl: 0,

					 resol: 1,

					 sampletype: 7,

					 lblname: "p_temperature",

					  divide:100

	},

	{

					 taglbl: 1,

					 resol: 1,

					 sampletype: 6,

					 lblname: "p_humidity",

					  divide:100

	},

	{

					 taglbl: 2,

					 resol: 1,

					 sampletype: 7,

					 lblname: "p_pressure",

					  divide:1000

	},

	{

					 taglbl: 3,

					 resol: 1,

					 sampletype: 10,

					 lblname: "p_index_1"

	},

	{

					 taglbl: 4,

					 resol: 1,

					 sampletype: 10,

					 lblname: "p_index_2"

	},

	{

					 taglbl: 5,

					 resol: 1,

					 sampletype: 6,

					 lblname: "p_batteryLevel",

					 divide:1000

	}
  
    ],
    "3683808da7bdfff6ec4f20b41f10df0e01"
  )) 
  
  
  
  
  
  
  }
