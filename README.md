# Site Maître Laura Baron - Avocat Dommage Corporel

Site vitrine moderne et professionnel pour le cabinet d'avocat de Maître Laura Baron, spécialisé en dommage corporel et indemnisation des victimes.

## 🎯 Fonctionnalités

### Core Features
- **6 pages principales** : Accueil, Avocate & Cabinet, Dommage corporel, Indemnisation, Ressources, Contact
- **Blog/Ressources dynamiques** : Gestion via Supabase avec catégories, tags, recherche
- **Formulaires sécurisés** : Contact simple et complet avec upload de pièces
- **SEO optimisé** : JSON-LD, métadonnées, sitemap automatique, OpenGraph
- **Accessibilité WCAG 2.1 AA** : Navigation clavier, contrastes, ARIA
- **Performance optimisée** : Core Web Vitals, images optimisées, lazy loading

### Technologies
- **Frontend** : Next.js 14 + TypeScript + Tailwind CSS
- **Base de données** : Supabase (PostgreSQL + Storage + Auth)
- **Hébergement** : Netlify (avec headers sécurisés et redirections)
- **Emails** : Intégration via Supabase + webhooks/functions

## 🚀 Installation & Déploiement

### 1. Prérequis
- Node.js 18+
- Compte Supabase
- Compte Netlify

### 2. Installation locale
```bash
# Cloner le projet
git clone [repository-url]
cd cabinet-laura-baron

# Installer les dépendances
npm install

# Configurer l'environnement
cp .env.example .env.local
# Compléter les variables Supabase
```

### 3. Configuration Supabase
```bash
# Créer les tables et politiques RLS
# Copier le contenu de supabase/migrations/create_schema.sql
# Exécuter dans l'éditeur SQL Supabase

# Insérer les données d'exemple
# Copier le contenu de supabase/migrations/seed_data.sql
# Exécuter dans l'éditeur SQL Supabase
```

### 4. Développement
```bash
npm run dev
# Accès : http://localhost:3000
```

### 5. Déploiement Netlify
- Connecter le repository GitHub à Netlify
- Variables d'environnement : Copier depuis .env.example
- Build settings : Déjà configuré dans netlify.toml
- Domaine personnalisé : Configurer maitre-laura-baron.fr

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js App Router
│   ├── page.tsx           # Accueil
│   ├── avocate-cabinet/   # Présentation
│   ├── dommage-corporel/  # Page pilier expertise
│   ├── indemnisation-victimes/ # Processus
│   ├── ressources/        # Blog/guides
│   └── contact/           # Coordonnées + formulaire
├── components/
│   ├── layout/            # Header, Footer
│   ├── ui/                # FAQ, Timeline, Cards
│   └── forms/             # ContactForm
└── lib/
    └── supabase.ts        # Client + types
```

## 🎨 Design System

### Palette couleurs
- **Noir** : #111111 (textes principaux)
- **Blanc** : #FFFFFF (fonds)
- **Beige sable** : #E9E4DC (fonds secondaires)
- **Anthracite** : #2B2B2B (textes secondaires)  
- **Or** : #C9B27C (accent, CTA, liens)

### Typographies
- **Titres** : Playfair Display (serif, élégant)
- **Texte** : Inter (sans-serif, lisible)
- **Espacement** : Système 8px

### Composants réutilisables
- `DomainCard` : Tuiles expertises avec icônes
- `Timeline` : Processus en 4 étapes
- `FAQ` : Accordéon accessible avec JSON-LD
- `ContactForm` : Simple/complet avec upload

## 📊 SEO & Schema.org

Chaque page intègre les JSON-LD appropriés :
- **Accueil** : LegalService + LocalBusiness + FAQPage + Speakable
- **Avocate** : Person + Organization
- **Expertise** : Article + FAQPage 
- **Processus** : HowTo + FAQPage
- **Ressources** : BlogPosting par article
- **Contact** : LocalBusiness + ContactPoint

## 🔒 Sécurité & RGPD

- **Headers sécurisés** : CSP, XSS Protection, HSTS
- **RLS Supabase** : Lecture publique limitée, insertion contrôlée
- **RGPD** : Consentements, mentions, politique confidentialité
- **Sanitisation** : Contenu HTML nettoyé
- **Rate limiting** : Protection formulaires

## 📱 Responsive Design

Breakpoints Tailwind :
- **Mobile** : < 768px
- **Tablette** : 768px - 1024px  
- **Desktop** : > 1024px

Navigation mobile optimisée, images adaptatives, touch-friendly.

## 📈 Performance

Optimisations implementées :
- **Core Web Vitals** : LCP < 2.5s, CLS < 0.1, FID < 100ms
- **Images** : WebP/AVIF, lazy loading, dimensions
- **Fonts** : Préconnexion Google Fonts, display=swap
- **Prefetch** : Routes critiques
- **Code splitting** : Automatique Next.js

## 🛠 Maintenance

### Contenus à personnaliser
- [ ] Bio Maître Laura Baron (courte + longue)
- [ ] Photos professionnelles + avatar  
- [ ] Coordonnées exactes Bayonne/Toulouse
- [ ] Horaires d'ouverture
- [ ] Politique honoraires détaillée
- [ ] FAQ complète (10-12 questions)
- [ ] Articles blog prioritaires (4-6)
- [ ] Mentions légales + confidentialité

### Améliorations futures
- [ ] Newsletter automatisée
- [ ] Espace client sécurisé
- [ ] Multilingue (basque, espagnol)
- [ ] Chatbot IA juridique
- [ ] Intégration CRM
- [ ] Analytics avancées

## 🔧 Support technique

Pour toute question ou modification :
- **Documentation** : Next.js, Supabase, Tailwind CSS
- **Monitoring** : Netlify Analytics + Lighthouse CI
- **Backup** : Repository Git + export Supabase

---

**Note** : Ce site respecte les règles déontologiques de la profession d'avocat. Aucune promesse de résultat n'est formulée, conformément à l'article 10 du RIN.