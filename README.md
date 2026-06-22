# JCD — Johannes Conseil & Développement

Site vitrine officiel — [jc-developpement.com](https://jc-developpement.com)

## Structure du projet

```
jcd-site/
├── index.html              ← Page principale (unique)
├── vercel.json             ← Configuration Vercel
├── README.md
└── assets/
    ├── css/
    │   └── styles.css      ← Feuille de styles principale
    ├── js/
    │   └── main.js         ← Scripts (navbar, animations, formulaire)
    └── img/
        ├── logo.png
        ├── hero-bg.jpg
        ├── photo-philippe.jpg
        ├── icon-conseil.png
        ├── icon-accompagnement.png
        ├── icon-formation.png
        ├── icon-telephone.png
        ├── icon-email.png
        ├── icon-adresse.png
        └── icon-horaires.png
```

## Dépendances externes

- **Google Fonts** (Inter) — chargée via CDN, aucune installation requise
- **Formspree** — formulaire de contact, endpoint : `https://formspree.io/f/mkolnwee`

Aucun framework, aucun bundler, aucune dépendance npm. Le projet est en HTML/CSS/JS pur.

## Déploiement GitHub → Vercel

1. Pousser ce dossier sur un dépôt GitHub
2. Connecter le dépôt à Vercel (Import Project)
3. Aucune configuration de build requise (site statique)
4. Ajouter le domaine personnalisé `jc-developpement.com` dans les paramètres Vercel
5. Configurer les DNS chez votre registrar (voir ci-dessous)

## Configuration DNS (domaine personnalisé)

Dans votre gestionnaire DNS, ajouter :

| Type  | Nom | Valeur                  |
|-------|-----|-------------------------|
| A     | @   | 76.76.21.21             |
| CNAME | www | cname.vercel-dns.com    |

## Formulaire de contact

Le formulaire utilise [Formspree](https://formspree.io/f/mkolnwee).  
Les soumissions sont reçues directement dans votre tableau de bord Formspree et transmises par e-mail.

Champs transmis : `nom`, `prenom`, `email`, `telephone`, `demande`, `message`
