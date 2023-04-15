#!/bin/bash

# Start Django server
python3 manage.py runserver &

# Start React app
cd frontend/universitysystem/
npm install
npm start
