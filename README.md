# Pokesir

## Installation & Lancement

```bash
# installation des packages node
> npm install

# installation des modules bower
> bower install

# lancement du serveur grunt
> grunt serve
```

## Le site

#### Les headers

Un controller a été mis en place afin de *highlighter* l'onglet du site couramment actif dans la barre de navigation en se basant sur l'url courante.

#### Recherche d'un pokémon par nom

Vous trouverez sur le site un onglet permettant de rechercher un pokémon parmi une liste de pokémon en la filtrant par nom.

Utlisation de `angular-ui-select` pour intégrer le champ de filtre à la liste déroulante.
La liste de noms est récupérée via le service `$resource` qui appelle l'api de **pokeapi.com**. A cause de la lourdeur de cette dernière, *environ 800 noms*, j'ai mis un filtre qui limite le nombre de noms à afficher dans la liste déroulante, ceci une fois le filtre de recherche sur les valeurs des champs appliqué.

#### Informations sur un pokémon

- **Data**  
La *factory* utilisant le service `$resource` est réutilisé pour récupérer les information de base d'un pokémon sur l'api.  
Un autre service est utilisé pour récupérer la chaine d'évolution du pokémon en parcourant en profondeur un objet JSON afin d'avoir tous les descendants dudit pokémon tant qu'il en existe.  

- **Sprites**  
Enfin une directive a été créée afin de charger différents sprites de pokémon, car ils proviennent d'une api différente. Par défaut sont chargés des sprites animés mais pour certains pokémons il n'y en a pas. La directive permet de charger un sprite non animé si le premier n'est pas trouvé.

- **Autre**  
Utilsation des balises `ng-show` `ng-hide` pour afficher un pokéball de chargement pendant la récupération des informations depuis l'api.  
<br>L'image de fond se redimensionne en fonction de la hauteur et/ou de la largeur de la fenêtre, les éléments de la page sont presque entièrement responsive pour téléphone et tablette.  
<br>Et quelques autres trucs, des filtres, des `ng-disabled`, des `ng-repeat-start/end`, ... Bref, on s'amuse!
