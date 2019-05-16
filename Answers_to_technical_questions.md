## How long did you spend on the coding test?

- I spent about 2.5 hours total:
  - development: 1 hours
  - testing: 1 hour
  - deployment: .5 hours

## What would you add to your solution if you had more time?

What I would add to the application is as follows:

### Functionality
- Pagination to view more more than just one page of results
- Filtering so that you only see pricing relevant to your budget (i.e you can see restaurants within your price range)

### Styles
- I would clean up styling so that the app is more presentable

### Tests
- I would add a lot more test cases, and I would probably change my usage of `redux-thunks` to `redux-saga` so that I could leverage generator functions and make mocking api calls and requests easy to test (with thunks they aren't that easy to mock or test)

## What was the most useful feature that was added to the latest version of your chosen language?

- The most useful feature that was added to the latest version of React would have to be Hooks. Although I didn't use it in this application (as I wanted to use redux and other libraries)

The following code snippet illustrates how you would use hooks:

```
function App() {
  const [data, setData] = useState([])
  // useEffect is componentDidMount()
  useEffect(() => {
    const fetchData = async () => {
      const result = fetch('https://swapi.co/api/people/', {
        method: 'GET'
      }).then((response) => {
        return response.json();
      }).then((res) => {
        return res
      }).catch((err) => {
        return err;
      });
      setData(result.results)
    }
    // call the function right away as a workaround for async not yet being supported in effects

    fetchData();
  }, []);

  return (
    <div>
      {data.results.map((character) => {
        // insert some markup here 
      });}
    </div>
  )
}
```

This example would fetch from the [Star Wars API](https://swapi.co) and return a list of characters which you could map over and display on a page.

## How would you track down performance issues in production? 
- I would take a look at DB logs (if I had access) to see what queries were run on the database, and how long they took.
If the database queries weren't taking too long, I would next open up the Chrome developer tools and click on the performance tab, record actions on the website, and then scroll through the results to see how long it takes on average for certain tasks to be performed (loading, scripting, rendering, painting, etc.) This would give insights in to whether or not builds are optimized, and would also give valuable insight as to how fast the server is responding with the requests. I would also record a few times to see if the performance issues are consistent, or if they're sporadic. If they're sporadic, I would then check to see if one of the server instances is having issues that might cause performance issues.

## Have you ever had to do this?

- Yes, my team and I recently had to track down an issue where one server instance was dirty (would sometimes cause 500 error codes). We were able to isolate and determine the cause of the issue was because of dirty server instances by checking various sections of the site for certain network requests, as well as seeing that the application worked sometimes but not often. If it was a total server outage we wouldn't have seen anything on the website, and so we were able to determine that at least one of our server instances was experiencing problems.

## How would you improve the API that you just used?

- I wouldn't put it behind a barrier (3-4 weeks to be approved to use their API). This alone would likely improve the API a lot as more developers could use the API, find things that they would like improved and provide that feedback. I would also add the ability to see the restaurant rating so that users can determine if they would want to eat at that particular restaurant, and I would even probably expose a method that just contained data for reservation information (most reserved restaurants) so that people could either a) visualize the data or b) inform the general public about the restaurant so they could eat there as well.

## Please describe yourself using JSON

```
{
	"person": {
		"name": "Eric Bastarache",
		"jobTitle": "Software Engineer",
		"education": {
			"secondary": {
				"school": "Cardinal Newman Catholic Secondary School"
			},
			"college": {
				"school": "Centennial College",
				"diploma": "Software Engineering"
			}
		},
		"hobbies": [
			"Guitar playing",
			"Badminton",
			"Ice Skating"
		],
		"languages": [
			"English",
			"French"
		],
		"programmingLanguages": [
			"JavaScript",
			"PHP",
			"C# (rusty)",
			"Java (rusty)"
		]
	}
}
```