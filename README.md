## General Assembly

# Project 2: PokeDex!

## Overview

A little bit about Pokémon game as described on : Players are known as Pokémon Trainers and they have three main goals: collect Pokémon; train Pokémon, battle other Pokémon.

Here is the official Pokémon website.

https://www.pokemon.com/us/

This application lists all of the abailable Pokémon in the game along with the characteristics of these Pokémon. The application includes:

1) home page;
2) an index page;
3) a show page.

The  user searches for a Pokémon of their choice from 1126 Pokémon available in the index page. They are then led to the show page which displays the individual Pokémon's characteristics, including: Pokémon stats; moves; picture; to what character the Pokémon can evolve to.

![Pokémon home page](https://user-images.githubusercontent.com/101732786/168440028-423931ff-33af-49c5-b8f0-741c837d468e.png)

## Brief

This project was a two day paired hackathon. I worked with Rob and our task was to create a working application with several components and a router, the application is to consume a public API and present the requests by a user on the application.

## Planning

I wanted to consume a football APi as I'm interested in that field; Rob preferred a Pokémon API as Pokémon were a big part of his childhood. We decided to go for the Pokémon API as it was far more detailed, it had a seeming never ending array of possibilities in regards to the amount of data which we could fetch. The API allowed for GET requests only, so we won't going to add (POST), update (PUT) or remove (DELETE) any data.

Link to the API: https://pokeapi.co/api/v2/pokemon/

Link to the API documentation: https://pokeapi.co/docs/v2#pokemon

Upon deciding on the Pokémon API , we created a wireframe planning out the visuals of the site and the functionality.

## Home page

* A nav bar with a home link on the left side which navigates to the home page; an index link on the right side which navigates to the index page.
* 12 buttons with links to different arrays of Pokémon, with each button navigating to 100 Pokémon.

<img width="371" alt="wireframe-homepage" src="https://user-images.githubusercontent.com/101732786/168433846-1f6dfd5a-aac7-4817-8ad2-0a0da5eb7814.png">

## Index Page

* a seacrh bar in the opt right which allows you to search by charaxter strings for the Pokémon of your choosing;
* A navigation dropdown on the top left which allows you to choose a different array of Pokémon to choose from;
* individual Pokémon cards arranged into 20 rows of 5 Pokémon in each row. EAch card links to an individual Pokémon page of the chosen Pokémon.

<img width="595" alt="wireframe-index page" src="https://user-images.githubusercontent.com/101732786/168434452-c269fb65-b9fa-4fd6-a900-dfa295619d18.png">

## Show page

* Name and ID of Pokémon;
* Picture
* Statistics
* Available moves

<img width="596" alt="wireframe show page" src="https://user-images.githubusercontent.com/101732786/168435021-938de6ef-acd2-47ea-b382-e0a8e759b956.png">

## Approach Taken

* Day 1: We had our wireframe quickly approved by our head trainer. We began by creating the functionality of the Nav bar, followed by the home page. We then worked on the functionality of the Index page, before realizing that it was wiser to delegate stand alone tasks in order to have the project finsihed on time. I styled the home page while Rob finished the functionality of the index page.

* Day 2: We worked on the show page together, and then delegated tasks again, with Rob finishing the functionality of the Show page, whilst I styled the Index page. We completed the MVP required with ampple time left - so we added the feature of displaying the pictures of the previous and next evolutions of the Pokémon.

The home page (Home.js) was style with Bootstrap, and we used Pokémon gifs dowloaded from:

https://tenor.com/search/pokemon-stickers

![Pokémon home page](https://user-images.githubusercontent.com/101732786/168438276-3269a585-c4f5-4021-85a2-a3375a95c969.png)

The index (PokemonIndex.js) page was fairly simple in design also, as we used the Bootstrap components <Container /> and <Row /> to create the  rows of Pokémon to be displayed.

We created handleFilter() and handleSearch() functions to allow the user to seacrh for a Pokémon.

We used a useEffect() and an async function to fetch data from the public API, and then update the state of our 'pokemons' array.

![Pokémon Index page](https://user-images.githubusercontent.com/101732786/168439030-1d33530c-f7ae-4bd9-a55a-6bc9e6c79bc0.png)

The most complicated piece was the Pokémon show (PokemonShow.js) page. Here we added the <Accordion /> element to our Bootstrap styling so that the 'moves' section became a retractable dropdown. The most difficult part was creating the Pokémon evolutions to show correctly on the application.

![Pokémon Show page](https://user-images.githubusercontent.com/101732786/168439187-b0581b40-7f13-4d0c-b713-564002c97454.png)

## API request:

The 'pokeapi' is a huge library of Pokémon endpoints. We used a GET request to fetch all the 1126 Pokémon available (path='/pokemons') and a GET request to fetch individual Pokémon by name ('/pokemons/:name'). The other endpoints accessed were required for the Pokémon show page: stats and moves.

![Pokemon API document](https://user-images.githubusercontent.com/101732786/168439553-60f7d363-27e7-4362-b574-97a6742a8cad.png)


## Project key learnings:

* learning to pair code and delegate tasks whilst working to meet a deadline;
* consuming a massive API and prioritising what endpoints to fetch as the pokeapi is a huge API.
* using Bootstrap to style the pages.
* separating the .js files into deifferent components to make the code cleaner.

## Challenges:

* Creating the Pokémon evolution images and names to display correctly.

## Future improvements

* Create buttons/links to access 100 Pokemon at a time - as the index displays all 1126 Pokémon which is a little untidy.
* Create filter for Pokémon displayed - for example Pokémon which were created in a certain year; strongest Pokémon; Pokémon with 3 evolutions and other variations.

## Bugs

* No bugs apparently present. The API was clean an easy to fetch data from. We had our biggest issues with the Pokémon evolution feature - but we were able to solve that by creating a pokemonChain state which, if truthy, would engage evoData async function which would set the values of the evolution name and image.

## Visit the website:

* To visit the page, check out my [Netlify link](https://app.netlify.com/sites/marko-pokemon/overview)
* To run your local server, use 'yarn start'.




