# Test technique pour la société Imperiatec

Ce projet consiste en la création d'une application web de gestion de tâches. L'application dispose d'une interface utilisateur conviviale et des fonctionnalités de base pour la gestion des tâches. Le front-end est développé en React, le back-end en Django, et la base de données est libre.

## Exigences Front-End (React)

- Création d'une page d'accueil qui affiche la liste des tâches actuelles.
- Implémentation d'un formulaire permettant d'ajouter de nouvelles tâches à la liste.
- Possibilité de marquer une tâche comme complétée ou non.
- Fonctionnalité de suppression des tâches de la liste.
- Interface utilisateur réactive et conviviale.

## Exigences Back-End (Django)

- Création d'une API Django pour gérer les opérations CRUD (Create, Read, Update, Delete) sur les tâches.
- Utilisation de Django REST Framework pour développer l'API.
- Implémentation de la logique nécessaire pour gérer les opérations CRUD sur les tâches.
- Utilisation de modèles Django pour représenter les données des tâches.

## Exigences Générales

- Utilisation de Git pour le contrôle de version du projet.
- Hébergement du projet sur GitHub (ou une autre plateforme de choix) pour permettre aux évaluateurs de tester l'application.
- Organisation soignée du code pour faciliter les tests.
- Utilisation de gestionnaires de paquets tels que npm pour React et pip pour Django pour gérer les dépendances.

## Bonus (facultatif)(réalisés)

- Utilisez des composants React réutilisables autant que possible
- Implémentez une pagination ou une charge progressive pour gérer un grand nombre de tâches

# Installation 

```bash
# Clonez le dépôt
git clone https://github.com/GreggHwzz/Test-technique-Imperiatec.git

# Installez les dépendances
npm install
pip install django djangorestframework
pip install django-cors-headers

# Lancez le projet Django
cd taskapi
python manage.py makemigrations
python manage.py migrate
python manage.py runserver

# Lancez le projet React
cd test
npm start


