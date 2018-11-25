#!/bin/bash
# Generate a random list of recordings using eSpeak.

length=10

echo '[' > recordings.json

for i in $(seq 1 $length)
do
    # This may result in profanity.
    # I suggest reviewing the words before using this.
    word=$(grep '^[a-zA-Z]*$' /etc/dictionaries-common/words | shuf -n 1)
    ipa=$(espeak -q --ipa "$word" | sed 's/^ //g')
    espeak -w $i.wav "$word"
    lame $i.wav
    rm $i.wav
    mv $i.mp3 recordings/
    if [[ "$i" == "$length" ]]
    then
        ending=""
    else
        ending=","
    fi
    # If anyone asks, this is NOT how you are supposed to generate JSON.
    echo "{\"id\":$i, \"text\":\"$word\", \"ipa\":\"$ipa\", \"recording\":\"assets/recordings/$i.mp3\"}$ending" >> recordings.json
done

echo ']' >> recordings.json

