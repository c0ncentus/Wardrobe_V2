# Correction Features Formulaire
## Quand on colle un lien  dans le champs "Lien"
- ```
Encountered two children with the same key, `short-sport`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version. react-dom-client.development.js:6604:23
XHRGET
https://api.allorigins.win/get?url=https://www.etsy.com/fr/listing/4378301672/mini-jupe-noire-et-grise-avec-details-a?ls=s&ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=jupes&ref=sr_gallery-4-37&nob=1&local_signal_search=1&content_source=9da8ef45-8dc7-4fec-aa69-785ead2be11f%253ALT752f52a7e9194391a92780e53e819e38d4106b40&organic_search_click=1&logging_key=9da8ef45-8dc7-4fec-aa69-785ead2be11f%3ALT752f52a7e9194391a92780e53e819e38d4106b40
CORS Missing Allow Origin

Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at https://api.allorigins.win/get?url=https%3A%2F%2Fwww.etsy.com%2Ffr%2Flisting%2F4378301672%2Fmini-jupe-noire-et-grise-avec-details-a%3Fls%3Ds%26ga_order%3Dmost_relevant%26ga_search_type%3Dall%26ga_view_type%3Dgallery%26ga_search_query%3Djupes%26ref%3Dsr_gallery-4-37%26nob%3D1%26local_signal_search%3D1%26content_source%3D9da8ef45-8dc7-4fec-aa69-785ead2be11f%25253ALT752f52a7e9194391a92780e53e819e38d4106b40%26organic_search_click%3D1%26logging_key%3D9da8ef45-8dc7-4fec-aa69-785ead2be11f%253ALT752f52a7e9194391a92780e53e819e38d4106b40. (Reason: CORS header ‘Access-Control-Allow-Origin’ missing). Status code: 500.

Error fetching URL metadata: TypeError: NetworkError when attempting to fetch resource.
```, essaye de faire plusieurs requête essaye simplement d'extraire le html et une procedure pour traiter et détexter le titre et descriptions qui serait très interresant pour replire automatiquement.

- Pour le titre il ne s'agit pas du nom du site web mais pour le même Url "Ensemble deux pièces noir chic en résille et similicuir - Ensemble tendance avec haut dos nu et minijupe" par exemple.
Essaye de le récuperer de manière intelligente que ce soit dans l'URL ou dans la page correspondante.


## Le style


- autorise plusieurs style donc il y aura un bouton "+"
- remplies les gradients qui ne sont pas fait comme le style "Gothique"
- Ajoute un nouveau champs "cosplay compatible" (vampire, infirmière, policier, fée, sirène, sorcière, druide, et remplit moi + pour couvrir la majorité des cas; ajoute moi dans les filtres)


## le fetch
- assure toi que cela ne fait pas crash l'application et que si le programme ne fonctionne pas, il y a une notification adéquat pour indiqué l'erreur mais absolument pas de crash.
- 


## l'aborescence
- "Auto-partie: Top" enlève cela et fait une champs recherche qui filtre au bout de 3 lettre en mode fuzzy
- Il y a 2 niveaux, fait moi un 3ième niveaux pour les Types ou catégories et voire un 4 ième ou 5ièmes si pertinant

## les types de matériaux
fait des collonnes séparés (5 éléments visible scrollable) par rapport à "Naturel", "Synthétique" en titre

# Dans l'application en général
Essaye de mettre beaucoup de couleurs diverses et font-awesome gratuit
