import requests
import json

heroes = []

# for each id
for i in range(1,731):
    # get json from request at https://www.superheroapi.com/api.php/10161052329136209/<i>
    url = f'https://www.superheroapi.com/api.php/10161052329136209/{i}'
    r = requests.get(url)

    hero = {}
    
    # remove response:success
    hero = json.loads(r.text)
    del hero['response']
    # add it to the array
    heroes.append(hero)
    print(f'{i}: {hero["name"]}')
# save the json to a file
with open("heroes.json", "w") as outfile:
    outfile.write(json.dumps(heroes))
