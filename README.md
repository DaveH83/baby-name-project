# baby-name-project

My wife keeps asking me to think of potential names for our soon-to-be son, but I am having an uncharacteristic creativity block.  And most of the ones I do suggest are a no from her.  I have found some temporary peace by telling her that I am going to make a web-app for my Code Platoon Personal Project that will help us decide on a name for our baby.  Here's how it'll work:

Imagine a Tinder style concept where you are presented with a potential name and you swipe (or press a button or arrow key, we'll see) right for yes, left for no, and up for maybe (the swipe up for maybe might be a stretch goal depending on the math that I'll discuss later, we'll see on that as well).  Each category will be tracked in a database.  

Each parent will have a unique account, but the two accounts will be paired in some fashion (I haven't decided on how exactly to do this yet, there are a few options I have in mind).  Matches of the Yes names will be visible by both parents.

I have found an API that will load 10 names at a time, and can be filtered for gender (boy, girl, neutral) and for popularity (yes, no), and will probably use this to feed the database for swipes.  Alternatively, I have found a large .csv file of baby names from various years from the Social Security Administration, and could load that as an initial database, but then I would lose one of my APIs.

For my 2nd API, I have found one that will let me request common diminutives (nicknames) for any particular name, and will hook that in to display alongside the root name, so the parent can make sure it's not super easy to make fun of their kid when he is growing up.

So far, this only provides a list of names that both parents agree on, which is a big help, but doesn't help them rank those names and come to a consensus on one.  

That's where my stretch goal comes in:

Once a suitable number of names are on the 'both agreed' list, I want to put them through a ranking algorithm with each parent.  Basically, present two names and pick one over the other.  Ideally running through all possible matchups, those that win will increase their significance score, and be ranked as the top potential name.  

If I track matches on the 'maybe' lists, then I can throw in some of those names in the matchup algorithm which should reinforce the truly good names.

I would like to add the capability to manually enter a name as well, and probably keep it in a separate category and ensure that they also enter the ranking algorithm of the both agreed names, since anything manually entered might not have showed up on the other parents list yet, and the parent that entered it probably has some emotional attachment to it.

That's more or less it.  If that is confusing, or you want to ask how I can meet a specific requirement for grading, just let me know.
