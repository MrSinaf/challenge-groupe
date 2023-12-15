## Projet : Gestionnaire de dépenses personnelles

### Description du projet
Le projet consiste à créer une application de gestion des dépenses personnelles, où les utilisateurs peuvent enregistrer leurs dépenses et obtenir une vue d'ensemble de leurs dépenses totale et par catégorie. L'application utilisera `useReducer` et `Context API` pour gérer l'état global de l'application.

### Fonctionnalités principales
1. Ajout d'une dépense avec un montant et une catégorie.
2. Affichage de la liste des dépenses enregistrées avec les détails correspondants.
3. Calcul du total des dépenses et detail en fonction des categories.

### Exigences techniques
- Utiliser React.js comme framework de développement.
- Utiliser `useReducer` et `Context API` pour gérer l'état global de l'application.
- Utiliser des composants fonctionnels pour créer l'interface utilisateur.
- Utiliser CSS ou un framework de votre choix pour le style et la mise en page de l'application.
- Utiliser des méthodes pures pour la manipulation de l'état avec `useReducer`.

### Points de notation
- Ajout d'une dépense (4 points) : L'utilisateur peut ajouter une dépense avec un montant et une catégorie.
- Affichage des dépenses (3 points) : Les dépenses enregistrées sont affichées avec leurs détails correspondants.
- Calcul du total des dépenses et par catégorie (5 points) : Le total des dépenses mensuelles est calculé et affiché.
- Interface utilisateur conviviale et attrayante (3 points) : L'application possède une interface utilisateur intuitive, esthétique et facile à utiliser.

### Liste de catégories
1. Alimentation
2. Logement
3. Transport
4. Divertissement
5. Santé
6. Éducation
7. Autres

#### Composant de formulaire `select`
> Afin de pouvoir choisir une catégorie vous allez avoir besoin d'une balise `<select></select>`
> Voici une structure que vous pouvez réutiliser :
>
> ```js
> function Select() {
> 
>   return (
>       <form>
>           <select value={/*Valeur de la catégorie selectionnée*/} onChange={/*Fonction handleChange*/}>
>               <option value={/*Valeur selectionnable*/}></option>
>               {/* Plus d'option ... */}
>           </select>
>       </form>
>   )
> }
> ```
> La fonction d'handle à mettre en place fonctionne de la même manière que pour un input classique

### Note finale
La note finale sur 20 sera calculée en fonction du nombre total de points obtenus sur les 15 points possibles.

N'oubliez pas de planifier votre projet, de répartir les tâches entre les développeurs, de collaborer efficacement et de tester régulièrement votre application tout au long du processus de développement.

## Bonne chance et amusez-vous bien !