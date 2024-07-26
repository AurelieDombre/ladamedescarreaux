<?php
// Fonction pour valider une adresse e-mail
function validateEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

// Fonction pour valider un numéro de téléphone (simpliste)
function validatePhone($phone) {
    return preg_match('/^[0-9\-\(\)\/\+\s]*$/', $phone);
}

// Vérifier si le formulaire a été soumis
if ($_SERVER["REQUEST_METHOD"] == "POST") {
   
    // Récupérer et filtrer les données du formulaire
    $firstname = htmlspecialchars(trim($_POST["name"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $phone = htmlspecialchars(trim($_POST["phone"]));
    $message = htmlspecialchars(trim($_POST["message"]));

    // Valider les données
    $errors = [];
    if (empty($firstname)) {
        $errors[] = "Le nom est requis.";
    }
    if (empty($email) || !validateEmail($email)) {
        $errors[] = "Une adresse e-mail valide est requise.";
    }
    if (empty($phone) || !validatePhone($phone)) {
        $errors[] = "Un numéro de téléphone valide est requis.";
    }
    if (empty($message)) {
        $errors[] = "Le message est requis.";
    }

    // Vérifier s'il y a des erreurs
    if (empty($errors)) {
        // Prévenir les injections d'e-mail
        $email = str_replace(["\r", "\n", "%0a", "%0d"], '', $email);

        // Envoyer les données par e-mail
        $to = "ladame@ladamedescarreaux.com";
        $subject = "Nouveau message depuis le formulaire de contact";
        $message_body = "Nom: $firstname\nEmail: $email\nTéléphone: $phone\nMessage:\n$message";
        $headers = "From: $email";

        // Envoyer l'e-mail
        if (mail($to, $subject, $message_body, $headers)) {
            echo "Votre message a bien été envoyé.";
        } else {
            echo "Une erreur s'est produite lors de l'envoi du message.";
        }
    } else {
        // Afficher les erreurs
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
    }
} else {
    // Le formulaire n'a pas été soumis, rediriger ou afficher un message d'erreur
    echo "Erreur : Le formulaire n'a pas été soumis.";
}
?>