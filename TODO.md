Components & Functionality to implement and test...
.
.
.
conversion...
using: https://csvjson.com/csv2json
.
IDEA...
on initial load of the APP. Do some 'larger calculations that you can use later when navigating around the site.
For example:

- A country, regional, provincial average for scores each year
- .
  .
  .

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

---

---

Questions for the team:

1. HomePage-Graphs: We need to clarify what the user experience is going to be for the Homepage charts, especially what filters they are able to use and how that impacts what they see and what they understand about the data. It is very confusing for a user to have multiple envr filters unless its very clear about what the graph is showing and how those scores have been calculated....
2. HomePage-Regions: If I list the regions here, what scores are actually been showns here? The zone:'total', year: 2021 ?? Does the user know this? I think these filters and years data should be something that is used on the summary page, or used in a limited way on the HomePage....
3. HomePage-Overall : I need the overall data summary stuff for the homePage.. ie, the populations breakdowns etc... use Dummy??
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
