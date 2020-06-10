
# UI

The ui package contains all client-side assets (scripts and styles).
Its purpose is to have a decoupled dependency management and to concentrate only on assets.
It only depends on the api package by using the api.

The first lines in the `Application.tsx` have a small requirement how the root element should look like to gather the information about the api server to communicate with. 
