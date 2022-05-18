ENGLISH
===========================
Implementation of the executable `br_uncompress` in JavaScript.

## Use

The use cases are given in the files ** example.html ** (on your browser) and ** example.js ** (on nodejs).

It consists of the use of function `Module.brUncompress`.
It takes as arguments:

* The tag size _tagsz_
* A list of tag objects, containing the fields _taglbl_, _resol_ and
  _sampletype_. These objects can optionally contain an _lblname_ field
  containing the name of the label to display in the output data and a field
  _divide_ containing a divisor to use for the final calculation of the value
  measured.
* The data to decompress in hexadecimal format.
* Optionally the date of the measurement in ISO format (for example: `2018-11-05T10: 35: 09.685Z`)

## Build

The `br_uncompress.js` script cannot be used as is in the browser,
the function being exported according to the CommonJS convention. It is necessary that
create a bundle, using a tool such as browersify or webpack.

An example is given in the package.json file.

## Nashorn

The `br_uncompress.js` script can be used directly via Nashorn. To see the
file `example_nashorn.js`

### Compatible devices

The `br_uncompress.js` script is currently compatible with VAQAO, to make it compatible with other devices you have to change line 745 :

```js
var data = brUncompress(
	3,  // <<==  the Batch Tag size
	// From here the batch fileds parameter list
	[
		{
			 taglbl: 1,
			 resol: 10,
			 sampletype: 7,
			 divide: 100,
			 lblname: "Temperature"
		},
		{ 
			 taglbl: 2,
			 resol: 100,
			 sampletype: 6,
			 divide: 100,
			 lblname: "Humidity"
		},
		{ 
			 taglbl: 3,
			 resol: 10,
			 sampletype: 6,
			 lblname: "CO2"
		},
		{ 
			 taglbl: 4,
			 resol: 10,
			 sampletype: 6,
			 lblname: "COV"
		},
		{ 
			 taglbl: 5,
			 resol: 10,
			 sampletype: 6,
			 lblname: "Lux"
		}
	],
	msg.payload, // This is the batch frame
	time // Variable for timestamp
 )
;
```

[1]: https://nodejs.org/en/ "NodeJs"

FRANCAIS
===========================

Implémentation de l'exécutable `br_uncompress` en JavaScript.

## Utilisation

Les cas d'utilisation sont donnés dans les fichiers **example.html** (utilisation
dans le navigateur) et **example.js** (pour une utilisation sur nodejs). 

L'utilisation consiste en l'utilisation de la fonction `Module.brUncompress`.
Elle prend comme arguments :

* La taille de tag _tagsz_
* Une liste d'objets tag, contenant les champs _taglbl_, _resol_ et
  _sampletype_. Ces objets peuvent optionnellement contenir un champ _lblname_
  contenant le nom du label à afficher dans les données de sortie et un champ
  _divide_ contenant un diviseur à utiliser pour le cacul final de la valeur
  mesurée.
* Les données à décompresser au format hexadécimal.
* Optionnellement la date de la mesure au format ISO (par exemple : `2018-11-05T10:35:09.685Z`)

## Build

Le script `br_uncompress.js` n'est pas utilisable tel quel dans le navigateur,
la fonction étant exportée selon la convention CommonJS. Il est nécessaire de
réaliser un bundle, à l'aide un outil tel que browersify ou webpack.

Un exemple est donné dans le fichier package.json.

## Nashorn

Le script `br_uncompress.js` est utilisable directement via Nashorn. Voir le
fichier `example_nashorn.js`

### Capteurs compatibles

Le script `br_uncompress.js` est actuellement compatible avec le VAQAO, pour le rendre compatible avec d'autres capteurs il faut modifier la ligne 745 :

```js
var data = brUncompress(
	3,  // <<==  the Batch Tag size
	// From here the batch fileds parameter list
	[
		{
			 taglbl: 1,
			 resol: 10,
			 sampletype: 7,
			 divide: 100,
			 lblname: "Temperature"
		},
		{ 
			 taglbl: 2,
			 resol: 100,
			 sampletype: 6,
			 divide: 100,
			 lblname: "Humidity"
		},
		{ 
			 taglbl: 3,
			 resol: 10,
			 sampletype: 6,
			 lblname: "CO2"
		},
		{ 
			 taglbl: 4,
			 resol: 10,
			 sampletype: 6,
			 lblname: "COV"
		},
		{ 
			 taglbl: 5,
			 resol: 10,
			 sampletype: 6,
			 lblname: "Lux"
		}
	],
	msg.payload, // This is the batch frame
	time // Variable for timestamp
 )
;
```

[1]: https://nodejs.org/en/ "NodeJs"  
