<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page PHP</title>
    <style>
        body { font-family: sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        .result { font-weight: bold; color: #154b21; }
        .code { background-color: #f4f4f4; padding: 2px 5px; border-radius: 3px; }
    </style>
</head>
<body>

    <?php
        // déclaration de variables
        $etablissement = "Faculté des Sciences Semlalia - Marrakech";
        $module = "Programmation Web";
        $annee = 2025;

        $nombre1 = 45;
        $nombre2 = 15;
        $multiplicateur = 3;

        // calcul
        $resultat_addition = $nombre1 + $nombre2;
        $resultat_multiplication = $nombre1 * $multiplicateur;
    ?>

    <h2>Informations du Module</h2>
    <p>
        Nom de l'établissement : <span class="result"><?php echo $etablissement; ?></span>
    </p>
    <p>
        Module : <span class="result"><?php echo $module; ?></span>
    </p>
    <p>
        Année Académique : <span class="result"><?php echo $annee; ?></span>
    </p>

    <hr>

    <h2>Exemples de Variables Numériques et Calculs</h2>
    <p>
        Nous utilisons les variables <span class="code">$nombre1</span> (qui vaut <span class="result"><?php echo $nombre1; ?></span>) 
        et <span class="code">$nombre2</span> (qui vaut <span class="result"><?php echo $nombre2; ?></span>).
    </p>

    <h3>Résultats des Opérations :</h3>
    <ul>
        <li>
            Addition (<span class="code">$nombre1 + $nombre2</span>) : 
            <span class="result"><?php echo $resultat_addition; ?></span>
        </li>
        <li>
            Multiplication (<span class="code">$nombre1 * $multiplicateur</span>) : 
            <span class="result"><?php echo $resultat_multiplication; ?></span>
        </li>
    </ul>

</body>
</html>