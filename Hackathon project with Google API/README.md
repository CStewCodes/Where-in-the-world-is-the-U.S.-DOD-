# Where-in-the-world-is-the-U.S.-DOD-
This is a website that is designed to source images from dvidshub.net and plot a map showing where the U.S. DOD is in the world.


** Day 1 **
We're going to make a website that gets the location of an image via the photos' metadata and put that into a map. The end result for today is to get a map on the page working and a pin that has the location's metadata linked, not hard coded. 

Steps:
1. Set up the HTML, CSS, and JS files. Link them together.
2. Get a google map to display on our website.
3. Download 10 images from DVIDSHUB.NET (preferrably images that have been taken in different countries) 
4. Find out how to associate the location the image was taken at and use that information to put a pin onto the map. The images have metadata, and inside the IPTC section there will be the city, state, and country code. 
5. Get those images to display under the map.
6. When an image is clicked, the map will highlight that pin that's associated to that image.


As far as the marker on the map is concerned, lets associate the images to the map marker, and associate the location of the map marker to the IPTC data: City, State, and Country. Maybe we just focus on associating the country.



-------

After hours, day 1.
I looked for help from Chat GPT and started looking around to see if DVIDS has an API, and they DO!!!!
So I created a developer account through them and I got myself a public and private access key, so I can pull data from DVIDS using the DVIDS API and link that information to my map.

okay so here's what I'm thinking....
1. figure out how the API works. I need to be able to search for journalists, and I need to be able to find and take the data from when the journalist took the image, where they took it, and associate that to a map marker. 
2. then, I need to be able to loop that through the total amount of the uploads that the journalist has. so if the journalist has 1000 uploads, then there should be 1000 map markers. 
3. I want some of the Visual Information to display as a pop up when the map marker is clicked, and then I want the full info to display at another area of the page to show the full details. 
4. The pop should include the title of the gallery, a thumbnail of the image, the date it was taken and location. 


Documentation for the DVIDS API:
Access the tutorial https://api.dvidshub.net/docs/tutorial
To use the search feature: https://api.dvidshub.net/docs/search_api

For the DVIDS API to work,

Google maps API:
API Key:
AIzaSyD3hf-2EcXEsLifm89qMd39dd6DuDPMlAo