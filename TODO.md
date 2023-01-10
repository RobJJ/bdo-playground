Tuesday 10th Jan Tasks to complete:

- Scatter page : go over how the data is being pulled in year. Add filters for province,year, refresh map feature. Remove the Header and just put filters at the top section.
- Check if you can toggle the x-axis between scores
  \*\*\*\* check Choi Moi issues with summary page??
- Edit the Map Tooltip to be a bit neater
- Position the components on the Map based on Figma designs
-

Discussion:
Summary:
add econ line to the line graph over the years
For the bar graphs,, add a year filter and have the scores update
Use remix icons for the icons for that bar graph
For
Scatter:
Year filter and province filter
Have the hover bring up the tooltip and have the cursor change and the color of the selecte dot change.
Have a drop down sort of selector to change the x-axis (air,deforest,temp)
Map:
Have year filter ? try have a click through functionality
Implement a way of clicking on the province and then rendering the districts in that area ,,, also have the list change on click to show the distrcits in that province.

small tweaks style
let each parent card have onhover shadow. make shadow different color for blend
homepagemap-add step button to change year
when user clicks through to a district, add toast alert at top of page, brings users eye to the top

.
helpful info
https://tmsvr.com/react-leaflet-map-performance-issues/
.
.
conversion...
using: https://csvjson.com/csv2json
charts
https://nivo.rocks/line/
https://www.highcharts.com/demo/line-basic
.
.
IDEA...
on initial load of the APP. Do some 'larger calculations that you can use later when navigating around the site.
For example:

- A country, regional, provincial average for scores each year
- .
- Implement the list of provinces/district on the HomePage component
  .
  Implement real data for the scatter. Start just by showing the province data on scatter, and then implement the district data for a selected province
  .
  Aim for next session:
  HomePageMap ---

  See if you can change the scrolling in and out to something smooth and not in steps?
  /adjust the popup panel, try play with the setting to make the experience easier. I think positioned fixed on right side is perfect. Try implement a onClick, on pauses the onMouse over affect so the user can navigate to the panel and interact. Give the user the ability then to show districts - this will activite a zoom/focus to a location preset on map and display its districts
  New Idea:: could you change the onMouse over function to accept a much larger one that handles more tasks?
  For example.. the onMouseOver affect when hovering over provinces, displays a panel showing information, but also a small neat popup that says the Province name and explore button.. this simple button will then render the districts of that area... make it reversable affect by displaying a small card on the top left that you can close and it then closes the districts for that province... this would be a very dope way for the user to interact!
  Add ability on the popup panel to view districts in a displayPanel component. Let this displayPanel component also used by a learn more button on the scores ? something to be used here

  Give the map the ability to show the economic color shading aswell.. Map it toggleable? may a small extra panel under the -Regional Map- button ?... could be a cool way to show the two different sets of data...use blue for economic shades and update the legend.
  Another good idea....Use the <BasicInfoComponent> to display information about the province when you click it.. Show its averages over the years... bar graph? can show a rise or fall in scores...

**MAP VISUAL**
Map on landing page will show the total scores as a range of colors, depending on their values. You should be able to view each score as a different version of the map.
The map will then have four different toggles to see the different performance of each PROVINCE: Can have 5 settings choices....
Also be able to filter these scores by year
Filters: Year & 5 toggles
.
https://github.com/timwis/leaflet-choropleth/blob/gh-pages/examples/computed_values/demo.js
https://gka.github.io/chroma.js/
https://data.humdata.org/dataset/geoboundaries-admin-boundaries-for-viet-nam?
https://colorbrewer2.org/#type=sequential&scheme=Reds&n=5
.
https://leafletjs.com/examples/layers-control/
https://leafletjs.com/examples/layers-control/example.html
https://leafletjs.com/reference.html#tooltip
**SCATTER VISUAL**
.
.
.
.
.

---

---

Questions for the team:

1. HomePage-Graphs: We need to clarify what the user experience is going to be for the Homepage charts, especially what filters they are able to use and how that impacts what they see and what they understand about the data. It is very confusing for a user to have multiple envr filters unless its very clear about what the graph is showing and how those scores have been calculated....

2. HomePage-Region-List: If I list the regions here, what scores are actually been showns here? The zone:'total', year: 2021 ?? Does the user know this? I think these filters and years data should be something that is used on the summary page, or used in a limited way on the HomePage....
3. HomePage-Overall-cards : I need the overall data summary stuff for the homePage.. ie, the populations breakdowns etc... use Dummy??
4. SummaryPage-Overall: I need the data for the section of overall Data. use Dummy?
5. SummaryPage-Recommendations: How will we generate this data? Based off a sliding scale? Or should we try implement something clever here using the AI?
6. SummaryPage-LineGraph: Do you want to include the economic score here? Seems like it could be useful to add next to the Envr scores...
7. SummaryPAge-BarGraph: That data im currently using is the total data for the current year... is this what you intent that to be?

---

---

Python data calculation
To create a file and run the code provided, you can follow these steps:

Open a text editor or code editor on your computer.
Copy and paste the code into the editor.
Save the file with a name of your choosing and a .py extension (e.g. correlation_coefficient.py).
Open a terminal window on your computer.
Navigate to the directory where you saved the file using the cd command. For example, if you saved the file in the documents directory, you would run the command cd documents to navigate to that directory.
Run the Python file by typing python followed by the name of the file, and press Enter. For example, if you saved the file as correlation_coefficient.py, you would run the command python correlation_coefficient.py.
This will run the code in the file and print the Pearson correlation coefficient and the p-value for the economic scores and the deforestation impact scores to the terminal. The Pearson correlation coefficient will be a value between -1 and 1, where -1 indicates a strong negative correlation, 0 indicates no correlation, and 1 indicates a strong positive correlation. The p-value will be a measure of the statistical significance of the correlation, with a lower p-value indicating a more significant correlation.

---

---

Notes from team feedback
.
The map will have to have a Year filter (default 2021), province filter that shows distritcts (something interesting to implement here), an urban-rural-total zone graphical view...
the scatter will also need year, urban, rural, total, also province view and distrcit view.

clean up the page to make MVP
