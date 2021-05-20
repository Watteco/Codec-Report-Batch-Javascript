Implémentation de l'exécutable `br_uncompress` en JavaScript.

# Utilisation

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

# Build

Le script `br_uncompress.js` n'est pas utilisable tel quel dans le navigateur,
la fonction étant exportée selon la convention CommonJS. Il est nécessaire de
réaliser un bundle, à l'aide un outil tel que browersify ou webpack.

Un exemple est donné dans le fichier package.json.

# Nashorn

Le script `br_uncompress.js` est utilisable directement via Nashorn. Voir le
fichier `example_nashorn.js`


[1]: https://nodejs.org/en/ "NodeJs"  
