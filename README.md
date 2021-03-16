# RoosterGrin Frontend Dev Test

## Headline

For this project, I attempted to hew as closely as possible to the given functional and artistic parameters as I could, while still having time for a few extras.

I got a few of these done, but not as many as I'd like.  Among my extras, I was able to:

• create a backend
• create a crude but workable CMS for this project that anybody in the world should be able to use regardless of experience.
• get both the front and the backend hosted.
• make sure everything looked good on desktops, phones and tablets in both perspectives.

You can view the hosted version of this project at https://main.d2rr0g4gs0wgxn.amplifyapp.com/

Due to interview commitments with other companies, I unfortunately wasn't able to start work on this project until this last weekend. This meant that a lot of things had to get left on the table. What I missed out on:

• I created a functioning auth module, but ran out of time to get it plugged in.
• I'm sure the project doesn't have as many "bells and whistles" as some others might have.  However, having been a graphic designer working with clients in a functioning business, bells and whistles are always risky and functionality comes first.
• I ran out of polish time to change to design my own buttons and check the applications performance on laptops.

In terms of tools, the front end is put together in React and the backend is made up with Python/Django. I made partial use of Django-rest-framework, but also built out some routes on my own after, once again, I ran out of time. 

If, for some reason, you'd like to run this application on your own machine, you'll have to run both the front and the backend from separate servers.  For the front, simply run "npm -install" to install all dependencies and then "npm start" to get it up and going. 

For the back, if you do not already have python3 installed, you'll want to run:

#source .venv/bin/activate

to start a virual environment and then install python3.  

Then run 

#pip3 install requirements.txt 

to get the dependencies and

#python3 manage.py runserver

to get the backend server running.

Many, many thanks to the folks at RoosterGrin for giving me the opportunity to hack this together.

--Jed--
