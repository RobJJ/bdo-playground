Components & Functionality to implement and test...
.
left off place:::
Just installed react-router... we need to set up the basic flow of the router and try get the tabBar working correctly with the testData... once we get the router stuff flowing well, we can worry about building out the components... make sure that the data is being passed around to each component correctly...
.
.
conversion...
using: https://csvjson.com/csv2json
.

1. Build a simple tabbing component. Think about how the Tab component would work with passed in data for example and what it could render. The tab is one of the main components of the project and needs to be simple and easy to use. It will be used as a selector to render the main display. Think about it...
   .
   My intial thoughts about this TabBar is that the TabBar will have one fixed component - Home - and then the other tabs will be rendered from an array that is populate based on the users choices...
   When a user clicks on a region from the home tab, an array is updated which in turns triggers the TabBar render... The array should contain the data that the TabBar needs, but it could also be all the data that the Tab component needs to render the displayed overview...
   .
   .
   .
   .
   .
2. Build a component that encapsulates the scatter plot diagram. Try different libaries and ways of rendering the information. Keep it simple at the start. Render one set of data. Then try build in a filter of that data. Then try and merge the environmental data filters. Think about how you should best store this raw data and then create the maps based off the filter...
   .
   .
3.

QUESTIONS:
.

**MAP VISUAL**
Map on landing page will show the total scores as a range of colors, depending on their values. You should be able to view each score as a different version of the map.
The map will then have four different toggles to see the different performance of each PROVINCE: Can have 5 settings choices....
Also be able to filter these scores by year
Filters: Year & 5 toggles
.
.
**SCATTER VISUAL**
.
.
.
.
.
Python data calculation
To create a file and run the code provided, you can follow these steps:

Open a text editor or code editor on your computer.
Copy and paste the code into the editor.
Save the file with a name of your choosing and a .py extension (e.g. correlation_coefficient.py).
Open a terminal window on your computer.
Navigate to the directory where you saved the file using the cd command. For example, if you saved the file in the documents directory, you would run the command cd documents to navigate to that directory.
Run the Python file by typing python followed by the name of the file, and press Enter. For example, if you saved the file as correlation_coefficient.py, you would run the command python correlation_coefficient.py.
This will run the code in the file and print the Pearson correlation coefficient and the p-value for the economic scores and the deforestation impact scores to the terminal. The Pearson correlation coefficient will be a value between -1 and 1, where -1 indicates a strong negative correlation, 0 indicates no correlation, and 1 indicates a strong positive correlation. The p-value will be a measure of the statistical significance of the correlation, with a lower p-value indicating a more significant correlation.
