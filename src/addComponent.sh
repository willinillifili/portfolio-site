#!/bin/bash
for var in "$@"
do 
	if [[ -d $var ]]; then
		echo "component exists"
		exit 1
	fi 
	mkdir ./$var &&
	cd ./$var &&
	touch $var.js $var.scss $var.test.js &&
	cd .. 
done
