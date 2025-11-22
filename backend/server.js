// C:\Users\HP\Downloads\backend\server.js

require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Importez cors

const app = express();
const port = process.env.PORT || 5000; // Port du serveur backend

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Autorise les requêtes uniquement depuis votre frontend React
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json()); // Pour parser les requêtes JSON

// Configurez le transporteur Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Ou 'outlook', 'sendgrid', ou configurez un hôte SMTP personnalisé
    auth: {
        user: process.env.EMAIL_USER, // L'adresse e-mail qui envoie le message
        pass: process.env.EMAIL_PASS, // Le mot de passe (ou mot de passe d'application pour Gmail)
    },
});

// Route POST pour l'envoi d'e-mails
app.post('/send-email', async (req, res) => {
    const { email, subject, message } = req.body; // 'email' est l'email du visiteur

    if (!email || !subject || !message) {
        return res.status(400).json({ msg: 'Veuillez remplir tous les champs.' });
    }

    try {
        const mailOptions = {
            from: `"${subject}" <${process.env.EMAIL_USER}>`, // L'expéditeur sera votre email configuré, mais le nom sera le sujet pour une meilleure identification
            to: `${process.env.RECEIVER_PROFESSIONAL_EMAIL}, ${process.env.RECEIVER_GMAIL_EMAIL}`, // Vos adresses qui recevront le mail
            replyTo: email, // <-- AJOUT IMPORTANT : L'email du visiteur est défini comme adresse de réponse
            subject: `Message de votre site: ${subject}`, // Le sujet du mail que vous recevez
            html: `
                <p><strong>De:</strong> ${email}</p>
                <p><strong>Sujet:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <br>
                <p>---</p>
                <p>Ceci est un message envoyé via le formulaire de contact de votre site web.</p>
            `,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ msg: 'E-mail envoyé avec succès !' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
        res.status(500).json({ msg: 'Erreur lors de l\'envoi de l\'e-mail.', error: error.message });
    }
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur backend démarré sur le port ${port}`);
});