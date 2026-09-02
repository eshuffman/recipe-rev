## August 31, 2026

The purpose of this document is to keep track of what progress I make each day, my learnings, etc. Having recently been thrust into the job hunt full time, I'm also attempting to further my learning, which means working on this little full-stack application for an hour a day. Super manageable. We'll see which comes first: employment, or deployment. :)

My goal for this app is to create a secure recipe keeper and grocery list manager. Here are some specs and things:
- User can link to recipes online and pull down the recipe information
- User can build out a full menu for the week or month, to include snacks, desserts, whatever
- Users can categorize meals as they like
- Users can add sides to planned meals; for example, if a user has selected their saved [Chili Crisp Salmon](https://cooking.nytimes.com/recipes/1024004-sheet-pan-chile-crisp-salmon-and-asparagus) recipe (which is actually super tasty, you're welcome), they can add a side of, say, 1 lb green beans and 1 cup rice, which will then get added to their grocery list for the week, without having to have a recipe for steamed green beans or rice.
- I'm getting ahead of myself. Users can create a grocery list for the week, pulled from the recipes and sides they've selected for that week.
- Users can choose to batch-cook and fill out their week with a single recipe. If they want to create a large salad recipe and stick it in jars in the fridge for easy grabbing, they can choose a "batch cook" option and fill out the rest of their week with the servings from the meal they made at the start of the week, without having to add the recipe to the menu each day of the week (which then tends to mess up the grocery list).
- Secure sign-on.
- Ideally hosted online and downloadable via app store. Data is synced between devices.

Really, that's it. Think Paprika, but customized to fix the things that irk me. :)

Now, in spite of my three years of experience as a software engineer/professional bug hunter...I know next to nothing about many of these goals. So, I'll learn! And flail. And hopefully come out with something fun and useful in the end. An hour a day means I'll be building really slowly, but that's fine. It's a process.

So, the next step for today: figure out what I want my backend to look like!

Nope, that's not the next step. The next step is setting up an SSH key for my Github account so I can properly push changes. SSH stuff used to freak me the heck out, but wow Github. I followed [this tutorial](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) and it was easy as pie. Back in business, baby.

I decided to make my backend language Go, because, I don't know, why not add one new language to my skillset, right? Which meant I had to **install** Go, which took me to the end of my hour. But triumph! I did get to a point where I could enter the command `go version` into my terminal and actually get something back that's not an error. Tomorrow, I get to play around with it, and maybe even create my first API endpoint!

## Sept 1, 2026

Today I only have about a half hour to work on the project. But any time is better than none! First order of business: installing Node. Easy peasy.

Orrr so I think. Because when I go to create a new React project, I get `node: No such file or directory`. Whoops. I decide that it's probably because I didn't install Node in my frontend folder, so I try again, and then it's success. I give it the old npm start and there it is: the boilerplate React page with the spinny logo.

The tutorial I'm following ([here](https://medium.com/@riley.anderssen/how-to-connect-a-react-frontend-to-a-go-backend-a-simple-guide-8e13d8e2aa2a)) has me put in some code just to create the connection between the Go backend and React/TS frontend, so before I mess around with creating my first API call, I fiddle with the React side of things. I've still got it, baby! I manage to get it to the point where I can enter text into an input area, push the button, and get that text to appear in the textarea beneath it. Very nice.

After that I put aside my vanity (mostly) and finish hooking up the backend to the frontend by copying in the tutorial's main.go code. Do I know what it's doing? Not really, but's not exactly complex, and the author does explain a little bit: it appears we're creating a middleware function so CORS doesn't get angry, and then creating the howdyHandler function for the api/howdy endpoint.

That's about all I have time for today, and that's as far as the tutorial goes anyway. (GOES. Hah. No put intended.) I need to learn more about Go -- like, what the heck does `:=` mean? So I'll look forward to diving into that more tomorrow, and maybe creating some sort of recipe input endpoint. Or something!

## Sept 2, 2026:

Today I have two goals. First, I'd like to see if I can hook my frontend up to an external API, make a call, and get data of some sort. Second, I'd like to see if I can get some sort of database hooked up. PERSIST! THAT! DATA!

I know how time works, so if I accomplish *one* of those goals today, I'll consider it time well spent.

I do a small bit of research and find a recipe-parser API that costs about $20/month to access via API key. Thankfully there's a free seven-day trial period, so I sign up and get my API key, which is --

**RECORD SCRATCH**

I'm not giving you chuckleheads my API key! Which leads me to my next little bunny trail: I know it's a huge no-no to push an API key up to Github. Which means I need to store it in an env variable. Which means I need to *figure out* how to store it in an env variable.

Luckily, like all other obstacles I've encountered up to this point, it isn't actually super difficult. Literally just a matter of creating a .env file in my root directory, adding the API key as a named variable, creating a .gitignore file and adding .env to it, and then making a little reference to the file in my App.tsx page.

From there, it's a matter of figuring out how to call the endpoint properly in the code. Which I do, fairly handily, and then boot up my project. GIANT SCREAMY SCREEN OF ERRORS. Because nothing can be *so* easy, after all. Anyway, it turns out I needed to install axios instead of just screaming into the void for it.

Still, there are several other errors that have to do with packagey stuff. I'm not sure what I could have possibly done to upset my project this much between yesterday and today. Oh, the fun of development, right?