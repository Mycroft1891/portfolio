#!/bin/sh

SRC="$1"
LOW=50
convert $SRC.png -quality $LOW -resize 40% "$SRC"_"$LOW"q_50pc.png

# To use this script,
# run the following from a terminal
# in a folder containing an image named foo.jpg (or whatever):
#   chmod u+x convert.sh
#   ./convert.sh foo
