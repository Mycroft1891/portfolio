#!/bin/sh

SRC="$1"
LOW=50
convert $SRC.jpg -quality $LOW -define webp:lossless=true $SRC.webp

# To use this script,
# run the following from a terminal
# in a folder containing an image named foo.jpg (or whatever):
#   chmod u+x convert.sh
#   ./convert.sh foo
