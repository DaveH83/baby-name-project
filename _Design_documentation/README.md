# baby-name-project

## View full design w/ sql schema and wireframe drawings on Excalidraw:
## https://excalidraw.com/#json=hbwhydNmlsXTh4nyZMMr0,m0VXYBsK_tvs5-3ha8z_vQ

Premise: My wife keeps asking me to think of potential names for our soon-to-be son, but I am having an uncharacteristic creativity block. And most of the ones I do suggest are a no from her. I have found some temporary peace by telling her  that I am going to make a web-app for my Code Platoon Personal Project that will help us decide on a name for our baby.  Here's how it'll work:

Once logged in, and after your account is connected with the other parent, you will be presented with names one at a time.  You will have the option of swiping right for yes, left for no, or up for maybe.  Both parents will go through this process to generate a list of names that they both agree on.

The list of agreed upon names will then be ranked via another process, which will present two names at once, and the parent will choose which one they prefer, adding to a weight property of that name.  This process will go until all combinations have been ranked, and then the names will be ordered according to their weight score.  In theory, the best choice of name that they both like will be ranked #1.

Requirements:
- User Accounts
    - Authentication
    - Profile Data
- Database(s)
    - Baby name database, either pulled via API or stored in the DB (still deciding, will depend on usefulness of API)
    - User account table
    - Shared Session table to store liked/dislikes/agreed names for session
-Functionality
    - Present one baby name at a time    
    - Swipe (press or click arrow) right / left for yes / no
    - 'Yes' names stay visible in a list on the page
    - Once matches exist between both parents, option for -vs- match ups to rank mutually agreed names, adding them to a 'leaderboard'
    - Leaderboard is only visible once both parents have gone through ranking process