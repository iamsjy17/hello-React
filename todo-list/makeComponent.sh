#!/bin/bash

name=$1
path=$2

echo $name
echo $path

if [ -z "$path" ]; then
   path=/Users/jewoosong/Documents/hello-react/todo-list/src/components
fi


cd $path
mkdir $name
cd $name

touch $name.scss
touch $name.js
touch index.js




