"""
A simple script to convert org mode `- ::` sentences
into JSON objects.
"""

# Importing the JSON module to dump into a file
import json

# A simple retrieval method that reads from the
# text file and returns the word, meaning, and 
# the example sentence
def retrieval():
    # Reading from the text file
    with open("./orange_cards.txt") as f:
        lines = f.readlines()

    words: list = []
    meanings: list = []
    examples: list = []

    # Iterating through the lines and storing 
    # into different lists
    for line in lines:
        split_up = line.split("::")
        words.append(split_up[0][2:-1])
        split_up_meaning_and_example = split_up[1].split(".")
        meanings.append(split_up_meaning_and_example[0][1:])
        examples.append(split_up_meaning_and_example[1][1:])

    return words, meanings, examples

# Creates and dumps the JSON into a file
def create_json():
    words, meanings, examples = retrieval()
    res = {}

    # Creating objects to append to the 
    # overall JSON object
    for idx in range(len(words)):
        res[idx] = {
            'word': words[idx],
            'definition': meanings[idx],
            'example': examples[idx]
        }

    # JSON Dumping into the res file.
    with open('orange.json', 'w') as outfile:
        json.dump(res, outfile, indent=4)

# Driver code for triggering the functions
if __name__ == "__main__":
    create_json()
