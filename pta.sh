#!/usr/bin/env bash

UNKNOWN_OPTIONS=()
while [[ $# -gt 0 ]]; do
	key="$1"

	case $key in
		-f|--file)
			FILE="$2"
			shift
			shift
			;;
		*)
			UNKNOWN_OPTIONS+=("$1")
			shift
			;;
	esac
done
