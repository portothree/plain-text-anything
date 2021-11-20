#!/usr/bin/env bash

# Reset getopts argument index
OPTIND=1

FILE_PATH=""

while getopts "f:" opt; do
	case "$opt" in
		f) FILE_PATH=$OPTARG
			;;
	esac
done

# Shift the set of positional parameters
shift $((OPTIND-1))

[ "${1:-}" = "--" ] && shift

echo $FILE_PATH
