
# Frontend

The frontend package serves a simple template and the ui.
The root element in the template must fulfill the ui requirements.

It has a dependency to the ui package, which will resolved over a docker volume mount.
The output if the ui package will be distributed to a docker volume.
This volume is then mounted into the frontend package.
